import React from "react";
import styles from "./Contect.module.css";

const Contect = () => {
    return (
        <div className={styles.ContectPage}>
            <div className={styles.ContectUsBox}>
                <span className={styles.ContactUs}>Contect us</span>
                <p className={styles.haveQuestion}>Have a question, suggestion or comment? We have a dedicated team ready and waiting to talk cupcakes!</p>
                <p className={styles.date}>Monday - Saturday: 7am 9.30pm Sunday: 8am - 9pm</p>
                <form action="">
                    <input className={styles.FullName} type="text" placeholder="Full name*" />
                    <input className={styles.Email} type="text" placeholder="Email*" />
                    <input className={styles.inputText} type="text" placeholder="your message*" />
                    <button className={styles.Submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contect;