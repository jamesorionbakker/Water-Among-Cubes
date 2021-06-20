let height, width, depth, waterVolume;
let visited = [];
let cubes = [];
let resultArray = [];

class Cube {
    constructor(x, y, baseHeight, isLandlocked) {
        this.x = x;
        this.y = y;
        this.baseHeight = baseHeight;
        this.waterHeight = 0;
        this.totalHeight = this.baseHeight + this.waterHeight;
        this.isLandlocked = isLandlocked;
        this.N = null;
        this.E = null;
        this.S = null;
        this.W = null;
    }
    fill() {
        this.waterHeight++;
        this.totalHeight++;
    }
}

export default function getFillData(inputArray) {
    if (inputArray.length === 0 || inputArray[0].length === 0) {
        return {
            waterVolume: 0,
            resultArray: [],
        };
    }
    waterVolume = 0;
    resultArray = [];
    cubes = [];
    ({ height, width, depth } = calculateDimensions(inputArray));

    inputArray.forEach((row, y) => {
        row.forEach((cube, x) => {
            cubes.push(
                new Cube(x, y, cube, checkIfLandlocked(x, y, inputArray))
            );
        });
    });

    let landlockedCubes = cubes.filter(cube => cube.isLandlocked ? true : false);

    linkAdjacentCubes(landlockedCubes);

    for (let i = 0; i < depth; i++) {
        let anyFilled = false;
        landlockedCubes.forEach((cube) => {
            visited = [];
            if (canPool(cube)) {
                anyFilled = true;
                cube.fill();
                waterVolume++;
            }
        });
        if (!anyFilled) break;
    }
    resultArray = rebuildArray(cubes);

    return {
        waterVolume,
        resultArray,
    };
}

function linkAdjacentCubes(landlockedCubes) {
    landlockedCubes.forEach((current) => {
        if (!current.isLandlocked) return;
        current.W = cubes.find((cube) => {
            return cube.y === current.y && cube.x === current.x - 1
                ? true
                : false;
        });
        current.E = cubes.find((cube) => {
            return cube.y === current.y && cube.x === current.x + 1
                ? true
                : false;
        });
        current.N = cubes.find((cube) => {
            return cube.y === current.y - 1 && cube.x === current.x
                ? true
                : false;
        });
        current.S = cubes.find((cube) => {
            return cube.y === current.y + 1 && cube.x === current.x
                ? true
                : false;
        });
    });
}

function rebuildArray(inputArray) {
    let flatArray = [...inputArray];
    let rebuiltArray = [];
    while (flatArray.length > 0) rebuiltArray.push(flatArray.splice(0, width));
    return rebuiltArray;
}

function canPool(current) {
    if (visited.includes(current)) {
        return true;
    }
    if (!current.isLandlocked) {
        return false;
    }
    visited.push(current);
    let N = current.N;
    let E = current.E;
    let S = current.S;
    let W = current.W;
    if (
        current.totalHeight > N.totalHeight ||
        current.totalHeight > E.totalHeight ||
        current.totalHeight > S.totalHeight ||
        current.totalHeight > W.totalHeight
    ) {
        return false;
    }
    if (current.totalHeight === N.totalHeight) {
        if (!canPool(N)) {
            return false;
        }
    }
    if (current.totalHeight === E.totalHeight) {
        if (!canPool(E)) {
            return false;
        }
    }
    if (current.totalHeight === S.totalHeight) {
        if (!canPool(S)) {
            return false;
        }
    }
    if (current.totalHeight === W.totalHeight) {
        if (!canPool(W)) {
            return false;
        }
    }
    return true;
}

function checkIfLandlocked(x, y) {
    if (x === 0 || x === width - 1) return false;
    if (y === 0 || y === height - 1) return false;
    return true;
}

function calculateDimensions(inputArray) {
    let inputFlattened = inputArray.flat();
    let depth = Math.max(...inputFlattened) - Math.min(...inputFlattened);
    let width = inputArray[0].length;
    let height = inputArray.length;
    return {
        height,
        width,
        depth,
    };
}
