import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { cupcakesData, BoxesData, DessertData } from "../../data/Data";
import { SlArrowRight, SlBasketLoaded } from "react-icons/sl";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasket } from "../../store/feauture/basket/basketSlice";


const Product = ({ item, ...props }) => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [showSize, setShowSize] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Small size");
  const dispatch = useDispatch();

  const { items } = useSelector(selectBasket);

  const plusBtn = () => {
    setCount(prev => prev + 1);
  }

  const minusBtn = () => {
    setCount(prev => prev - 1);
  }

  const getProductData = () => {
    const productId = parseInt(id);
    if (productId) {
      if (productId >= 1 && productId <= 12) {
        return cupcakesData.find((item) => item.id === productId);
      } else if (productId >= 13 && productId <= 24) {
        return BoxesData.find((item) => item.id === productId);
      } else if (productId >= 25 && productId <= 36) {
        return DessertData.find((item) => item.id === productId);
      }
    }
    return null;
  };

  const product = getProductData();

  const hasBasket = items.findIndex((item) => item.id === product.id);

  const addToBasketHandler = () => {
    dispatch(addToBasket({ ...product, quantity: count, size: selectedSize }));
  };



  if (count < 1) {
    setCount(1);
  }

  const openSizeOptions = () => {
    setShowSize(!showSize);
    setIsRotated(!isRotated);
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.ProductPage}>
      <div className={styles.hintBox}>
        <Link to="/">
          <span>home</span>
        </Link>
        <SlArrowRight className={styles.arrow} />
        <Link to="/cupcakePage">
          <span>cupcakes</span>
        </Link>
        <SlArrowRight className={styles.arrow} />
        <span>buy now</span>
      </div>
      <div className={styles.productCenter}>
        <div className={styles.left}>
          {product && (
            <div>
              <img className={styles.cakeImg} src={product.img} alt="CakeImg" />
            </div>
          )}
          {!product && <div>Product not found</div>}
        </div>
        <div className={styles.right}>
          {product && (
            <div className={styles.right}>
              <span className={styles.CakeName}>{product.name}</span>
              <p className={styles.theSameBeautifule}>
                The same beautiful designs and delicious tasting cupcakes, suitable for dietary requirements
              </p>
              <div className={styles.priceAndStarBox}>
                <Link to={`/${product.type}/${product.id}`}>From${product.priceBox}</Link>
                <img src={product.star} alt="starImg" />
              </div>
              <div onClick={openSizeOptions} className={styles.selectSizeBox}>
                <span>Select a size</span>
                <GoChevronDown className={`${styles.arrowDown} ${isRotated && styles.rotate}`} />
              </div>
              {showSize && (
                <div className={styles.smallMiddleLarge}>
                  <button
                    className={selectedSize === "Small size" ? styles.selectedSize : null}
                    onClick={() => handleSizeClick("Small size")}
                  >
                    small
                  </button>
                  <button
                    className={selectedSize === "Middle size" ? styles.selectedSize : null}
                    onClick={() => handleSizeClick("Middle size")}
                  >
                    middle
                  </button>
                  <button
                    className={selectedSize === "Large size" ? styles.selectedSize : null}
                    onClick={() => handleSizeClick("Large size")}
                  >
                    Large
                  </button>
                </div>
              )}
              <p className={styles.pleaseNote}>
                Please note: All of our products may contain traces of cereals containing gluten, milk, eggs, nuts, soya,
                sesame, peanuts and sulphites
              </p>
              <div className={styles.BassketBox}>
                <Link to="/basket/:id">
                  <SlBasketLoaded className={styles.basketIcon} />
                  <span>View in basket</span>
                </Link>
                <div className={styles.basketLeft}>
                  <button onClick={minusBtn} className={styles.btnMinus}>-</button>
                  <span>{count}</span>
                  <button onClick={plusBtn} className={styles.btnPlus}>+</button>
                </div>
              </div>
              <button className={styles.BuyNow} onClick={addToBasketHandler}>
                {hasBasket === -1 ? "Add to basket" : "Added in basket"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.needHandBoxDown}>
        <p className={styles.needHandP}><span className={styles.needHand}>Need a hand?</span> Customer support telephone: <span className={styles.telSpan}>0330 058 9525</span></p>
        <div className={styles.backToHomeBox}>
          <GoChevronLeft className={styles.arrowLeft} />
          <span>Back to home</span>
        </div>
      </div>
    </div >
  );
};

export default Product;
