import React from "react";
import styles from "./OrderDeliveryPage.module.css";
import img1 from "../../../assets/images/AboutPageImages/orderDeliveryPageImg/Rectangle 107.png";
import img2 from "../../../assets/images/AboutPageImages/orderDeliveryPageImg/Rectangle 108.png";
import { Link } from "react-router-dom";


const OrderDeliveryPage = () => {
    return (
        <div className={styles.orderDeliveryPage}>
            <div className={styles.upBox}>
                <img className={styles.upBoxImg} src={img1} alt="" />
                <div className={styles.textBox}>
                    <Link to="/CupcakeDelivery">
                        <span className={styles.order}>Order</span>
                    </Link>
                    <p className={styles.ourCapcakes}>Our cupcakes are baked daily using the finest ingredients.Canada's and the GTA's favourite stop for that special treat. Order cupcakes online 24/7 for your special event. Delivery avaialable most days between 8 and 6pm TO time</p>
                    <p className={styles.araBakedP}>Our cupcakes are baked daily using the finest ingredients.Canada's and the GTA's favourite stop for that special treat. Order cupcakes online 24/7 for your special event.</p>
                </div>
            </div>

            <div className={styles.DownBox}>
                <img className={styles.DownBoxImg} src={img2} alt="" />
                <div className={styles.textBox2}>
                    <Link to="/CupcakeDelivery">
                        <span className={styles.DeliverySpan}>Delivery</span>
                    </Link>
                    <p className={styles.weAre}>We are driven by loving what we do and what we make everyday. We get to use the finest ingredients to make what we believe are the tastiest treats around. And.. we love the idea that our treats are making people happy every time they bite into one. How much fun is that!</p>
                    <p className={styles.araBakedP2}>We are driven by loving what we do and what we make everyday.  And.. we love the idea that our treats are making people happy every time they bite into one. How much fun is that!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default OrderDeliveryPage;