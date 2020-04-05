import React, { Component } from 'react'
import Card2 from "components/Card/pcard.js";
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
