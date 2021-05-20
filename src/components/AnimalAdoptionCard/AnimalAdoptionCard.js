import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
const AnimalAdoption = ({petType,route,history,img_url}) => {
    return(
        <div className ="mx-auto">
            <Button variant= "light"
            onClick = {() => history.push(route)}
            >
                <Card className="text-center mx-auto">

                    <Card.Img  variant="top" src = {img_url} style={{maxHeight:"500px", minHeight:"500px"}}/>
                    <Card.Body>
                        <Card.Title>{petType}</Card.Title>
                        <Card.Text> Afla mai multe.. </Card.Text>
                    </Card.Body>

                </Card>
            </Button>
       </div>
    );
};

export default withRouter(AnimalAdoption);
