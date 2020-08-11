import React from "react";
import Card1 from "components/Card/scard.js";
import Card2 from "components/Card/pcard.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
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
  <IndexNavbar />
<LandingPageHeader />
      
        
          <Container>
            {/* <h2 className="title">Our Feature Shops</h2> */}
            <div className="team">

             <Row>
<Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">

                    {/* <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by studiogstock - www.freepik.com</a> */}

                    <img src="https://image.freepik.com/free-vector/shopping-basket-bag-with-products_24877-56662.jpg" />
                  </div>
                  <div class="card_title title-white">
                    <p></p>
                  </div>
                </div>
              </div>
</Col>
            <Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">
                    <img src="https://image.freepik.com/free-vector/medicine-elements-background_23-2147772710.jpg" />
                  </div>
                  <div class="card_title title-white">
                    
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">
                    <img src="https://image.freepik.com/free-vector/fast-food-advertising-composition_1284-17372.jpg" />
                  </div>
                  <div class="card_title title-white">

                  </div>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">
                    <img src="https://image.freepik.com/free-vector/network-gadget-set_1284-10695.jpg" />
                   
                  </div>
                  <div class="card_title title-white">

                  </div>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">
                    <img src="https://image.freepik.com/free-vector/summer-look-flatlay-trendy-summer-outfit-hand-drawn-illustration-all-elements-are-isolated-blue-background-denim-shorts-teenage-crop-top-sandals-lemons-mesh_196895-208.jpg" />
                  </div>
                  <div class="card_title title-white">

                  </div>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" sm="4" xm="1">
              <div class="cards-list">

                <div class="card2">
                  <div class="card_image">
                    <img src="https://image.freepik.com/free-vector/cosmetic-elements-collection_1215-602.jpg" />
                  </div>
                  <div class="card_title title-white">

                  </div>
                </div>
              </div>
            </Col>

             </Row>


              <hr class="my-4"/>
          <h2 className="title">Groceries</h2>
            
<Row>

                <Col lg="3" md="6" sm="6" xm="6">
                <Card2/>
                </Col>
             
                <Col lg="3" md="6" sm="6" xm="6">
                
                <Card2/>
                </Col>

                <Col lg="3" md="6" sm="6" xm="6">
                <Card2/>
                </Col>
                <Col lg="3" md="6" sm="6" xm="6">
                <Card2/>
                </Col>

</Row>




            </div>
          </Container>
       
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
        



        
    
      
    </>
  );
}

export default LandingPage;
