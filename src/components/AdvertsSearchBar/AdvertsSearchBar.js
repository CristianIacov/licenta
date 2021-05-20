import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import {Container,Row,Col,Button,FormControl,Dropdown,DropdownButton} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class AdvertsSearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput :'',
      category :''
    }
  }
onSearchChange = (event) => {
    this.setState({searchInput: event.target.value});
}

onSubmitSearch = () => {
  fetch('http://localhost:3001/allannounces', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        category: this.state.category,
        location: this.state.searchInput
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    this.props.history.push({
      pathname: "/AllAdverts",
      state: {allAdverts: data}
      })
  })
  .catch(err => console.log(err))
}

render() {
  return (


             <InputGroup 
             style = {{width: "1000px", height: "100px",margins :"auto",}}
             className="mx-auto mt-5">
                <FormControl
                onChange = {this.onSearchChange}
                style={{border: "0.5px solid black"}} 
                 placeholder = "Introduceti Localitatea sau Judetul"
                aria-describedby="basic-addon1" />
                 <Button 
                 onClick = {async () => {
                   await this.setState({category: 'Caini'});
                   this.onSubmitSearch();
                   
                 }}
                 variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faDog} color="green" size="3x" /> 
                Caini
                </Button>
                <Button 
                                 onClick = {async () => {
                                  await this.setState({category: 'Pisici'});
                                  this.onSubmitSearch();
                                  
                                }}
                variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faCat} color="green" size="3x" /> 
                Pisici
                </Button>
                <Button 
                                 onClick = {async () => {
                                  await this.setState({category: 'Alte animale'});
                                  this.onSubmitSearch();
                                  
                                }}
                variant="outline-secondary btn-lg">
                <FontAwesomeIcon icon={faPaw}  color="green" size="3x" /> 
                Alte animale
                </Button>
             </InputGroup>

  );
  }
}



export default withRouter(AdvertsSearchBar);