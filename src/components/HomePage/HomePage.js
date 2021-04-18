import React from 'react';
import NavbarPage from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import Signin from '../Signin/Signin';
import CarouselPage from '../Carousel/Carousel'
import PetCard from '../PetCard/PetCard'
import FooterPage from '../Footer/Footer'
import './HomePage.css';


import {Container,Row,Col,Button} from 'react-bootstrap';
import Heart from "react-animated-heart";
import {Link, NavLink, RouteComponentProps } from 'react-router-dom';

 class HomePage extends React.Component{

  constructor(){
    super();
    this.state= {
      lastAnnounces: [{
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      }],
      currentPath:'home'
    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/lastannounces')
    .then(response => response.json())
    .then(announces => {
      this.setState({lastAnnounces: announces})
    })
    .catch(err => console.log(err))
  }
  onPathChange = (path) =>{
    this.setState({currentPath:path})
  }
  render()
  {
    const {lastAnnounces,currentPath} = this.state;
    return(
     
       <div classname="homepage"> 
         <Container  className = "buttonscontainer">
           <Row >
             <Col align = "right" >
             <Button className ="custombuttons"  onClick = {() => this.props.history.push("/SearchBar")} variant="Light">Cautare</Button>{' '}
             <Button className ="custombuttons" onClick = {() => this.onPathChange('register')} variant="Light">Contul Meu</Button>{' '}       
             <Button className ="custombuttons"  onClick = {() => this.onPathChange('signin')} variant="Light">Conectare</Button>{' '}
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
        {
                currentPath === 'register'?
                <div>
                  <SearchBar />
                  </div>
                  :(
                    currentPath === 'signin'?
                    <div>
                      <Signin onPathChange= {this.onPathChange} />
                    </div>
                    :                  
                  <h3></h3>
                  )
  }

        <br/>
      <h1 align="center"> Animale disponibile spre adoptie</h1>
        <Row   className ="cards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[0]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[1]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[2]} />
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[3]} />
            </Col>

          </Row>
          <Row   className ="lastrowcards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[4]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[5]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[6]} />
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[7]} />
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