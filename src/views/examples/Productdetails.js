import React, { useState, useEffect } from "react";
import ColorNav from "components/Navbars/ColorNav.js";
import { useForm } from 'react-hook-form';
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Label,
    Alert,
    FormGroup,
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

function Productdetails() {
    const [pnameErr, setpnameErr] = useState("");
    const [pname, setpname] = useState("");

    const [price, setprice] = useState("");
    const [other, setother] = useState("");
    const [category, setcategory] = useState("");
    const [discount, setdiscount] = useState("");
    const [img, setimg] = useState("");
    const [img2, setimg2] = useState("");
     const [color, setcolor] = useState("");
    const [size, setsize] = useState("");
    const [description, setdescription] = useState("");



    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };


    const [alert4, setAlert4] = React.useState(true);


    //  pruductsubmit()=>{
    var myModule = require("views/database");

    // }
    const pruductsubmit = async () => {
    

        const data = new FormData();

        data.append("file", img);
        data.append('pname', pname);
        data.append('price', price);
        data.append('category', category);
        data.append('other', other);
        data.append('discount', discount);
        data.append('description', description);
        
        //  let json=JSON.stringify(tags);
        ///  let post_data={json_data:json}
    
            axios

                .post(myModule.servername + "/api/users/files", data, {
                    
                    // receive two    parameter endpoint url ,form data
                })
    
    }
function handlername(e){
setpname(e.target.value);

}


    const onChangeHandler = (e) => {
        
            setimg(e.target.files[0]);

        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output');
            output.src = reader.result;
            

    }
        
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);  
    }
       
    };

    const onChangeHandler2 = (e) => {
        
        setimg2(e.target.files[0]);

        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output2');
            output.src = reader.result;


        }

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

    };


    const classes = useStyles();
    return (
        <div>
            <ColorNav />
            <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <div className="  text-center" >
                    <h2 className="title">Add Product details</h2>
                  

                </div>




                <Row>
                    
                    < Col md="5" lg="2" sm="6" >
                             <div class="avtcontainer">
                                <img src={require("assets/img/no.jpg")} alt="Avatar" class="avtimage" id='output' />
                                <div class="avtmiddle">
                                    <div className={classes.root}>

                                        <input accept="image/*" className={classes.input} id="icon-button-file" name="one" type="file" onChange={onChangeHandler} />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera fontSize="large" />
                                            </IconButton>
                                        </label>
                                    </div>
                                </div>
                            </div> 
                    </ Col>
                        < Col md="5" lg="2" sm="6" >
                            <div class="avtcontainer">
                                <img src={require("assets/img/no.jpg")} alt="Avatar" class="avtimage" id='output2' />
                                <div class="avtmiddle">
                                    <div className={classes.root}>

                                        <input accept="image/*" className={classes.input} id="icon-button-file1" name="two" type="file" onChange={onChangeHandler2} />
                                        <label htmlFor="icon-button-file1">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera fontSize="large" />
                                            </IconButton>
                                        </label>
                                    </div>
                                </div>
                            </div> 
                        </ Col> 
                        
                    <Col md="2"> </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col lg="3" md="4" sm="6" xm="6">
                        <Label for="ShopName">Name<span className="sred">*</span></Label>
                        <FormGroup>
                            <Input
                                    inputProps={{
                                        type: "email",
                                        onChange: (e) => setpname(e.target.value),
                                    }}
                                    ref={register({ required: true })}
                                defaultValue=""
                                placeholder=""
                                onChange={handlername}
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
                                   

                                    onChange={(e) => setprice(e.target.value)}
                                defaultValue=""
                                placeholder=""
                                type="number"
                                    min="0"
                            ></Input>
                        </FormGroup>
                    </Col>
                    <Col lg="1" md="1" sm="1">
                    </Col>
                    <Col lg="3" md="4" sm="6" xm="6">
                        <Label for="ShopName">Discount<span className=""> (optional)</span></Label>
                        <FormGroup>
                            <Input
                                    onChange={(e) => setdiscount(e.target.value)}
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
                              
                                        <select class="ui dropdown dropstyl " type="select" name="select" id="exampleSelect" onChange={(e) => setcategory(e.target.value)}>           
                                    <option>--select option--</option>
                                    
                                    <option value="others">others</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col lg="1" md="1" sm="1">
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <Label for="ShopName">If other enter</Label>
                            <FormGroup>
                                <Input
                                       
                                        onChange={(e) => setother(e.target.value)}
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
                                        inputProps={{
                                            type: "email",
                                            onChange: (e) => setcolor(e.target.value),
                                        }}
                                    defaultValue=""
                                        placeholder="red,green"
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
                                        inputProps={{
                                            type: "email",
                                            onChange: (e) => setsize(e.target.value),
                                        }}
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
                                    onChange={(e) => setdescription(e.target.value)}
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
                                    type="submit"
                                // href="/bank"
                                onClick={pruductsubmit}

                            >Continue</Button>
                        </Col>


                    </Row>
                </div>
            </Container>
            </form>
        </div>
    )
}

export default Productdetails
