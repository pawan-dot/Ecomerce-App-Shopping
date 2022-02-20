import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({ start }) => {
    // console.log(start)
    return (
        <Carousel fade >


            {
                start.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}

                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>jnwjdj</h1>
                            <p>jwdbdh</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}

        </Carousel>
    )
}

export default Slider
