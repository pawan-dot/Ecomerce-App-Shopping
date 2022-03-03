//import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";
//import ReactStars from "react-rating-stars-component";
import { Rating } from "@material-ui/lab";
const ReviewCard = ({ review }) => {
    // const options = {
    //     value: review.rating,
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
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            {/* <ReactStars {...options} /> */}
            <Rating {...options} />
            <span className="reviewCardComment">{review.comment}</span>
        </div>
    );
};

export default ReviewCard;
