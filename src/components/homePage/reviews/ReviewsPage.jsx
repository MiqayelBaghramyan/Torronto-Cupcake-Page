import React from "react";
import styles from "./ReviewsPage.module.css";
import { UserData } from "../../../data/Data";

const ReviewsPage = () => {
    return (
        <div className={styles.ReviewsPage}>
            <div className={styles.reviews_page_box_verev}>
                <span className={styles.Reviews}>REVIEWS</span>
                <div className={styles.boxUsers}>

                    {UserData.map((el) => (
                        <div key={el.id} className={`${styles.verevBox_Box1}`}>
                            <img className={styles.userImg} src={el.src} alt="" />
                            <span className={styles.Name}>{el.name}</span>
                            <img src={el.srcStar} alt="" />
                            <span className={styles.Date}>{el.date}</span>
                            <p className={styles.loremIpsumPteg}>{el.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles.SeeAllbutton}>See All</button>
        </div>
    )
}


export default ReviewsPage;