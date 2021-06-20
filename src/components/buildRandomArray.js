export default function buildRandomArray(gridSize) {
    let { w, h } = gridSize;
    let output = [];
    for (let i = 0; i < h; i++) {
        let currentRow = [];
        for (let i = 0; i < w; i++) {
            currentRow.push(Math.floor(Math.random() * 10));
        }
        output.push(currentRow);
    }
    return output;
}


