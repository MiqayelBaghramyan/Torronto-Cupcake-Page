import React, { useState } from "react";
import styles from "./AddToCard.module.css";
import { IoClose } from "react-icons/io5";
import AddToCardData from "../AddToCartData";


const AddToCard = () => {

    const [isOpen, setIsOpen] = useState("");

    const OnPopup = () => {
        setIsOpen(!isOpen);
    }

    const togglePopup = () => {
        setIsOpen("");
    }
    return (
        <div className={styles.AddToCardPage}>
            <button onClick={OnPopup} className={styles.AddToCardButton}>Add to cart</button>
            {isOpen && (
                <div className={styles.popup}>
                    <IoClose className={styles.IoClose} onClick={togglePopup} />
                    <span className={styles.addYourCardSpan}>Add your card</span>
                    <form action="">
                        <input className={styles.name} type="text" placeholder="Name* " />
                        <input className={styles.name} type="text" placeholder="surname* " />
                        <input className={styles.name} type="text" placeholder="adress* " />
                        <input className={styles.name} type="text" placeholder="Visa/Arca" />
                        <button className={styles.done}>done</button>
                    </form>
                </div>
            )}
            <p className={styles.OrHaveP}>Or have fun and select from the individual flavours below:</p>
            <div className={styles.CakeDataStyle}>
                <AddToCardData />
            </div>
            <div className={styles.pageChangingBox}>
                <span> 1  2 3 ...... 12</span>
            </div>

        </div>
    )
}

export default AddToCard;