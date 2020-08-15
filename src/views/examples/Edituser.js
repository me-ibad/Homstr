import React, { useState, useEffect } from "react";
import ColorNav from "components/Navbars/ColorNav.js";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },

}));



var myModule = require("views/database");
function Edituser() {


    useEffect(() => {
        showuser();
    });




    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phno, setphno] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");
    const [userimg, setuserimg] = useState("");


    const [show, setshow] = useState("");
    const [modal1, setModal1] = React.useState(false);
    const classes = useStyles();



    const showuser = async () => {
        const response = await fetch(myModule.servername + "/api/users/showuser", {
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
            },
            body: `id=${JSON.parse(localStorage.getItem("tokenhomstr"))._id}`,

            

        });
        var swt = await response.json();
        console.log('111111111111111111111111111111111111111111111111111111111111111111');
        console.log(swt.lname);
        setfname(swt.fname);
        setlname(swt.lname);
        setemail(swt.email);
        setphno(swt.phno);
        setaddress(swt.address);

    }















    var myModule = require("views/database");
    const usersubmit = async () => {
        const data = new FormData();

        data.append("userimg", userimg);
        data.append('fname', fname);
        data.append('lname', lname);
        data.append('email', email);
        data.append('phno', phno);
        data.append('address', address);
        data.append('city', city);
        data.append('country', country);
        data.append('tokenhomstr', localStorage.getItem('tokenhomstr'));
        
        console.log(country);

        //  let json=JSON.stringify(tags);
        ///  let post_data={json_data:json}



        axios

            .post(myModule.servername + "/api/users/edituser", data, {

                // receive two    parameter endpoint url ,form data
            })
    }

    var openFile = function (event) {
        alert('afaf');
        var input = event.target;

        var reader = new FileReader();
        reader.onloadstart = function () {
            reader.abort();
        };

        reader.onloadend = function () {
            console.log(reader.error.message);
        };

        reader.readAsArrayBuffer(input.files[0]);
    };

    const onChangeHandler = (e) => {
        setuserimg(e.target.files[0]);

        
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output');
            output.src = reader.result;
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }


    };










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
                                        id="bp-login-widget-form"
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




            {/* <ColorNav /> */}
            <Container>
                <div className="  text-center" >
                    <h2 className="title"></h2>
                  

                </div>




                <Row>
                    <Col md="4" lg="4" sm="4" xm="4"></Col>
                    < Col md="8" lg="8" sm="8" m="8">
                        <div class="avtcontainer">
                            <img src={require("assets/img/avatr.jpg")} alt="Avatar" class="avtimage" id='output' />
                            <div class="avtmiddle">
                                <div className={classes.root}>
                                  
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChangeHandler} />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span" >
                                            <PhotoCamera fontSize="large"/>
                                        </IconButton>
                                    </label>
                                </div>
                            </div>
                        </div>
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
                                    defaultValue={fname}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) => setfname(e.target.value)}
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Last Name<span className="sred">*</span></Label>
                            <FormGroup>
                                <Input
                                    defaultValue={lname}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) => setlname(e.target.value)}
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
                                    defaultValue={email}
                                    placeholder=""
                                    type="email"
                                    onChange={(e) => setemail(e.target.value)}
                                   
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">Phone Number<span className="sred"></span></Label>
                            <FormGroup>
                                <Input
                                    defaultValue={phno}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) => setphno(e.target.value)}
                                ></Input>
                            </FormGroup>
                        </Col>


                    </Row>

                </div>
                <div className="sett-1">

                    <Row>
                        <Col lg="4" md="4" sm="6">
                            <Label for="ShopName">Address<span className="sred">*</span></Label>
                            <FormGroup>
                                <Input
                                    defaultValue={address}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) => setaddress(e.target.value)}
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">

                            <FormGroup>
                                <Label for="ShopName">City<span className="sred">*</span></Label>
                                <br />
                                <select class="ui dropdown dropstyl" onChange={(e) => setcity(e.target.value)}>
                                    <option value="select">--select--</option> 

                                    <option value="Islamabad">Islamabad</option>
                            
                                    <option value="Lahore">Lahore</option>
                              
                                    <option value="Karachi">Karachi</option>
                                 
                                   

                                </select>
                            </FormGroup>
                        </Col>

                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">

                            <FormGroup>
                                <Label for="ShopName">Country<span className="sred">*</span></Label>
                                <br />
                                <select class="ui dropdown dropstyl " onChange={(e) => setcountry(e.target.value)}>
                                    <option value="select">--select--</option> 
                                    <option value="Pakistan">Pakistan</option>    
                                    <option value="india">india</option>                             
                                </select>
                            </FormGroup>

                        </Col>

                    </Row>




                </div>
                <Button color="warning"
                    onClick={() => setModal1(true)}

                >Change password</Button>
                < div className="sett-1" >
                    <Row>

                        <Col lg="2" md="2" sm="2" xm="1">

                        </Col>
                        <Col lg="2" md="2" sm="2" xm="2">
                            
                        </Col>

                        <Col lg="4" md="2" sm="2" xm="2">
                         </Col>
                        <Col lg="2" md="2" sm="2" xm="2">
                            <Button color="info"
                                onClick={usersubmit}

                            >Continue</Button>
                        </Col>


                    </Row>
                </div>



                </Container>

        </div>
    )
}

export default Edituser
