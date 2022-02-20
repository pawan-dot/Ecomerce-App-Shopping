import React, { useEffect } from 'react'
import MetaData from '../layout/MetaData'
import "./Home.css"
import Product from "./productCard"
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from 'react-alert';
import data from "../../data/data.json"
import Slider from '../Slider/Slider';
// const product = {
//     name: "T-shirt",
//     images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//     price: "Rs. 3000",
//     _id: "pawan",
// }
const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    //console.log(products)

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title="home page" />
                    <Slider start={data.banner.start} />
                    <div>
                        <h2 className="homeHeading">Featured Products</h2>
                    </div>

                    <div className="container" id="container">
                        {products &&
                            products.map((product) => (
                                <Product product={product} />
                            ))}

                        {/* <Product product={product} />
                        <Product product={product} /> */}
                        {/* <Product product={product} />
                        <Product product={product} />
                        <Product product={product} />
                        <Product product={product} />
                        <Product product={product} /> */}

                    </div>
                </>
            )}
        </>
    )
}

export default Home