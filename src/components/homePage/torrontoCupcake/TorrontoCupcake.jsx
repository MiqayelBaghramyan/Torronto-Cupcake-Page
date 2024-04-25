import React from "react";
import styles from "./TorrontoCupcake.module.css";
import imgCenter from "../../../assets/images/HomePageImages/torrontoCupcakeImages/torronto_PageImgCenter.png";
import imgDzax from "../../../assets/images/HomePageImages/torrontoCupcakeImages/torronto_page_imgDzax.png";
import imgAj from "../../../assets/images/HomePageImages/torrontoCupcakeImages/torronto_page_ajImg.png";


const TorrontoCupcake = () => {
    return (
        <div className={styles.TorrontoCupcake}>
            <span className={styles.torronto}>Toronto Cupcake</span>
            <div className={styles.torronto_page_all}>
                <img className={styles.imgDzax} src={imgDzax} alt="" />
                <span className={styles.next_spanAj}>NEXT</span>
                <img className={styles.imgCenter} src={imgCenter} alt="" />
                <span className={styles.next_spanDzax}>NEXT</span>
                <img className={styles.imgAj} src={imgAj} alt="" />
            </div>
            <span className={styles.thankYouSpan}>Welcome! Thank you for stopping by Toronto <br /> Cupcake.</span>
            <button className={styles.JoinUs}>Join us</button>
        </div>
    )
}



export default TorrontoCupcake;