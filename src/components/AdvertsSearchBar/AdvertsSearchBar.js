import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import {Container,Row,Col,Button,FormControl,Dropdown,DropdownButton} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";


class AdvertsSearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput :'',
      category :'',
      address : ''
    }
  }

    handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    this.setState({searchInput:results});
    this.setAddress(value);
    document.getElementById("formcontrol").innerHTML = results;
}
setAddress = (value) => {
  this.setState({searchInput:value});
  this.setState({address:value});
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

                <PlacesAutocomplete
                                    value=     {this.state.address}
                                    onChange = {this.setAddress}
                                    onSelect = {this.handleSelect}
                                >
                                    {({  getInputProps, suggestions, getSuggestionItemProps, loading  }) => (
                                        <div>
                                                <Row>
                                                 <Col sm = {{offset:3, span:9}} md = {{offset:3, span:9}}>
                                                <InputGroup 
                                                    style = {{width: "1000px", height: "100px",}}
                                                    className="mt-5">
                                                        <FormControl
                                                        onChange = {this.onSearchChange}
                                                        {...getInputProps({ placeholder: "Type address" })} 
                                                        id = "formcontrol"
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
                                                </Col>
                                            </Row>
                                            <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                        const style = {
                                         backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                          };

                                    return (
                                    <div {...getSuggestionItemProps(suggestion,{ style })}>
                                         <Row>
                                            <Col sm = {{offset:3, span:9}} md = {{offset:3, span:9}}>
                                                <p1 className = "fs-3">{suggestion.description}</p1>
                                            </Col>
                                        </Row>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>


  );
  }
}



export default withRouter(AdvertsSearchBar);