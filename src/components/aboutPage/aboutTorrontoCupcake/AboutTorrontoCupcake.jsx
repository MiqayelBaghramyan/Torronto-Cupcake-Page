import React from "react";
import styles from "./AboutTorrontoCupcake.module.css";
import arrorRight from "../../../assets/images/AboutPageImages/AboutTorrntoCupcake/Arrow 1.png";
import girlImg from "../../../assets/images/AboutPageImages/AboutTorrntoCupcake/Rectangle 104.png";

const AboutTorrontoCupcake = () => {
    return (
        <div className={styles.AboutTorrontoCupcakePage}>
            <div className={styles.InTorontoAbout}>
                <div className={styles.spanBox}>
                    <span>about</span>
                    <img src={arrorRight} alt="" />
                    <span>toronto</span>
                    <span>cupcake</span>
                </div>
            </div>
            <div className={styles.AboutTorrontoCupcake}>
                <span>about toronto cupcake</span>
            </div>

            <div className={styles.AboutMicheleBox}>
                <img className={styles.girlImg} src={girlImg} alt="" />
                <div className={styles.rightTextBox}>
                    <span className={styles.AboutMicheleSpan}>About Michele</span>
                    <p className={styles.textVerev}>Toronto Cupcake was created by Michelle Harrison so she could pursue her love of baking. A lifelong baker, inspired by her mother, Michelle opened Toronto Cupcake in August 2010 as one of Canada's first gourmet cupcakeries.</p>
                    <p className={styles.textCenter}>Our cupcakes are baked daily using the finest ingredients.Canada's and the GTA's favourite stop for that special treat. Order cupcakes online 24/7 for your special event. Delivery avaialable most days between 8 and 6pm TO time</p>
                    <p className={styles.textNerqev}>
                        Our cupcakes are baked daily using the finest ingredients.Canada's and the GTA's favourite stop for that special treat. Order cupcakes online 24/7 for your special event.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutTorrontoCupcake;