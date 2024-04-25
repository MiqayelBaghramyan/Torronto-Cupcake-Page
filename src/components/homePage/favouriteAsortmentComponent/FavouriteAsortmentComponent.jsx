import React, { useState } from "react";
import styles from "./FavoriteAsortmentCopmonent.module.css";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { addToBasket, selectBasket } from "../../../store/feauture/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const FavouriteAssortmentComponent = ({ item, ...props }) => {
  const [count, setCount] = useState(1);

  const [color, setColor] = useState("");
  const plusBtn = () => {
    setCount((prev) => prev + 1);
  };

  const minusBtn = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const onclickHearth = () => {
    setColor(color === "" ? "red" : "");
  };

  const addToBasketHandler = () => {
    dispatch(addToBasket({ ...item, quantity: count }));
  };

  const dispatch = useDispatch();
  const { items } = useSelector(selectBasket);

  const hasBasket = items.findIndex((el) => el.id === item.id);

  return (
    <div className={styles.Favourite_page_nerqev}>
      <div key={item.id} className={styles.boxFavouritePageNerqev} style={{ border: props.border ? "1px solid #B3005E" : "" }}>
        <div className={styles.verevBox}>
          <Link to="/basket/:id">
            <IoBagOutline className={styles.bag} />
          </Link>
          <CiHeart
            onClick={onclickHearth}
            style={{ color: color }}
            className={styles.hearth}
          />
        </div>
        <img
          id={styles.cakes}
          className={styles.imgCake}
          src={item.img}
          alt={item.name}
          text2={item.text2}
        />
        <span className={styles.ATasteOfHeaven}>{item.name}</span>
        <div className={styles.starBox}>
          <img className={styles.stars} src={item.star} alt="ImgStar" />
        </div>
        <p className={styles.TheSameBeautifule}>{item.text}</p>
        <span>From${item.priceBox}</span>
        <div className={styles.plusBox}>
          <button onClick={minusBtn}>-</button>
          <span>{count}</span>
          <button onClick={plusBtn}>+</button>
        </div>
        <Link to={`/${item.type}/${item.id}`}>
          <span className={styles.buttonToProduct}>{item.button}</span>
        </Link>
        <button className={styles.buyNowBtn} onClick={addToBasketHandler}>
          {hasBasket === -1 ? "Add to basket" : "Added In basket"}
        </button>
      </div>
    </div>
  );
};

export default FavouriteAssortmentComponent;
