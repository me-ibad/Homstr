import React, { Component } from 'react'
import Card2 from "components/Card/pcard.js";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Filter from "components/Product/Filter.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
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


export class Search extends Component {
    static propTypes = {

    }

    render() {
        return (            
            <div>
                

<ExamplesNavbar />
<LandingPageHeader />
                
                  <Container>
<br/>

            <Row>     
              < Col md ="6"  lg="6">
                    <p>
 
<div class="button_cont" align="center"><a class="example_e" 
 data-toggle="collapse" data-target="#collapseExample" 
  aria-expanded="false" aria-controls="collapseExample"

href="add-website-here" target="_blank" rel="nofollow noopener">
  Filter</a></div> 
</p>

<div class="collapse" id="collapseExample">
  <div class="cardf card-body">
    <Filter />
  </div>
</div>

</ Col>
</Row>
<br/>
                <Row>
                <Col md="3" >
                <Card2/>
                </Col>
             
                <Col md="3">
                
                <Card2/>
                </Col>

                <Col md="3">
                <Card2/>
                </Col>
                <Col md="3">
                <Card2/>
                </Col>



</Row>
</Container>


                
            </div>
        )
    }
}

export default Search
