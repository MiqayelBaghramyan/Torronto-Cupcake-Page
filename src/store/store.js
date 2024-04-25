import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./feauture/basket/basketSlice";


const store = configureStore({
    reducer: {
        basket: basketSlice,
    },
});


export default store;