import React from "react";
import styles from "./CorporateAndEvents.module.css";
import corporateEventsImg1 from "../../assets/images/CorporateEventsPageImg/CorporateEventsImg1.png";
import corporateEventsImg2 from "../../assets/images/CorporateEventsPageImg/CorporateEventsImg2.png";

const CorporateAndEvents = () => {
    return (
        <div className={styles.CorporateAndEventsPage}>
            <div className={styles.corporateAndEventsBox}>
                <span>Corporates & events</span>
            </div>

            <div className={styles.corporateEventsDownBox}>
                <div className={styles.textBox1}>
                    <span className={styles.corporateEventsSpan}>Corporate  events</span>
                    <p className={styles.FromProductBrand}>From Product/Brand Launch to Customer Appreciation, Toronto Cupcake is able to provide you custom decorating to match that winning campaign.</p>
                    <p className={styles.ourGraphicsDepartment}>Our Graphics Department will work with you to reproduce Logos, Icons, Slogans , etc on an edible fondant disc or hand pressed lettering on a fondant disc. Our frostings can be made to mimic your theme colours or to use as a neutral backdrop.</p>
                    <p className={styles.ourGraphicsCrystal}>Our graphics are crystal clear and because we mount them on fondant they look great and are edible!You can send us your graphics in almost any format (jpg, png, gif, bmp, svg, etc) and we will take it from there.We will work with you on special delivery requests and packaging if needed.</p>
                    <p className={styles.weWillDeliver}>We will deliver your marketing materials along with our cupcakes.</p>
                </div>
                <img src={corporateEventsImg1} alt="" />
            </div>


            <div className={styles.corporateEventsDownBox}>
                <img src={corporateEventsImg2} alt="" />
                <div className={styles.textBox1}>
                    <p className={styles.FromProductBrand}>From Product/Brand Launch to Customer Appreciation, Toronto Cupcake is able to provide you custom decorating to match that winning campaign.</p>
                    <p className={styles.ourGraphicsDepartment}>Our Graphics Department will work with you to reproduce Logos, Icons, Slogans , etc on an edible fondant disc or hand pressed lettering on a fondant disc. Our frostings can be made to mimic your theme colours or to use as a neutral backdrop.</p>
                    <p className={styles.ourGraphicsCrystal}>Our graphics are crystal clear and because we mount them on fondant they look great and are edible!You can send us your graphics in almost any format (jpg, png, gif, bmp, svg, etc) and we will take it from there.We will work with you on special delivery requests and packaging if needed.</p>
                    <p className={styles.weWillDeliver}>We will deliver your marketing materials along with our cupcakes.</p>
                </div>
            </div>
        </div>
    )
}

export default CorporateAndEvents;