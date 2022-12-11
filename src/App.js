import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import ProductPage from "./pages/productPage/ProductPage";
import BasketPage from "./pages/basketPage/BasketPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";

function App() {
  return (
    <div className="app">
      <Header/>
        <Routes>
            <Route path="" element={<MainPage/>}/>
            <Route path="catalog/" element={<CatalogPage/>}/>
            <Route path="cap/:name/" element={<ProductPage/>}/>
            <Route path="basket/" element={<BasketPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
