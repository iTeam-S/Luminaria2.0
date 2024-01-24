"use client";
import { useRef, useState } from "react";
import styles from "./section.module.css";

export default function SectionInfo({grandTitre, petitTitre, paragraphe, Component}) {
    return (
        <>
            <div className={`row ${styles.section}`}>
                <div className={`col-md-6 ${styles.section_left}`}>
                    <h2>{grandTitre}</h2>
                    <h4>{petitTitre}</h4>
                    <p>
                        {paragraphe}
                    </p>
                </div>
                <div className="col-md-6">
                    {Component}
                </div>
            </div>
        </>
    );
}
