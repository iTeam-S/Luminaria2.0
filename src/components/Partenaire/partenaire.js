"use client";
import { useRef, useState } from "react";
import styles from "./partenaire.module.css";
import Svg from "../SVG/Svg";

const PartenaireRight = ({component1 = null, component2 = null, component3 = null}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Svg />
            </div>
            <div className={`${styles.div_white}`}>{component1}</div>
            <div className={`${styles.div_gold}`}>{component2}</div>
            <div className={`${styles.div_white}`}>{component3}</div>
            <div className={styles.bot}>
                <Svg isRotate={true} />
            </div>
        </div>
    );
}

export default PartenaireRight;