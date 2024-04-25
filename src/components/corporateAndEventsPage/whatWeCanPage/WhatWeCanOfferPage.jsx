import React from "react";
import styles from "./WhatWeCanOffer.module.css";

const WhatWeCanOffer = () => {
    return (
        <div className={styles.WhatWeCanOfferPage}>
            <div className={styles.textBox}>
                <span className={styles.whatCanOfferSpan}>What can we offer you?</span>
                <p className={styles.deliveryToMultiple}>
                    <span className={styles.circle}>&#9899;</span> Delivery to multiple locations (We currently deliver to London, Birmingham, Slough, Reading, Hemel Hempstead, Luton, Oxford, Guildford, Chelmsford, Stevenage, Milton Keynes, Northampton, Cambridge, Brighton and Coventry).</p>
                <p className={styles.ukWide}>
                    <span className={styles.circle}>&#9899;</span> UK wide delivery (excluding Cupcakes, Cakes and large Cheesecakes).</p>
                    <span className={styles.tailoredToYou}>Tailored to you!</span>
                    <p className={styles.ukWide}>
                    <span className={styles.circle}>&#9899;</span> Bespoke icing colours available to match your theme or event.</p>
                    <p className={styles.bespokeCupcakeSpan}>
                    <span className={styles.circle}>&#9899;</span>Bespoke cupcake designs are available but require a three week lead, and a minimum run of 1000 boxes. Templating/setup charges are applicable.</p>
                    <p className={styles.ukWide}>
                    <span className={styles.circle}>&#9899;</span>Bespoke cupcake Toppers with Logo’s or Images on every cake.</p>
                    <p className={styles.ukWide}>
                    <span className={styles.circle}>&#9899;</span>Personalized gift cards with every order</p>
                    <p className={styles.ukWide}>
                    <span className={styles.circle}>&#9899;</span>Bespoke Cupcake/Cake Boxes (minimum orders and lead times apply).</p>
            </div>
        </div >
    )
}

export default WhatWeCanOffer;