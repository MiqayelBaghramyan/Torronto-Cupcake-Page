import React from "react";
import styles from "./AboutTorrontoPage.module.css";
import img from "../../../assets/images/AboutPageImages/AboutTorrntoPageImg/Rectangle 105.png";

const AboutTorrontoPage = () => {
    return (
        <div className={styles.AboutTorrontoPage}>
            <div className={styles.all}>
                <div className={styles.leftBox}>
                    <span className={styles.AboutTorrontoSpan}>About Toronto</span>
                    <p>We are driven by loving what we do and what we make everyday. We get to use the finest ingredients to make what we believe are the tastiest treats around. And.. we love the idea that our treats are making people happy every time they bite into one. How much fun is that!</p>
                    <p>We are driven by loving what we do and what we make everyday. Get to use the finest ingredients to make what we believe are the tastiest treats around. And.. we love the idea that our treats
                    </p>
                </div>
                <img className={styles.cakeInProcessImg} src={img} alt="" />
            </div>
                <span className={styles.AboutSpan}>About order & delivery</span>
        </div>
    )
}


export default AboutTorrontoPage;