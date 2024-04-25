import React from "react";
import styles from "./Footer.module.css";
import footLogo from "../../assets/images/footerImg/footerLogo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Footer = () => {

    const location = useLocation();

    const isDessertPage = location.pathname === "/dessertPage";
    const isCupcakePage = location.pathname === "/cupcakePage";
    const isBusketPage = location.pathname === "/basket/:id";

    return (
        <footer className={isDessertPage || isCupcakePage || isBusketPage  ? styles.relativeFooter : null}>
            <div className={styles.foot_all}>
                <img className={styles.footLogo} src={footLogo} alt="FootLogo" />
                <div className={styles.footBox}>
                    <div className={styles.footBox1_dzax}>
                        <Link to="">
                            <span>Wedding Cupcakes</span>
                        </Link>
                        <Link to="/boxesPage">
                            <span>Cupcake Boxes</span>
                        </Link>
                        <Link to="/dessertPage">
                            <span>Desserts</span>
                        </Link>
                        <Link to="/corporateAndEvents">
                            <span>Corporate Events</span>
                        </Link>
                    </div>

                    <div className={styles.footBox1_dzax}>
                        <Link to="/about">
                            <span>ABOUT</span>
                        </Link>
                        <Link to="/contact">
                            <span>contact</span>
                        </Link>
                        <Link to="">
                            <span>occasions</span>
                        </Link>
                        <Link to="">
                            <span>community</span>
                        </Link>
                    </div>

                    <div className={styles.footBox1_dzax}>
                        <Link to="">
                            <span>Resources</span>
                        </Link>
                        <Link to="/cupcakeDelivery">
                            <span>Cupcake Delivery</span>
                        </Link>
                        <Link to="">
                            <span>view cart</span>
                        </Link>
                        <Link to="/">
                            <span>HOME</span>
                        </Link>
                    </div>

                    <div className={styles.footBox1_dzax}>
                        <Link to="">
                            <span>Always Available</span>
                        </Link>
                        <Link to="">
                            <span>Holidays</span>
                        </Link>
                        <Link to="">
                            <span>Special Events</span>
                        </Link>
                        <Link to="">
                            <span>Custom</span>
                        </Link>
                    </div>
                </div>
            </div>
            <span className={styles.Design}>Design 2023</span>
        </footer>
    )
}


export default Footer;