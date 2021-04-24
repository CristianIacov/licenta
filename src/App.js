import React from 'react';
import HomePage from './components/HomePage/HomePage';
import SearchBar from './components/SearchBar/SearchBar';
import PetCard from './components/PetCard/PetCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Advert from './components/Advert/Advert';
import AdvertPage from './components/AdvertPage/AdvertPage';
import MyAdverts from './components/MyAdverts/MyAdverts';
import Signin from './components/Signin/Signin';

 class App extends React.Component{


  render()
  {
    return(
      <Router>
        <Switch>
          <Route exact path='/MyAdverts' component={MyAdverts} /> 
          <Route path='/AdvertPage' component={AdvertPage} /> 
          <Route exact path='/Signin' component={Signin} /> 
          <Route exact path='/Advert' component={Advert} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Register" component={SearchBar} />
          <Route exact path="/Pets" component={PetCard} />
        </Switch>
      </Router>
            

    );
  };
 }
export default App;