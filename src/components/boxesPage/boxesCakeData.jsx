import React from "react";
import FavouriteAssortmentComponent from "../homePage/favouriteAsortmentComponent/FavouriteAsortmentComponent";
import { BoxesData } from "../../data/Data";
import styles from "./BoxesCakeData.module.css";



const BoxesCakeData = () => {
    return (
        <div className={styles.BoxesCakeData}>
            {
                BoxesData.map((boxesCake) => {
                    return <FavouriteAssortmentComponent key={boxesCake.id} item={boxesCake} />
                })
            }
        </div>
    )
}

export default BoxesCakeData;