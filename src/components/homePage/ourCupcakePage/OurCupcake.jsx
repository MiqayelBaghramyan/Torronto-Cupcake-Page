import React, { useState } from "react";
import styles from "./OurCapcakesPage.module.css";
import Img1 from "../../../assets/images/HomePageImages/ourCupcakesImg/about_page_img1.png";

const OurCupcake = () => {
    const [seeMore, setSeeMore] = useState(false);

    const toggleSeeMore = () => {
        setSeeMore(!seeMore);
    };

    return (
        <div className={styles.OurCupcakesPage}>
            <div className={styles.OurCupcake_page_verev}>
                <img className={styles.Img1} src={Img1} alt="Img1" />
                <div className={styles.verevAj}>
                    <span className={styles.AboutUs}>About us </span>
                    <p className={styles.ourCupcakes}>Our cupcakes are baked daily using the finest ingredients. Canada's and the GTA's favourite stop for that special treat. Order cupcakes online 24/7 for your special event. Delivery available most days between 8 and 6pm TO time. <br /><br />
                        {seeMore && (
                            <span className={styles.Celebrating}>
                                Celebrating our 13th year of providing Canada's most delicious cupcakes for business meetings, birthdays, weddings, or for no other reason than because.
                            </span>
                        )}
                    </p>
                    <button className={styles.seeMore} onClick={toggleSeeMore}>
                        {seeMore ? "See Less" : "See More"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurCupcake;
