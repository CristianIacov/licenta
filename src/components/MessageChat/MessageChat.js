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
import './MessageChat.css';

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
            conversation:[],
            messageChat: 'test'
        }
    }
    onMessageChange = (event) => {
        this.setState({messageChat: event.target.value});
        console.log('mesajul a fost schimbat' + this.state.messageChat);
    };


    onMessageSend = () => {
        var destinationUser ;
        if (this.props.user.email == this.props.actualConversation.sourceUser){
            destinationUser = this.props.actualConversation.destinationUser
        }
        else
        {
            destinationUser = this.props.actualConversation.sourceUser
        }
        fetch('http://localhost:3001/messages',{
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       sourceUser: this.props.user.email,
       destinationUser: destinationUser,
       advertId: this.props.actualConversation.advertId.toString(),
       message: this.state.messageChat
     })
   })
   .then(response => response.json())
   .then(data => {
     console.log(data);
     if(data == 'ok'){
     window.alert('Mesajul a fost trimis');
     }
     else{
       window.alert('Mesajul nu a putut fi trimis');
     }
   })
   .catch(err => { console.log(err)})
    }


componentDidUpdate(prevProps){
    if (this.props != prevProps) {   // So that the method componentDidUpdate doesnt get recalled and slow down the cpu
    console.log('convesatia');
    console.log(this.props.actualConversation);
    fetch('http://localhost:3001/conversation',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
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
}
    render(){
        const {conversation} = this.state;
        console.log('conversation');
        console.log(conversation);
        return(
                        <div>


                            {
                                conversation.map(data => {
                                    return(
                                        <div>
                                        
                                        {this.props.user.email == data.sourceUser?
                                        <div className = "conversations">
                                        <Row>
                                            <Col sm={{span: 5, offset: 0.5}}className ="p-3" style={{marginLeft:"auto"}}>
                                                <p1 className ="fs-4 p-3 mb-2">{data.message}</p1>
                                                {data.timestamp.toString().substring(0,19)}
                                            </Col>
                                        </Row>
                                        </div>
                                        :
                                        this.props.user.email == data.destinationUser?
                                        <div>
                                        <Row>
                                            <Col sm={{span: 5, offset: 0.5}} className ="p-3" style={{marginRight:"auto", marginBottom: "auto"}}>
                                            <FontAwesomeIcon  className = "fontawesome" icon={faUserCircle}  size="2x" />  
                                                <p1 className ="fs-4 p-3 mb-2">{data.message}</p1>
                                                {data.timestamp.toString().substring(0,19)}
                                            </Col>
                                        </Row>
                                        </div>
                                        :
                                        <div>
                                        <h2 className ="mx-auto bg-green"> TEST TEST TEST </h2>
                                        </div>
                                        }
                                        </div>
                                    
                                    )
                                }
                                    )
                            }
                        <FormControl
                        id = "textinput"
                        onChange = {this.onMessageChange}  
                            onKeyPress = {(event) => {
                                if(event.key === 'Enter' && this.props.isSignedIn == true){
                                this.onMessageSend();
                                document.getElementById("textinput").value = '';
                            }
                        else{
                            window.alert('Nu esti logat')
                        }
                        }}                  
                            style={{border: "0.5px solid black", height: "75px"}}
                            placeholder = "Trimite un mesaj"
                            aria-describedby="basic-addon1" />

                       </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageChat));