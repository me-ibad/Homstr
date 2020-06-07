import React from 'react'
import ColorNav from "components/Navbars/ColorNav.js";
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
function Productdetails() {
    return (
        <div>
            <ColorNav />
            <Container>
                <div className="  text-center" >
                    <h2 className="title">Add Product details</h2>
                    <img
                        alt="..."
                        className="rounded img-raised widthig"
                        src={require("assets/img/no.jpg")}
                    ></img>

                </div>




                <Row>
                    <Col md="4" lg="4" sm="4"></Col>
                    < Col md="6" lg="4" sm="6" >
                        <label for="img">Select image:</label>
                        <Input type="file" accept="image/*" />
                    </ Col>

                    <Col md="2"> </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col lg="3" md="4" sm="6" xm="6">
                        <Label for="ShopName">Name<span className="sred">*</span></Label>
                        <FormGroup>
                            <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                            ></Input>
                        </FormGroup>
                    </Col>
                    <Col lg="1" md="1" sm="1">
                    </Col>
                    <Col lg="3" md="4" sm="6" xm="6">
                        <Label for="ShopName">Price<span className="sred">*</span></Label>
                        <FormGroup>
                            <Input
                                defaultValue=""
                                placeholder=""
                                type="number"
                            ></Input>
                        </FormGroup>
                    </Col>
                    <Col lg="1" md="1" sm="1">
                    </Col>
                    <Col lg="3" md="4" sm="6" xm="6">
                        <Label for="ShopName">Discount<span className=""> (optional)</span></Label>
                        <FormGroup>
                            <Input
                                defaultValue=""
                                placeholder=""
                                type="number"
                            ></Input>
                        </FormGroup>
                    </Col>

                   
                </Row>

                <div className="sett-1">

                    <Row>
                        <Col lg="3" md="4" sm="6">
                            <FormGroup>
                                <Label for="ShopType">Product Category<span className="sred">*</span></Label>
                                <br />
                                <select class="ui dropdown dropstyl ">
                                    <option>--select option--</option>
                                    
                                    <option>others</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">If other enter</Label>
                            <FormGroup>
                                <Input
                                    defaultValue=""
                                    placeholder=""
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>

                    </Row>

                </div>

                <div className="sett-1">

                    <Row>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Colors</Label>
                            <FormGroup>
                                <Input
                                    defaultValue="red,green"
                                    placeholder=""
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Size</Label>
                            <FormGroup>
                                <Input
                                    defaultValue=""
                                    placeholder="lg,md,sm"
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>


                    </Row>

                </div>

                

                < div className="sett-1" >


                    <Row>
                        <Col lg="9" md="7" sm="7">

                            <div className="textarea-container">
                                <Input
                                    cols="80"
                                    name="name"
                                    placeholder="Add Description"
                                    rows="4"
                                    type="textarea"
                                ></Input>
                            </div>
                        </Col>
                    </Row>




                </ div>


                < div className="sett-1" >
                    <Row>
                        <Col lg="10" md="8" sm="8">

                        </Col>
                        <Col lg="2" md="2" sm="2">
                            <Button color="info"
                                href="/bank"
                                onClick={"bank"}

                            >Continue</Button>
                        </Col>


                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Productdetails
