import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/headerImg/HeaderLogo.png';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlBasketLoaded } from "react-icons/sl";
import { selectBasket } from '../../store/feauture/basket/basketSlice';
import { useSelector } from 'react-redux';
import { TfiMenu } from "react-icons/tfi";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [rotation, setRotation] = useState(0);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setRotation(rotation === 0 ? 90 : 0);
    };

    const basket = useSelector(selectBasket);
    const baksetQuantity = basket.items.length > 0 ? basket.items.reduce((total, product) => total + product.quantity, 0) : 0;

    return (
        <header className={styles.header}>
            <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}>
                <ul className={styles.firstUl}>
                    <li className={styles.firstLi}><Link to="/">Home</Link></li>
                    <li className={styles.firstLi}><Link to="/">Community</Link></li>
                    <li className={styles.firstLi}>
                        <select onChange={(e) => window.location.href = e.target.value}>
                            <option value="/">Select Cake Type</option>
                            <option value="/cupcakePage">Cupcake</option>
                            <option value="/dessertPage">Desserts</option>
                            <option value="/boxesPage">Boxes</option>
                            <option value="*">Wedding Cupcakes</option>
                            <option value="*">Boxes</option>
                        </select>
                    </li>
                </ul>
            </nav>
            <TfiMenu className={styles.mobileIcon} style={{ transform: `rotate(${rotation}deg)` }} onClick={toggleMobileMenu} />
            <Link to="/">
                <img className={styles.LogoHeader} src={logo} alt="Logo" />
            </Link>
            <nav className={`${styles.navMenu2} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}>
                <ul className={styles.secondUl}>
                    <li className={styles.firstLiHome}><Link to="/">Home</Link></li>
                    <li className={styles.firstLiCommunity}><Link to="/">Community</Link></li>
                    <li className={styles.secondLi}><Link to="*">Resources</Link></li>
                    <li className={styles.secondLi}><Link to="/about">About</Link></li>
                    <li className={styles.secondLi}><Link to="/contact">Contact
                    </Link></li>
                    <select className={styles.select2} onChange={(e) => window.location.href = e.target.value}>
                        <option value="/">Select Cake Type</option>
                        <option value="/cupcakePage">Cupcake</option>
                        <option value="/dessertPage">Desserts</option>
                        <option value="/boxesPage">Boxes</option>
                        <option value="*">Wedding Cupcakes</option>
                        <option value="*">Boxes</option>
                    </select>
                    <Link className={styles.baksetPage} to="basket/:id">
                        BASKET PAGE
                        <SlBasketLoaded className={styles.basketIcon} />
                    </Link>
                </ul>
            </nav>
            <div className={styles.icon_box}>
                <Link to="">
                    <IoSearch className={styles.searchIcon} />
                </Link>
                <Link to="">
                    <FaRegUser className={styles.userIcon} />
                </Link>
                <Link to="basket/:id">
                    <span>{baksetQuantity > 0 && <span className={styles.basketQuantityText}>{baksetQuantity}</span>}</span>
                    <SlBasketLoaded className={styles.basketIcon} />
                </Link>
            </div>
        </header >
    )
}

export default Header;
