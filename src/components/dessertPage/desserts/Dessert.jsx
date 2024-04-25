import React, { useState } from "react";
import styles from "./Dessert.module.css";
import { GoChevronRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import img1 from "../../../assets/images/DessertPageImg/DessertImages/img1.png";
import img2 from "../../../assets/images/DessertPageImg/DessertImages/img2.png";
import { Link } from "react-router-dom";

const Dessert = () => {


    const [isText, setIsText] = useState(false);
    const [isarrowRotated, setIsarrowRotated] = useState(false);

    const handleClick = () => {
        setIsText(!isText);
        setIsarrowRotated(!isarrowRotated);
    }
    return (
        <div className={styles.DessertPage}>
            <div className={styles.homeDessertBox}>
                <Link to="/">
                    <span>home</span>
                </Link>
                <GoChevronRight className={styles.arrowRight} />
                <Link to="/dessertPage">
                    <span>desserts</span>
                </Link>
            </div>

            <div className={styles.alwaysAvailableBox} onClick={handleClick}>
                <span>Always available</span>
                <SlArrowDown className={`${styles.SlArrowDown} ${isarrowRotated && styles.rotated}`} />
            </div>
            {isText && (
                <p className={styles.InApanicP}>No added Tran's fats or margarine is used in any of our desserts, and all materials are non-GMO. Locally picked fruits and hand-selected chocolates are among the finest ingredients we have <br /> gathered from around the world.
                </p>
            )}

            <div className={styles.nerqevBox}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>

        </div>
    )
}

export default Dessert;