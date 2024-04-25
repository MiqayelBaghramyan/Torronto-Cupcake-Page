import React from "react";
import TorrontoCupcake from "./torrontoCupcake/TorrontoCupcake";
import LogoTypes from "./logoTypes/LogoTypes";
import SpecialOffer from "./specialOffer/SpecialOffer";
import ReviewsPage from "./reviews/ReviewsPage";
import SubscribePage from "./subscribe/SubscribePage";
import FavouriteAssortment from "./favouriteAssortment/FavouriteAsortment";
import FaqPage from "./faqPage/FaqPage";
import OurCupcake from "./ourCupcakePage/OurCupcake";

const HomePage = () => {
  return (
    <>
      <TorrontoCupcake />

      <LogoTypes />

      <OurCupcake />

      <FavouriteAssortment />

      <SpecialOffer />

      <ReviewsPage />

      <FaqPage />

      <SubscribePage />
    </>
  );
};

export default HomePage;
