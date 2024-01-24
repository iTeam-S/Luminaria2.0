"use client";
import { useRef, useState } from "react";
import styles from "./container.module.css";
import Svg from "../SVG/Svg";

const ContainerWite = ({children = null}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Svg />
            </div>
            <div className={`${styles.div_white}`}>{children}</div>
            <div className={styles.bot}>
                <Svg isRotate={true} />
            </div>
        </div>
    );
}

export default ContainerWite;