import './App.css';
import HomePage from './components/homePage/HomePage';
import AboutUsPage from './components/aboutPage/AboutUsPage';
import Layout from "./components/layout/Layout";
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/pageNotFound/PageNotFound';
import CupcakePage from './components/cupcakesPage/Cupcake';
import DessertPage from './components/dessertPage/Dessert';
import BoxesAll from './components/boxesPage/BoxesAll';
import CupcakeDelivery from './components/aboutOrderAndDeliveryPage/cupcakeDeliveryPage/CupcakeDeliveryPage';
import Contect from './components/contectPage/Contect';
import ProductPage from './components/productPage/ProductPage';
import WhatWeCanOfferAll from './components/contectPage/WhatWeCanOfferAll';
import Basket from './components/basketPage/Basket';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="cupcakePage" element={<CupcakePage />} />
          <Route path="dessertPage" element={<DessertPage />} />
          <Route path='boxesPage' element={<BoxesAll />} />
          <Route path='cupcakeDelivery' element={<CupcakeDelivery />} />
          <Route path='contact' element={<Contect />} />
          <Route path=":type/:id" element={<ProductPage />} />
          <Route path='corporateAndEvents' element={<WhatWeCanOfferAll />} />
          <Route path='basket/:id' element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
