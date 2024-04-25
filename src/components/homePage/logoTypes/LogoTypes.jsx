import React from "react";
import styles from "./LogoTypes.module.css";
import { Link } from "react-router-dom";
import { logoData } from "../../../data/Data";

const LogoTypes = () => {
    return (
        <div className={styles.LogoTypes}>
            <div className={styles.logoPageLogos}>
                {logoData.map((logo) => (
                    <div key={logo.id} className={styles.logosBox}>
                        <Link to={logo.link}>
                            <img className={styles.logoImg} src={logo.src} alt={logo.name} />
                            <span className={styles.cupcakes}>{logo.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoTypes;
