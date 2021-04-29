import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import './PetCarousel.css';
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
class PetCarousel extends Component {

    constructor(props)
    {
        super(props);
    }

render() {
    const {img1_url,img2_url,img3_url} = this.props;
      
  return (
    <Container fluid className= "p-0 background-image">
        <Row  className= "">
    <div className = "carouselarrange">
    <div className = "carouselarrange2">
    <Carousel className="petcarousel" fade>
    <Carousel.Item className="carouselimage" interval={4000}>
      <img
        height = "500"
        src={img1_url}
        alt="First slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        height = "500"
        src={img2_url}
        alt="Second slide"
      />
  
      <Carousel.Caption interval={4000}>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        height = "500"
        src={img3_url}
        alt="Third slide"
      />
  
      <Carousel.Caption interval={4000}>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>



  </Row>
  </Container>
  );
  }
}



export default PetCarousel;