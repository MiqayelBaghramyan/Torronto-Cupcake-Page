import React from "react";
import FavouriteAssortmentComponent from "../homePage/favouriteAsortmentComponent/FavouriteAsortmentComponent";
import { cupcakesData } from "../../data/Data";
import styles from "./AddToCartData.module.css";


const AddToCardData = () => {
    return (
        <div className={styles.AddToCardData}>
            {cupcakesData.map((cake) => {
                return <FavouriteAssortmentComponent key={cake.id} item={cake} />
            })}
        </div>
    )
}


export default AddToCardData;