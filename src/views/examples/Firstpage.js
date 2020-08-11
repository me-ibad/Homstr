import React from "react";
import Card1 from "components/Card/scard.js";
import Card2 from "components/Card/pcard.js";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js"
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from "reactstrap";

function Firstpage() {
    return (
        <div>
            <ExamplesNavbar />
            <LandingPageHeader />
            <br/>
            <div class="blog-card">
                <div class="meta">
                    <div class="photo" 
                    
                        style={{
                            backgroundImage:
                                "url(" + require("assets/img/getstart.jpg") + ")"
                        }}
                    
                    ></div>

                </div>
                <div class="description">
                    <h1>Sell your Business</h1>
                    <h2>Join Homstr Free</h2>
                    <p>Grow your business by using our platform to sell products to anyone, from anywhere in city. Whether you want to build a delivery business or be your own boss and have a flexible schedule, we have multiple options for you.  </p>
                    <p class="read-more">
                        <a href="#">Continue</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Firstpage
