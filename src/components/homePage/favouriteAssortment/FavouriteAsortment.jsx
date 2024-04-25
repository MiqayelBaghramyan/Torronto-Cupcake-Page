import React from "react";
import styles from "./FavouriteAsortment.module.css";
import FavouriteAssortmentComponent from "../favouriteAsortmentComponent/FavouriteAsortmentComponent";
import { assortmentData } from "../../../data/Data";

const FavouriteAssortment = () => {

  return (
    <div className={styles.FavouritePage}>
      <span className={styles.FavouriteAssoriment}>Favorite assortment</span>
      <div className={styles.Favourite_page_nerqev}>
        {assortmentData.map((product) => {
          return <FavouriteAssortmentComponent key={product.id} item={product} border={true} />;
        })}
      </div>
    </div>
  );
};

export default FavouriteAssortment;
