import React from "react";
import styles from "./BoxesCake.module.css";
import BoxesCakeData from "../boxesCakeData";
import { BoxesData } from "../../../data/Data";

const BoxesCake = () => {
    return (
        <div className={styles.BoxesCakePage}>
            <BoxesCakeData item={BoxesData} />
        </div>
    )
}

export default BoxesCake;
