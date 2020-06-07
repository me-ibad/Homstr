import React from 'react'
import ColorNav from "components/Navbars/ColorNav.js";
import {
    Button,
    Label,
    FormGroup,
    Modal,
    ModalBody,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
function Edituser() {
    const [modal1, setModal1] = React.useState(false);
    return (
        <div>
            <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        type="button"
                        onClick={() => setModal1(false)}
                    >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className="title title-up">Change Password</h4>
                </div>
                <ModalBody>
                    <div>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    Current Password</Label>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                    ></Input>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    New Password</Label>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                    ></Input>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    Confirm Password</Label>
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
                </ModalBody>
                <div className="modal-footer">
                    <Button color="success" type="button">
                        Update
                  </Button>
                    <Button
                        color="danger"
                        type="button"
                        onClick={() => setModal1(false)}
                    >
                        Close
                  </Button>
                </div>
            </Modal>




            <ColorNav />
            <Container>
                <div className="  text-center" >
                    <h2 className="title">Setup Your Shop</h2>
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
                
              

                <div className="sett-1">

                    <Row>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">First Name<span className="sred">*</span></Label>
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
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Last Name<span className="sred">*</span></Label>
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
                            <Label for="ShopName">Email<span className="sred"></span></Label>
                            <FormGroup>
                                <Input
                                    defaultValue=""
                                    placeholder=""
                                    type="email"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Phone Number<span className="sred"></span></Label>
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
                <Button color="warning"
                    onClick={() => setModal1(true)}

                >reset password</Button>
                < div className="sett-1" >
                    <Row>

                        <Col lg="2" md="2" sm="2">

                        </Col>
                        <Col lg="6" md="2" sm="2">
                            <Button color="danger"
                                href="/shopsetup"
                                onClick={"shopsetup"}
                            >Back</Button>
                        </Col>



                        <Col lg="2" md="2" sm="2">
                            <Button color="info"
                                href="/profile"
                                onClick={"profile"}

                            >Continue</Button>
                        </Col>


                    </Row>
                </div>



                </Container>

        </div>
    )
}

export default Edituser
