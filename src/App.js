import React from 'react';
import HomePage from './components/HomePage/HomePage';
import NavbarPage from './components/NavigationBar/NavigationBar';
import CarouselPage from './components/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

 class App extends React.Component{

  constructor(){
    super();
  }
  render()
  {
    return(

        <HomePage />

    );
  };
 }
export default App;