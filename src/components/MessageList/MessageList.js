import React from 'react';
import { setSignedIn, setLoggedInUser } from '../../actions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Row,Col,Dropdown,Jumbotron,Button,FormControl} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'

import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


class MessageList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            conversationDisplayed: {}
        }

    }

    render(){

   
        return(
                        <div>
                            <Row className ="mb-3" style = {{borderBottom: "1px solid black"}} >
                                 <Col sm = "12">
                                 <Button 
                                 onClick = {() => this.props.onChangeActualConversation(this.props.conversation)}
                                 className ="custombuttons  btn-lg"   variant="Light">
                                <FontAwesomeIcon  className = "fontawesome" icon={faUserCircle}  size="2x" />   
                                {this.props.conversation.sourceUser}
                                </Button>  
                                </Col>
                                <p1 className = "fs-3" style={{"margin-left":"50px"}}>
                                {this.props.conversation.message.length<=30?this.props.conversation.message:this.props.conversation.message.substring(0,20) + "..."}
                                </p1>
                             </Row>
                        
                       </div>


        );
    }
}

export default withRouter(MessageList);