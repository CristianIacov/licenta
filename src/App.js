import React from 'react';
import HomePage from './components/HomePage/HomePage';
import NavbarPage from './components/NavigationBar/NavigationBar';
import SearchBar from './components/SearchBar/SearchBar';
import CarouselPage from './components/Carousel/Carousel'
import PetCard from './components/PetCard/PetCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
 class App extends React.Component{

  constructor(){
    super();
  }
  render()
  {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SearchBar" component={SearchBar} />
          <Route exact path="/Pets" component={PetCard} />
        </Switch>
      </Router>
            

    );
  };
 }
export default App;