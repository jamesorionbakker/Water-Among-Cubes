import React from 'react';

export default function Cube(props) {
    let cubeContainerStyle = {
        backgroundColor:
            props.item.baseHeight === 0 && props.item.isLandlocked === false
                ? 'white'
                : 'white',
        boxShadow: `0px 0px ${(props.item.baseHeight / 10) * 10}px rgba(0,0,0,1)`,
        zIndex: props.item.baseHeight,
        margin: `-${props.item.baseHeight / 7}px`,
    };

    return (
        <div className="cube-container" style={cubeContainerStyle}>
            <div
                style={{
                    backgroundColor: `rgba(0,128,255,${
                        props.item.waterHeight / 10
                    })`,
                }}>
                <span></span>
            </div>
        </div>
    );
}
