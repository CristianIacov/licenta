import React from 'react';
import NavbarPage from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import CarouselPage from '../Carousel/Carousel'
import PetCard from '../PetCard/PetCard'
import FooterPage from '../Footer/Footer'
import './HomePage.css';
import azorel from '../../img/azorel.jpg'
import caine3 from '../../img/caine3.jpg'
import lucky from '../../img/lucky.jpg'
import pisica1 from '../../img/pisica1.jpg'
import saintbernard from '../../img/saintbernard.jpg'
import blacky from '../../img/blacky.jpg'

import {Container,Row,Col,Button} from 'react-bootstrap';
import Heart from "react-animated-heart";
 class HomePage extends React.Component{

  constructor(){
    super();
  }
  render()
  {
    return(
     
       <div classname="homepage"> 
         <Container  className = "buttonscontainer">
           <Row >
             <Col align = "right" >
             <Button className ="custombuttons" variant="Light">Cautare</Button>{' '}
             <Button className ="custombuttons" variant="Light">Contul Meu</Button>{' '}
             <Button className ="custombuttons" variant="Light">Conectare</Button>{' '}
             </Col>
           </Row>
         </Container>
         <Container fluid={true} className= "p-0 background-image">
           <Row noGutters className = "row">
             <Col className="homepagenav" >
              <NavbarPage />
              </Col>
             </Row>
          <Row  noGutters className = "row">
            <Col >
              <CarouselPage />
             </Col>
          </Row>

     
        </Container>
        <br/>

      <h1 align="center"> Animale disponibile spre adoptie</h1>
        <Row   className ="cards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard name="Lucky" src={lucky}/>
            </Col>
            <Col sm="2">
            <PetCard name="Azorel" src={azorel}/>
            </Col>
            <Col sm="2">
            <PetCard name="Miti" src= {pisica1} />
            </Col>
            <Col sm="2">
            <PetCard name="Miti" src= {pisica1} />
            </Col>

          </Row>
          <Row   className ="lastrowcards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard name="Lucky" src={lucky}/>
            </Col>
            <Col sm="2">
            <PetCard name="Azorel" src={azorel}/>
            </Col>
            <Col sm="2">
            <PetCard name="Miti" src= {pisica1} />
            </Col>
            <Col sm="2">
            <PetCard name="Miti" src= {pisica1} />
            </Col>

          </Row>
          
        <Row>
          <Col>
          <FooterPage />
          </Col>
        </Row>
       </div>
     
    );
  };
 }
export default HomePage;