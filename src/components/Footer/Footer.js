import React from "react";
import './Footer.css';
import { withRouter } from 'react-router-dom';
const FooterPage = ({history}) => {
  return (

    <div id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Adopta un animalut</h5>
					<ul class="list-unstyled quick-links">
						<li><a
						onClick = {() => history.push('/AdoptDog')}><i 
						class="fa fa-angle-double-right"></i>Adopta un caine</a></li>
						<li><a
						onClick = {() => history.push('/AdoptCat')}
						><i class="fa fa-angle-double-right"></i>Adopta o pisica</a></li>
						<li><a ><i class="fa fa-angle-double-right"></i>Adopta alte animale</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Articole despre animale</h5>
					<ul class="list-unstyled quick-links">
						<li><a ><i class="fa fa-angle-double-right"></i>Ingrijire caini</a></li>
						<li><a ><i class="fa fa-angle-double-right"></i>Ingrijire caini pisici</a></li>
						<li><a ><i class="fa fa-angle-double-right"></i>Ingrijire alte animale</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Anunturi</h5>
					<ul class="list-unstyled quick-links">
						<li><a ><i class="fa fa-angle-double-right"></i>ANUNTURILE MELE</a></li>
						<li><a ><i class="fa fa-angle-double-right"></i>ANUNTURI DISPONIBILE</a></li>
						<li><a ><i class="fa fa-angle-double-right"></i>CONTUL MEU</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a ><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a ><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a ><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a ><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a  target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/"></a></u> </p>
					<p class="h6">© All right Reserved.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Cristian Iacov</a></p>
				</div>
				
			</div>	
		</div>
	</div>


  );
}

export default withRouter(FooterPage);