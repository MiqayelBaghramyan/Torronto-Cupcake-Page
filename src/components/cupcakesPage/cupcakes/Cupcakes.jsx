import React, { useState } from "react";
import styles from "./Cupcakes.module.css";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import img1 from "../../../assets/images/CupcakesPageImg/Rectangle 111.png";
import img2 from "../../../assets/images/CupcakesPageImg/Rectangle 108 .png";
import { GoChevronRight } from "react-icons/go";


const Cupcakes = () => {

    const [isText, setIsText] = useState(false);
    const [isarrowRotated, setIsarrowRotated] = useState(false);

    const handleClick = () => {
        setIsText(!isText);
        setIsarrowRotated(!isarrowRotated);
    }
    return (
        <div className={styles.CupcakesPage}>
            <div className={styles.homeAndCupcakesspan}>
                <Link to="/">
                    <span>home</span>
                </Link>
                <GoChevronRight />
                <Link to="/cupcakePage">
                    <span>cupcakes</span>
                </Link>
            </div>
            <div className={styles.alwaysAvailableBox} onClick={handleClick}>
                <span>Always available</span>
                <SlArrowDown className={`${styles.SlArrowDown} ${isarrowRotated && styles.rotated}`} />
            </div>
            {isText && (
                <p className={styles.InApanicP}>In a panic or can't decide? Need a dozen awesome cupcakes but don't want to pick them out individually? Read no more just hit the add to cart button and we will pick out 12 delicious treats from our "always <br /> available" cupcakes.
                </p>
            )}

            <div className={styles.OneDozenSpanBox}>
                <span>One Dozen One Click</span>
            </div>

            <div className={styles.nerqevBox}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    )
}

export default Cupcakes;