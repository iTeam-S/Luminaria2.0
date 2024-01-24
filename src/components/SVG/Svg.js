
"use client";
import { useRef, useState } from "react";
import styles from "./svg.module.css";

export default function Svg({isRotate = false}) {
    return (
        <div className={styles.svg}>
            {!isRotate ? <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="7.4" y="6.9" width="1" height="91.6" fill="rgb(0, 0, 0)" />
                <rect transform="matrix(0,-1,1,0,-27.9,67.3)" fill="rgb(0, 0, 0)" x="59.9" y="35.6" width="1" height="91.6" />
                <path transform="matrix(0,-1,1,0,-4.5,77.2)" d="M 19.7 12.6 C 47.3 12.6 69.7 35 69.7 62.6"
                    stroke="black"
                    fill="none" />
            </svg> :
            <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect transform="matrix(-1,0,0,-1,106.7,104.9)" x="24.8" y="7.7" width="1" height="91.6" fill="rgb(0, 0, 0)" />
                <path stroke="black" d="M 18.9 30.1 C 46.5 30.1 68.9 52.5 68.9 80.1" transform="matrix(0,1,-1,0,111.2,27.7)" fill="none" />
                <rect x="59" y="51.9" width="1" height="91.6" transform="matrix(0,1,-1,0,134.6,37.6)"
                   
                    fill="rgb(0, 0, 0)" />
                <rect x="98.4" y="11.6" width="0" height="0" fill="rgb(255, 255, 255)"/>
            </svg>}

        </div>
    );
}