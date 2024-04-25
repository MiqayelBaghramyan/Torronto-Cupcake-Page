import React from "react";
import styles from "./SpecialOffer.module.css";
import Img1 from "../../../assets/images/HomePageImages/specialOffer/specialOffer_page_img.png";

const SpecialOffer = () => {
    return (
        <div className={styles.SpecialOffer}>
            <div className={styles.SpecialOffer_page_left_box}>
                <span className={styles.SpecialOfferSpan}>Special offer</span>
                <p className={styles.SpeciaOfferPtag}>Special offer to our customer order 2 boxes get a gift another box of cupcakes</p>
                <p className={styles.loremIpsumPtag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</p>
                <button className={styles.orderNow}>Order Now</button>
            </div>
            <div className={styles.cakeBox}>
                <img className={styles.Img1} src={Img1} alt="Img1" />
                <button className={styles.joinUs}>Join Us</button>
            </div>
        </div>
    )
}

export default SpecialOffer;