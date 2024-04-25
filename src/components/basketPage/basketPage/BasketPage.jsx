import React, { useState } from "react";
import styles from "./Basket.module.css";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasket,
  updateCount,
} from "../../../store/feauture/basket/basketSlice";

const BasketPage = () => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleMinusQuantity = (itemId) => {
    dispatch(updateCount([itemId, "minus"]));
  };

  const handlePlusQuantity = (itemId, currentQuantity) => {
    dispatch(updateCount([itemId, "plus"]));
  };

  const deleteBtn = (elId) => {
    dispatch(removeFromBasket(elId));
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedProducts(basket.items.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const totalPrice =
    basket.items.length > 0
      ? basket.items.reduce(
        (total, product) =>
          total + parseInt(product.priceBox) * product.quantity,
        0
      )
      : 0;

  return (
    <div className={styles.BasketPage}>
      <div className={styles.homeBasketBox}>
        <Link to="/">
          <span>home</span>
        </Link>
        <GoChevronRight className={styles.arrowRight} />
        <Link to="">
          <span>basket</span>
        </Link>
      </div>
      <div className={styles.ItemsBoxAll}>
        <span className={styles.yourItemsSpan}>YOUR ITEMS</span>


        <div
          className={styles.selectAllBox}
          onClick={toggleSelectAll}
          style={{ cursor: "pointer" }}
        >
          <input
            className={`${styles.circle} ${selectedProducts.length === basket.items.length && styles.selectedProduct
              }`}
            type="checkbox"
            onChange={() => { }}
            checked={selectAll}
          />
          <span>select all</span>
        </div>


        {basket.items.map((product) => {
          const isSelected = selectedProducts.includes(product.id);
          return (
            <div
              className={`${styles.productsBox} ${isSelected && styles.selectedProduct
                }`}
              key={product.id}

            >
              <div className={styles.left}>
                {product && (
                  <div>
                    <img onClick={() => toggleProductSelection(product.id)}
                      className={styles.cakeImg}
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                )}
                {!product && <div>Product not found</div>}
              </div>
              {product && (
                <div className={styles.center}>
                  <span className={styles.CakeName}>{product.name}</span>
                  <p className={styles.size}>{product.size}</p>
                  <p className={styles.pleaseNote}>
                    Please note: All of our products may contain traces of
                    cereals containing gluten, milk, eggs, nuts, soya, sesame,
                    peanuts and sulphites
                  </p>
                  <div className={styles.priceAndStarBox}>
                    <span className={styles.CakePrice}>
                      ${product.priceBox}
                    </span>
                  </div>
                </div>
              )}
              <div className={styles.right}>
                <div className={styles.plusMinusBox}>
                  <button
                    className={styles.circleMinus}
                    onClick={() => handleMinusQuantity(product.id)}
                    disabled={product.quantity <= 1}
                  >
                    <span>-</span>
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className={styles.circlePlus}
                    onClick={() => handlePlusQuantity(product.id)}
                  >
                    <span>+</span>
                  </button>
                </div>

                <span
                  onClick={() => deleteBtn(product.id)}
                  className={styles.deleteSpan}
                >
                  Delete
                </span>
              </div>
            </div>
          );
        })}

        <div className={styles.dataBox}>
          <div className={styles.leftBoxData}>
            <form action="">
              <span>*you can change your data</span>
              <input type="text" placeholder="Address*" />
              <input type="text" placeholder="+374 *** *** ***" />
              <input type="text" placeholder="visa" />
              <div className={styles.paynowBox}>
                <input className={styles.chekbox} type="checkbox" />
                <span>pay now</span>
              </div>
            </form>
          </div>

          <div className={styles.rightBoxData}>
            <span>IN TOTAL ${totalPrice}</span>
            <button>BUY NOW</button>
            <span className={styles.deliverySpan}>
              *Delivery will be on December 29th
            </span>
          </div>
        </div>
      </div>

      <span className={styles.needaHand}>
        Need a hand? Customer support telephone: 0330 058 9525
      </span>

      <Link to="/">
        <p>Back to home</p>
      </Link>
    </div>
  );
};

export default BasketPage;
