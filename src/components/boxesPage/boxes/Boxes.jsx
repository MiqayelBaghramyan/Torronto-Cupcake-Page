import React, { useState } from "react";
import styles from "./Boxes.module.css";
import { SlArrowDown } from "react-icons/sl";
import leftImg from "../../../assets/images/BoxesPageImages/RectangleLeft.png";
import rightImg from "../../../assets/images/BoxesPageImages/Rectangle 116.png";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

const PageBoxes = () => {
    const [isText, setIsText] = useState(false);
    const [isarrowRotated, setIsarrowRotated] = useState(false);

    const handleClick = () => {
        setIsText(!isText);
        setIsarrowRotated(!isarrowRotated);
        setIsBox(!isBox);
    }
    const [isBox, setIsBox] = useState(false);



    return (
        <div className={styles.BoxesPage}>
              <div className={styles.homeDessertBox}>
                <Link to="/">
                    <span>home</span>
                </Link>
                <GoChevronRight className={styles.arrowRight} />
                <Link to="/BoxesAll">
                    <span>Boxes</span>
                </Link>
            </div>

            <div className={styles.alwaysAvailableBox} onClick={handleClick}>
                <span>Always available</span>
                <SlArrowDown className={`${styles.SlArrowDown} ${isarrowRotated && styles.rotated}`}  />
            </div>
            {isBox && (
                <div className={styles.alvaysAvailableBoxDown}>
                    <button>All available  boxes</button>
                    <button>Autumn cupcake  box</button>
                    <button>Chocolate lover box</button>
                    <button>Assorted classics box</button>
                    <button>Fruit cupcake box</button>
                    <button>Animal cupcake box</button>
                    <button>Holidays cupcake box</button>
                    <button>Dinosaur cupcake box</button>
                    <button>Vegan cupcake box</button>
                    <button>Kids cupcake box</button>
                    <button>Unicorn cupcake box</button>
                </div>
            )}
            {isText && (
                <p className={styles.NoAdded}>No added Tran's fats or margarine is used in any of our desserts, and all materials are non-GMO. Locally picked fruits and hand-selected chocolates are among the finest ingredients we have <br /> gathered from around the world.
                </p>
            )}

            <div className={styles.downBox}>
                <img src={leftImg} alt="" />
                <img src={rightImg} alt="" />
            </div>
        </div>
    )
}

export default PageBoxes;
