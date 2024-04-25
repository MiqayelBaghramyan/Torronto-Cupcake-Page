import React from "react";
import styles from "./PhotoCakesAndCupcakes.module.css";
import photosCakeImg1 from "../../../assets/images/CorporateEventsPageImg/photosCakesAndCupcakesImg/photosCakeAndCupcakes.png";

const PhotoCakesAndCupcakes = () => {
    return (
        <div className={styles.PhotoCakesAndCupcakesPage}>
            <span className={styles.photoCakesAndCupcakesSpan}>Photo Cakes & Cupcakes</span>
            <p className={styles.ourEdible}>Our edible image cupcakes offer the perfect way to show off a new brand or product launch, or simply celebrate a special event.</p>
            <img className={styles.photosCake} src={photosCakeImg1} alt="" />

            <button className={styles.toOrderBtn}>To order</button>
            <p className={styles.customerSupportP}>
                <span className={styles.needAhand}>Need a hand?</span> Customer support telephone: <span className={styles.tel}>0330 058 9525</span>
            </p>
        </div>
    )
}

export default PhotoCakesAndCupcakes;