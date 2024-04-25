import React from "react";
import WhatWeCanOffer from "../corporateAndEventsPage/whatWeCanPage/WhatWeCanOfferPage";
import CorporateAndEvents from "../corporateAndEventsPage/CorporateAndEvents";
import PhotoCakesAndCupcakes from "../corporateAndEventsPage/photoCakesAndCupcakes/PhotoCakesAndCupcakes";

const WhatWeCanOfferAll = () => {
    return (
        <>
            <CorporateAndEvents />
            <WhatWeCanOffer />
            <PhotoCakesAndCupcakes />
        </>
    )
}

export default WhatWeCanOfferAll;