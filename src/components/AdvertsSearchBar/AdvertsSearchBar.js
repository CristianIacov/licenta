import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import {Container,Row,Col,Button,FormControl,Dropdown,DropdownButton} from 'react-bootstrap';
class AdvertsSearchBar extends Component {


render() {
  return (


             <InputGroup 
             style = {{width: "1000px", height: "75px",margins :"auto",}}
             className="mx-auto mt-5">
                <FormControl
                style={{border: "0.5px solid black"}} 
                 placeholder = "Introduceti Localitatea sau Judetul"
                aria-describedby="basic-addon1" />
                 <Button variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faDog} color="green" size="3x" /> 
                Caini
                </Button>
                <Button variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faCat} color="green" size="3x" /> 
                Pisici
                </Button>
                <Button variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faPaw}  color="green" size="3x" /> 
                Alte animale
                </Button>
             </InputGroup>

  );
  }
}



export default AdvertsSearchBar;