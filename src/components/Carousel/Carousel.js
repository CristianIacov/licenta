import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
class CarouselPage extends Component {


render() {
  return (

    <Carousel fade className = "frontpagecarousel">
    <Carousel.Item interval={4000}>
      <img
        height = "400px"
        className="d-block w-100"
        src="https://www.redmillspet.co.uk/wp-content/uploads/2019/12/leader-dog-food-1024x400.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className ="fs-1">Lasa-ne pe noi sa te ajutam in gasirea animalutului perfect pentru tine</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      height = "400px"
        className="d-block w-100"
        src="https://static.wixstatic.com/media/7d9743_2a87b8c7e3ca42d8b6fbbf6a42986785~mv2_d_1365_1365_s_2.jpg/v1/fill/w_1024,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/7d9743_2a87b8c7e3ca42d8b6fbbf6a42986785~mv2_d_1365_1365_s_2.webp"
        alt="Second slide"
      />
  
      <Carousel.Caption interval={4000}>
        <h3 className ="fs-1" >Numarul total de animale salvate: 12401241</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  );
  }
}



export default CarouselPage;