import React from "react";
import AboutTorrontoCupcake from "./aboutTorrontoCupcake/AboutTorrontoCupcake";
import AboutTorrontoPage from "./aboutTorrontoPage/AboutTorrontoPage";
import AboutOrderAndDelivery from "./aboutOrderAndDelivery/AboutOrderAndDelivery";
import OrderDeliveryPage from "./orderDelveriPage/OrderDeliverPage";

const AboutUsPage = () => {
    return (
        <>
            <AboutTorrontoCupcake />
            <AboutTorrontoPage />
            <AboutOrderAndDelivery />
            <OrderDeliveryPage />
        </>
    )
}

export default AboutUsPage;
