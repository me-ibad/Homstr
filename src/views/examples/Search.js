import React, { Component } from 'react'
import Card2 from "components/Card/pcard.js";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
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
