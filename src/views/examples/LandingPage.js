import React from "react";
import Card1 from "components/Card/scard.js";
import Card2 from "components/Card/pcard.js";

import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
// reactstrap components
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

// core components


function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
  <ExamplesNavbar />
<LandingPageHeader />
      <div className="wrapper">
        
        {/* <div className="section section-about-us">
          <Container>
           
          </Container>
        </div> */}
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Feature Shops</h2>
            <div className="team">
              <br></br>
              <Row>
               
                <Col md="4" >
                <Card1/>
                </Col>
             
                <Col md="4">
                
                <Card1/>



                </Col>


                <Col md="4">
                <Card1/>
                </Col>
              </Row>


              <hr class="my-4"/>
              <h2 className="title">Our Feature Products</h2>
            
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




            </div>
          </Container>
        </div>
        {/* <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <hr class="my-4"/>



        
      </div>
      
    </>
  );
}

export default LandingPage;
