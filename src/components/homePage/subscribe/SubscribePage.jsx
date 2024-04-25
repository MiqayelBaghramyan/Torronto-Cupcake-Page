import React from "react";
import styles from "./SubscribePage.module.css";

const SubscribePage = () => {
    return (
        <div className={styles.SubscribePage}>
            <div className={styles.all}>
                <span className={styles.howToSub}>how to subscribe?</span>
                <p className={styles.loremTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation</p>
                <form className={styles.form} action="">
                    <input type="email" className={styles.emailBtn} placeholder="Enter your email" />
                    <button className={styles.subscribeBtn}>subscribe now</button>
                </form>
            </div>
        </div>
    )
}

export default SubscribePage;