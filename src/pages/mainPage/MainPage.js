import React from 'react';
import Catalog2 from "../../components/mainPage/catalog2/Catalog2";
import Catalog1 from "../../components/mainPage/catalog1/Catalog1";
import Slider from "../../components/mainPage/slider/Slider";
import Catalog2Page from "../catalog2Page/Catalog2Page";

const MainPage = () => {
    return (
        <div>
            <Catalog1/>
            <Catalog2Page style={{display: "flex", padding: "0 135px", marginBottom: 60}}/>
            <Slider/>
            <Catalog2/>
        </div>
    );
};

export default MainPage;