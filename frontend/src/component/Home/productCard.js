import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
//import ReactStars from "react-rating-stars-component";


const ProductCard = ({ product }) => {
    // const options = {
    //     value: product.ratings,
    //     edit: false,
    //     color: "rbga(20,20,20,0.1)",
    //     activeColor: "tomato",
    //     //value: 2.5,
    //     size: window.innerWidth < 600 ? 20 : 25,
    //     isHalf: true,
    //     readOnly: true,
    //     precision: 0.5,
    //     // count = { 5}
    //     // onChange = { ratingChanged }
    //     // size = { 24}
    //     // activeColor = "#ffd700"
    // };
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <>
            <a className="productCard" href={`/product/${product._id}`}>
                <img src={product.images[0].url} alt={product.name} />
                <p>{product.name}</p>
                <div>
                    <Rating {...options} />{" "}
                    <span className="productCardSpan">
                        {" "}
                        ({product.numOfReviews} Reviews)
                    </span>
                    {/* <ReactStars {...options} /><span>({product.numOfReviews} reviews) </span> */}
                </div>

                <span>{`₹ ${product.price}`}</span>
            </a>
        </>
    );
};

export default ProductCard;