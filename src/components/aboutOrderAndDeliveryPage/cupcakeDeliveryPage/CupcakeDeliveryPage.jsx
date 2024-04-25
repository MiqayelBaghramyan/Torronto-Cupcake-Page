import React from "react";
import styles from "./CupcakeDelivery.module.css";
import shipperImg from "../../../assets/images/CupcakeDeliveryPageImages/shipperImg.png";
import cakeImg from "../../../assets/images/CupcakeDeliveryPageImages/Rectangle 117.png";

const CupcakeDelivery = () => {
    return (
        <div className={styles.CupcakeDeliveryPage}>
            <div className={styles.CupcakeDeliveryUpBox}>
                <img src={shipperImg} alt="" />
                <div className={styles.rightTextBox}>
                    <div className={styles.CupcakeDeliverySpanBox}>
                        <span>Cupcake Delivery</span>
                        <p className={styles.CupcakeDeliveryP}>Cupcake delivery Toronto and GTA. Our cupcake delivery service is available 7 days a week and covers approximately 80km surrounding Toronto. Sending cupcakes has never been easier.</p>
                        <p className={styles.mostDeliveriesP}>Most deliveries can be made on the same day you order.If you need a delivery to a location that is outside of downtown Toronto we require notice at least the night before.Morning deliveries are typically for M** postal codes.</p>
                        <p className={styles.orderThreeP}>Order three dozen or more and your delivery to downtown Toronto is free or greatly reduced to other locations.</p>
                    </div>
                </div>
            </div>

            <div className={styles.CupcakeDeliveryDownBox}>
                <div className={styles.rightTextBox2}>
                    <div className={styles.CupcakeDeliverySpanBox}>
                        <p className={styles.weDeliver}><span className={styles.weDeliverToSpan}>We deliver to:</span> Oakville; Auroa; Markham; Scarborough; Vaughn,; Ajax; and Pickering to name a few.Delivery fee is based on the delivery <br /> location postal code and in special cases, time of day.</p>
                        <p className={styles.clickSpan}>Click here to start ordering for delivery.</p>
                        <p className={styles.ToContactBox}>To contact us by phone please call:</p>
                        <p className={styles.pForDelivery}>North America:
                            <span className={styles.numberTelSpan}>     +1-877-334-9468 </span>
                        </p>
                        <p className={styles.pForDelivery}>Outside of North Am: <span className={styles.numberTelSpan}>     +001-647-478-9464</span>
                        </p>
                        <p className={styles.pForDelivery}> Email us at:
                            <span className={styles.numberTelSpan}>      inquiry@torontocupcake.com</span>
                        </p>
                        <span className={styles.WithAn}> with any type of question regarding delivery.</span>
                    </div>
                </div>
                <img src={cakeImg} alt="" />
            </div>
        </div>
    )
}

export default CupcakeDelivery; 