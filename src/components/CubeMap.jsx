import React from 'react';
import { useState } from 'react';
import Cube from './Cube';
import getFillData from './cubeCalc';
import buildRandomArray from './buildRandomArray';

export default function CubeMap(props) {
    let [mapSize, setGridSize] = useState({ w: 30, h: 30 });
    let waterVolume;

    function getCubeElements() {
        let resultArray;
        ({ resultArray, waterVolume } = getFillData(buildRandomArray(mapSize)));
        return resultArray.flat().map((item, i) => {
            return <Cube item={item} key={i} id={i} />;
        });
    }

    function changeDimension(e) {
        let { name, value } = e.target;
        value = value === '' ? 0 : parseInt(value);
        setGridSize((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    return (
        <main>
            <label htmlFor="width-input">Width:</label>
            <input
                id="width-input"
                name="w"
                type="number"
                value={mapSize.w === 0 ? '' : mapSize.w}
                onChange={changeDimension}
            />
            <label htmlFor="height-input">Height:</label>
            <input
                id="height-input"
                name="h"
                type="number"
                value={mapSize.h === 0 ? '' : mapSize.h}
                onChange={changeDimension}
            />
            <div
                style={{
                    gridTemplateColumns: `repeat(${mapSize.w}, 1fr)`,
                }}
                className="cube-map">
                {getCubeElements()}
            </div>
            <span>Total Volume: {waterVolume} Units</span>
        </main>
    );
}
