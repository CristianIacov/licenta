import React, { useState } from 'react';
import NavbarPage from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import Signin from '../Signin/Signin';
import CarouselPage from '../Carousel/Carousel'
import PetCard from '../PetCard/PetCard'
import FooterPage from '../Footer/Footer'
import AdvertsSearchBar from '../AdvertsSearchBar/AdvertsSearchBar'
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {Link, NavLink, RouteComponentProps } from 'react-router-dom';
import AnimalAdoption from '../AnimalAdoptionCard/AnimalAdoptionCard';
 class HomePage extends React.Component{

  constructor(){
    super();
    this.state= {
      nbOfAnimalsSave:'',
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
      currentPath:'home',
      isSignedIn: 'false',
      user:[]
    }
  }


   setSignedIn = (data) => {
    this.setState({isSignedIn: data});
  };
  getSignedIn = () => {
    return this.state.isSignedIn;
  }

   setUser = (data) => {
     console.log(data);
    this.setState({user:data});
  };

  componentDidMount(){
      fetch('http://localhost:3001/savedanimals')
      .then(response => response.json())
      .then(data => this.setState({nbOfAnimalsSave: data}))
      .catch(err => {console.log('Could not get the latest pets')})

      fetch('http://localhost:3001/lastannounces')
      .then(response => response.json())
      .then(announces => {
        this.setState({lastAnnounces: announces})
      })
      .catch(err => console.log('Could not get the latest pets'))
  }
  render()
  { 
    const {lastAnnounces,currentPath} = this.state;
    const url_cat = 'https://images3.alphacoders.com/738/thumb-1920-738230.jpg';
    const url_dog = 'https://wallpapercave.com/wp/kdWBfdm.jpg'
    const catRoute = '/AdoptCat';
    const dogRoute = '/AdoptDog';
    const catType = 'Articole despre pisici';
    const dogType = 'Articole despre caini';
    return(
     
       <div classname="homepage"> 

         <Container fluid={true} className= "p-0 background-image">
           <Row noGutters className = "row">
             <Col className="homepagenav" >
                <NavbarPage getSignedIn={this.getSignedIn}/>
              </Col>              
             </Row>
          <Row  noGutters className = "row">
            <Col>
                <CarouselPage nbOfAnimalsSave = {this.state.nbOfAnimalsSave}/>
            </Col>
          </Row>
          <Row>
          <Col>
             <AdvertsSearchBar />
            </Col>
            <FontAwesomeIcon icon="faDog" /> 
                <FontAwesomeIcon icon="coffee" />
            </Row>
        </Container>


        <br/>
      <h1 className = "animaledisponibile"> Cele mai recente anunturi </h1>
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
          <Row className ="mt-5">
            <h1 className = "animaledisponibile"> Planuiesti sa adopti un animalut? </h1>
            <Col sm = {{span:"4", offset:"2"}} md = {{span:"4", offset:"2"}}>
              <AnimalAdoption petType = {catType} route = {catRoute} img_url={url_cat}/>
            </Col>
            <Col sm = {{span:"4"}} md = {{span:"4"}}>
              <AnimalAdoption petType = {dogType} route = {dogRoute} img_url={url_dog}/>
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