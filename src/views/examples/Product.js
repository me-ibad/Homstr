import React from 'react'

import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

function Product() {
    return (
        <div>
             

             <div class="container1">
		<div class="card1">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={require("assets/img/jacket.jpg")} /></div>
						  <div class="tab-pane" id="pic-2"><img src={require("assets/img/jacket1.jpg")} /></div>
						  <div class="tab-pane" id="pic-3"><img src={require("assets/img/jacket2.jpg")} /></div>
						  <div class="tab-pane" id="pic-4"><img src={require("assets/img/jacket3.jpg")} /></div>
						  <div class="tab-pane" id="pic-5"><img src={require("assets/img/jacket4.jpg")} /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={require("assets/img/jacket.jpg")} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={require("assets/img/jacket1.jpg")} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={require("assets/img/jacket2.jpg")} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={require("assets/img/jacket3.jpg")} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={require("assets/img/jacket4.jpg")} /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">men's Jacket fashion</h3>
						<div class="rating">
                       < div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<h4 class="price">current price: <span>780 Rs</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<Button color="info" type="button">add to cart</Button>
							<Button color="danger" className="like btn btn-default" type="button"><span class="fa fa-heart"></span></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



         
        </div>
    )
}

export default Product


