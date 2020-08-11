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

function Shopsetup() {
  const [sname, setsname] = useState("");
  const [stype, setstype] = useState("");
  const [email, setemail] = useState("");
  const [phno, setphno] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [shopimg, setshopimg] = useState("");
  const [category, setcategory] = useState("");
  const [employees, setemployees] = useState("");
  const [shopinfo, setshopinfo] = useState("");

  const shopsubmit = async () => {


    const data = new FormData();

    data.append("shopimg", shopimg);
    data.append('sname', sname);
    data.append('stype', stype);
    data.append('email', email);
    data.append('phno', phno);
    data.append('address', address);
    data.append('city', city);
    data.append('country', country);
    data.append('category', category);
    data.append('employees', employees);
    data.append('shopinfo', shopinfo);
    //  let json=JSON.stringify(tags);
    ///  let post_data={json_data:json}

    var myModule = require("views/database");

    axios

      .post(myModule.servername + "/api/users/shopsetup", data, {

        // receive two    parameter endpoint url ,form data
      })










  }
  const onChangeHandler = (e) => {

    setshopimg(e.target.files[0]);

    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById('output');
      output.src = reader.result;
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

  };



    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
  const classes = useStyles();
     const [firstFocus, setFirstFocus] = React.useState(false);
     const [lastFocus, setLastFocus] = React.useState(false);
    return (
        <div>
        <ColorNav />
          <Container>
            
            
            
            
            
            <Row>
   <Col md="4"  lg="4" sm="4"></Col>
          
            < Col md="8" lg="8" sm="8" m="8">
              <h2 className="title">Setup Your Shop</h2>
              <div class="avtcontainer">
                <img src={require("assets/img/no.jpg")} alt="Avatar" class="avtimage" id='output' />
                <div class="avtmiddle">
                  <div className={classes.root}>

                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChangeHandler} />
                    <label htmlFor="icon-button-file">
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
<br/><br/>
             <Row>
 <Col lg="3" md="4" sm="6">
   <Label for="ShopName">Shop Name<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="text"
                  onChange={(e) => setsname(e.target.value)}
                  ></Input>
                </FormGroup>
              </Col>

<Col lg="2" md="2" sm="1">
  < div className = "radioset" >
  <Label for="ShopType">Shop Type<span className="sred">*</span></Label>
  </div>
  </Col>             

<Col lg="2" md="3" sm="6">
   < div className = "radioset leftst" >
<FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="Home Based"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                      onChange={(e) => setstype(e.target.value)}
                  ></Input>
                  <span className="form-check-sign"></span>
                  Home Based
                </Label>
              </FormGroup>
</div>
</Col>

<Col lg="2" md="3" sm="6">
   < div className = "radioset leftst" >
     <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    
                      defaultValue="Physical Based"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                      onChange={(e) => setstype(e.target.value)}
                  ></Input>
                  <span className="form-check-sign"></span>
                  Physical Based
                </Label>
              </FormGroup>
</div>

</Col>
   </Row>

<div className="sett-1">

<Row>
 <Col lg="3" md="4" sm="6">
 <FormGroup>
       <Label for="ShopType">Shop Category<span className="sred">*</span></Label>
                  <br />
                  <select class="ui dropdown dropstyl " onChange={(e) => setcategory(e.target.value)}>
          <option>--select option--</option>
          <option>Groceries</option>
          <option>Health/Medicine</option>
          <option>Garments</option>
          <option>Electronics</option>
           <option>Foods/Drinks</option>
           <option>Cosmetics</option>
          
        </select>
      </FormGroup>
   </Col>
 <Col lg="1" md="1" sm="1">
   </Col>
 <Col lg="3" md="4" sm="6">
 <FormGroup>
       <Label for="ShopType">Shop Employees<span className="sred">*</span></Label>
                  <br />
                  <select class="ui dropdown dropstyl " onChange={(e) => setemployees(e.target.value)}>
         <option>--select option--</option>
          <option>individual</option>
          <option>2-4</option>
          <option>5-10</option>
          <option>10+</option>
          
       </select>
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
                    placeholder = ""
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
                    defaultValue=""
                    placeholder = ""
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
   <Label for="ShopName">Business Address<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
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
                  <select class="ui dropdown dropstyl " onChange={(e) => setcity(e.target.value)}>
         <option>--select City--</option>
           <option value="Islamabad">Islamabad</option>
    <option value="" disabled>Punjab Cities</option>
    <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
    
          
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
                    <option>--select Country--</option>
                   <option>Pakistan</option>
   
</select>
                </FormGroup>

</Col>

   </Row>
   



   </div>
< div className = "sett-1" >
  
  
<Row>
 <Col lg="9" md="7" sm="7">

 <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder = "Shop info"
                    rows="4"
                    type="textarea"
                    onChange={(e) => setshopinfo(e.target.value)}
                  ></Input>
                </div>
     </Col>
     </Row>


  
  
  </ div>


< div className = "sett-1" >
<Row>
 <Col lg="10" md="8" sm="8">

   </Col>
   <Col lg="2" md="2" sm="2">
<Button color="info"
                onClick={shopsubmit}
>Continue</Button>
   </Col>
   
   
   </Row>
</div>
          </Container>
        </div>
    )
}

export default Shopsetup




