import React, { useState } from "react";
import styles from "./FaqPage.module.css";
import { GoChevronDown } from "react-icons/go";
import { questionBox } from "../../../data/Data";



const FaqPage = () => {
    const [visibleQuestion, setVisibleQuestion] = useState(null);

    const handleQuestionClick = (id) => {
        setVisibleQuestion(id === visibleQuestion ? null : id);
    };

    return (
        <div className={styles.FaqPage}>
            <span className={styles.Faq}>FAQ</span>

            <div className={styles.reviews_page_nerqevBox}>
                {questionBox.map((question) => (
                    <div key={question.id} className={`${styles.questionsBox} ${visibleQuestion === question.id ? styles.clicked : ''}`} onClick={() => handleQuestionClick(question.id)}>
                        <div className={styles.spaned}>
                            <span className={styles.quest}>{question.name}</span>
                            <GoChevronDown src={question.src} alt={question.name}
                                className={`${styles.arrowDown} ${visibleQuestion === question.id ? styles.rotated : ''}`} />
                        </div>
                        {visibleQuestion === question.id && (
                            <p className={styles.LoremTextNerqev}>
                                {question.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );




};

export default FaqPage;
