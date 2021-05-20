import React from 'react';
import { setSignedIn, setLoggedInUser } from '../../actions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Row,Col,Dropdown,Jumbotron,Button,FormControl} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'
import './MyMessages.css'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import MessageChat from '../MessageChat/MessageChat'
import MessageList from '../MessageList/MessageList'
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

class MyMessages extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            actualConversation:{
                sourceUser: 'test',
                destinationUser: 'test',
                advertId: '22'
            },
            allAdverts: []
        }
    }
  componentDidMount(){
        /* Whe refreshing, the adverts for a user will be refreshed aswell */
        const loggedInUser = localStorage.getItem("user");
        var foundUser;
        if (loggedInUser) {
            foundUser = JSON.parse(loggedInUser).email;
        }
        else{
            foundUser = this.props.user.email;
        }
      fetch('http://localhost:3001/getallmessages', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              email: foundUser
          })
      })
      .then(response => response.json())
      .then(data => {
          this.setState({allAdverts: data})
      })
      .catch(err => console.log(err))
  }

/*functions that checks if the message has already been displayed */
  containsMessage = (uniqueValues,entry) => {
    for(var i  = 0 ; i < uniqueValues.length ; i++)
        if( uniqueValues[i].advertId == entry.advertId && uniqueValues[i].sourceUser == entry.sourceUser && uniqueValues[i].destinationUser == entry.destinationUser )
        return true;
    
    return false;
  }

  onChangeActualConversation = (data) => {
      this.setState({actualConversation: data})
  }

    render(){
        const {allAdverts} = this.state;
        var uniqueValues = [{}];

        return(
            <Container fluid={true} className= "p-0">
             <Row noGutters >
                <Col className="homepagenav" >
                    <NavbarPage />
                </Col>
             </Row>
                    <Row>
                    <Col  sm = "3" style = {{borderRight: "1px solid black"}}>
                    {       /*gets all the messages where logged user is destinationUser,all reversed from last to first
                            insert into uniqueValues if  advertId , sourceUser and destinationUser is not already in the array
                            to keep only the last message with a user in a particular advert */
                        allAdverts.map(data => {
                            return(
                                    
                               this.containsMessage(uniqueValues,data) === false? 
                               <div allConversations>
                                   <div className ="hiddendiv">
                               {uniqueValues.push({advertId:data.advertId, sourceUser:data.sourceUser, destinationUser: data.destinationUser})}                              
                               </div>
                               
                               <MessageList conversation = {data} onChangeActualConversation = {this.onChangeActualConversation} />                              
                                </div>
                               
                                :
                                <>

                                </>
                            )
                            }

                            )
                        }
                        
                        </Col>
                        <Col className = "p-0" style = {{marginTop: "auto"}}> 
                        <MessageChat actualConversation={this.state.actualConversation}/>
                        </Col>
                        </Row>
            <Row className ="mt-auto">
                <Col className ="mt-auto">
                    <FooterPage />
                </Col>
            </Row>
          </Container>  

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyMessages));