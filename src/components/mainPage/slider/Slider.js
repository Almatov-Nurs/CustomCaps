import React from 'react';
import AliceCarousel from "react-alice-carousel";
import {useSelector} from "react-redux";
import {ProductsSelect} from "../../../redux/slice/ProductsSlice";
import ProductCard from "../../productCard/ProductCard";
import './css/Slider.css';

const Slider = () => {
    const products = useSelector(ProductsSelect);

    const responsive = {
        0: { items: 0 },
        568: { items: 0 },
        1024: { items: 3 },
    };
    const items = products.map(e => <ProductCard product={e} border={false}/>);
    return (
        <div style={{height: 346, padding: "0 135px"}}>
            <AliceCarousel
                autoPlay={true}
                autoPlayInterval={2000}
                infinite={true}
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
};

export default Slider;