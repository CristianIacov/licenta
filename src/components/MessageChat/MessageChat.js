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

const mapStateToProps = (state) => {
    return {
      isSignedIn: state.setSignedIn.isSignedIn,
      user: state.setLoggedInUser.user
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {    
    }
};

class MessageChat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            conversation:[]
        }
    }
/* componentDidMount aici */
onGetChat = () => {
    console.log('convesatia');
    console.log(this.props.actualConversation);
    fetch('http://localhost:3001/conversation',{
        method: 'post',
        body: JSON.stringify({
            sourceUser: this.props.actualConversation.sourceUser,
            destinationUser: this.props.actualConversation.destinationUser,
            advertId: this.props.actualConversation.advertId
        })
    })
    .then(response => response.json())
    .then(data => {
        this.setState({conversation: data})
    })
    .catch(err => console.log('EROARE420'))
}
    render(){
        const {conversation} = this.state;
        return(
                        <div>
                        <FormControl
                            style={{border: "0.5px solid black", height: "75px"}} 
                            placeholder = "Trimite un mesaj"
                            aria-describedby="basic-addon1" />
                            {
                                conversation.map(data => {
                                    return(
                                        <div>
                                        
                                        {this.props.user.email == data.sourceUser?
                                        <div>
                                        <Row>
                                            <Col className ="ml-auto bg-light">
                                                <p1 className ="fs-2">{data.message}</p1>
                                            </Col>
                                        </Row>
                                        </div>
                                        :
                                        <div>
                                        <Row>
                                            <Col className ="mr-auto bg-green">
                                                <p1 className ="fs-2">{data.message}</p1>
                                            </Col>
                                        </Row>
                                        </div>
                                        }
                                        </div>
                                    
                                    )
                                }
                                    )
                            }
                        
                       </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageChat));