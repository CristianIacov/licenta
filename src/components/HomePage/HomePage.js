import React from 'react';
import NavbarPage from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import CarouselPage from '../Carousel/Carousel'
import PetCard from '../PetCard/PetCard'
import './HomePage.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Heart from "react-animated-heart";
 class HomePage extends React.Component{

  constructor(){
    super();
  }
  render()
  {
    return(
     
       <div> 
         <Container  className = "buttonscontainer">
           <Row>
             <Col align = "right" >
             <Button className ="custombuttons" variant="Light">Cautare</Button>{' '}
             <Button className ="custombuttons" variant="Light">Contul Meu</Button>{' '}
             <Button className ="custombuttons" variant="Light">Conectare</Button>{' '}
             </Col>
           </Row>
         </Container>
         <Container fluid className= "mycontainer">
           <Row  className = "row">
             <Col className="homepagenav" >
              <NavbarPage />
              </Col>
             </Row>
          <Row  className = "row">
            <Col >
              <CarouselPage />
             </Col>
          </Row>
          <Row>
            <Col>
            <SearchBar />
            </Col>
          </Row>
     
        </Container>
        <br/>
        <br/>
        <br/>
      <h1 align="center"> Animale disponibile spre adoptie</h1>
        <Row  md="5" className ="cards">
            <Col>
            <PetCard name="Lucky" src="https://m1run1k.files.wordpress.com/2012/07/bubu.jpg"/>
            </Col>
            <Col>
            <PetCard name="Azorel" src="https://stor200989531.anuntul.ro/media/foto/imgs/2018/6/27/200989531.jpg"/>
            </Col>
            <Col>
            <PetCard name="Miti" src="https://lh3.googleusercontent.com/proxy/NmIGg384qZCQxN73Lqjb7fQrlmRgYiT3EcE1i0uhWobz9TuRkCbMdAKfqHMVCjRuLNeEFWMAPnIBi_tO4Ekjyipi2i9vMGDM6TJ4s_9SXppwFHaTYiP9Xzi5nQhuawG3HfwLk5WH-QP241X28rUpECVFAFGOgdFO3K8dN4O9"/>
            </Col>
          </Row>
       </div>
     
    );
  };
 }
export default HomePage;