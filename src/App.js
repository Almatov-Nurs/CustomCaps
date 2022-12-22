import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import ProductPage from "./pages/productPage/ProductPage";
import BasketPage from "./pages/basketPage/BasketPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import Catalog2 from "./components/mainPage/catalog2/Catalog2";
import PathGid from "./components/pathGid/PathGid";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <div className="app">
        <Header/>
        <PathGid/>
        <Routes>
            <Route path="" element={<MainPage/>}/>
            <Route path="catalog/" element={<CatalogPage/>}/>
            <Route path="search/:search" element={<SearchPage/>}/>
            <Route path="cap/:name/" element={<ProductPage/>}/>
            <Route path="basket/" element={<BasketPage/>}/>
            <Route path="catalog2/" element={<Catalog2/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
