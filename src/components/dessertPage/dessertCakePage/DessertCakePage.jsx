import React from "react";
import styles from "./DessertCakePage.module.css";
import { DessertData } from "../../../data/Data";
import FavouriteAssortmentComponent from "../../homePage/favouriteAsortmentComponent/FavouriteAsortmentComponent";

const DessertCakePage = () => {
    return (
        <div className={styles.DessertCakePage}>
            <div className={styles.DessertCakeData}>
                {DessertData.map((dessert) => {
                    return <FavouriteAssortmentComponent key={dessert.id} item={dessert} />
                })}
            </div>
        </div>
    )
}

export default DessertCakePage;