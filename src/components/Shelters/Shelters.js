import React, { useState } from 'react';
import { Row, Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import NavbarPage from '../NavigationBar/NavigationBar';
import './Shelters.css';
import FooterPage from '../Footer/Footer'
const Shelters = () => {
const [pet,setPet] = useState('');
const [location, setLocation] = useState({});
const [urls, setUrls] = useState([]);

const onSubmitSearch = () => {
    fetch('http://localhost:3001/crawler',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            animalType: pet.toString(),
            location: location.toString()
        })
    })
    .then(response => response.json())
    .then(data => setUrls(data))
    .catch(err => console.log(err))
};
const onLocationChange = (event) => {
    setLocation(event.target.value);
}
    return(
        <Container fluid={true} className= "p-0">
            <Row noGutters>
                <Col className="homepagenav">
                    <NavbarPage />
                </Col>
            </Row>

            <Row>
                <Col sm = {{offset:3, span:9}} md = {{offset:3, span:9}}>
                    <h1 className = "title">Cauta un animalut de pe o alta platforma</h1>
                    <br/>
                    <p className = "fs-2">Platforma noastra ofera optiunea de a cauta anunturi cu animale de companie si de pe alte site-uri pentru a maximiza sansele </p> 
                    <p className = "fs-2">
                    fiecarui utilizator de a-si gasii animalutul perfect.</p> 
                    <img className = "mt-5 mb-5" src = "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg" />
                    <p className = "fs-2">Scopul acestei platforme nu este de a concura cu alte site-uri.Noi ne dorim sa ajutam cat mai multi utilizatori </p>
                    <p className = "fs-2">si din acest motiv va sugeram sa folositi acest motor de cautare oferit de noi.</p>
                    <p className = "fs-2">Va anuntam totusi ca unele anunturi ar putea fii cu bani,dar noi nu putem controla asta.</p>
                    <h2 className = "title">Va rugam sa introduceti localitatea si sa apasati pe animalutul dorit.</h2>
                </Col>
            </Row>
            <Row>
                <Col sm = {{offset:3, span:9}} md = {{offset:3, span:9}}>
                <InputGroup 
                    style = {{width: "1000px", height: "100px",}}
                    className="mt-5">
                        <FormControl
                        onChange = {onLocationChange}
                        style={{border: "0.5px solid black"}} 
                        placeholder = "Introduceti Localitatea sau Judetul"
                        aria-describedby="basic-addon1" />

                        <Button 
                        onClick = {async () => {
                            await setPet('caini');
                            onSubmitSearch();
                        }}
                        variant="outline-secondary btn-lg">
                        <FontAwesomeIcon icon={faDog} color="green" size="3x" /> 
                        Caini
                        </Button>
                        <Button 
                        onClick = {async () => {
                            await setPet('pisici');
                            onSubmitSearch();
                        }}
                        variant="outline-secondary btn-lg">
                 <FontAwesomeIcon icon={faCat} color="green" size="3x" /> 
                Pisici
                </Button>
                </InputGroup>
                </Col>
            </Row>
            {
                urls.map(data => {
                    return (
                        <Row>
                            <Col sm = {{offset:3, span:9}} md = {{offset:3, span:9}}>
                                <p className = "fs-2"> {data} </p>
                            </Col>
                        </Row>

                    );
                })
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <Row>
          <Col className = "mt-5">
          <FooterPage />
          </Col>
        </Row>
        </Container>
    );
}

export default Shelters;