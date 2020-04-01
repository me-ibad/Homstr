import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from "reactstrap";

import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
export class Search extends Component {
    static propTypes = {

    }

    render() {
        return (            
            <div>
                <ExamplesNavbar />
                <LandingPageHeader />
                <Row>
    <Col md="3">

    <div class="card mb-4 ">
    <div class="view overlay">
     
      <img  src={require("assets/img/pizza.jpg")} />
     <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body p-3">

      
      <h5 className="card-title font-weight-bold pointer fuchsia-rose-text mb-0 pointer">
        <a>
        Product name
        </a></h5>
        
      <p className="pointer aqua-sky-text mb-0 ">Shop Name</p>
      <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>

      
      <p className="chili-pepper-text mb-0">19,99 $</p>

      <Button className="butt" color="info">
      <i
                          aria-hidden={true}
                          className="now-ui-icons shopping_cart-simple"
                        ></i>
        Cart</Button>
    </div>
  </div>
      
             

</Col>

<Col md="3">





</Col>


</Row>


                <DefaultFooter />
            </div>
        )
    }
}

export default Search
