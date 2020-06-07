import React from 'react'
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
import Slider from "nouislider";
function Filter() {

 const [leftFocus, setLeftFocus] = React.useState(false);
 const [rightFocus, setRightFocus] = React.useState(false);
 React.useEffect(() => {
    
     if (
         !document.getElementById("sliderDouble").classList.contains("noUi-target")
     ) {
         Slider.create(document.getElementById("sliderDouble"), {
             start: [20, 80],
             connect: [false, true, false],
             step: 1,
             range: {
                 min: 0,
                 max: 100
             }
         });
     }
 });
    
    return (

        <div>

        <Row>
          

          <Col lg="3" md="2" sm="1">
            < div className="radioset" >
              <Label for="ShopType">Filter</Label>
            </div>
          </Col>

          <Col lg="3" md="3" sm="6">
            < div className="radioset leftst" >
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  By Shop
                </Label>
              </FormGroup>
            </div>
          </Col>

          <Col lg="3" md="3" sm="6">
            < div className="radioset leftst" >
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input

                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  By Product
                </Label>
              </FormGroup>
            </div>

          </Col>
        </Row>
<br></br>

       <Row>
        <Col lg="9" md="9" sm="12">
            <p className="category">Budget</p>
            
            <div className="slider slider-primary" id="sliderDouble"></div>
        </Col>

       </Row>
       <br/>
        <p className="category">Offer</p>
<Row>
        <Col lg="6" md="6" sm="6">
           
            <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Free delivery 
                </Label>
              </FormGroup>
        </Col>
 <Col lg="6" md="6" sm="4">
      
            <FormGroup check>
                <Label check>
                  <Input  type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  New Deals
                </Label>
              </FormGroup>
        </Col>
       </Row>
<br/>
 <Row>
        <Col lg="9" md="9" sm="12">
            <p className="category">Category</p>
            <FormGroup>
     
              <select class="ui dropdown dropstyl ">
          <option>All</option>
          <option>Groceries</option>
          <option>Health/Medicine</option>
          <option>Clothes</option>
          <option>Electronics</option>
           <option>Foods/Drinks</option>
           <option>Cosmetics</option>
           <option>Fruit/Vegitable</option>
       </select>
      </FormGroup>
          
        </Col>

       </Row>

 <br/>
        <p className="category">Shot</p>
<Row>
        <Col lg="6" md="6" sm="6">
           
            <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  4+ rating
                </Label>
              </FormGroup>
        </Col>
 <Col lg="6" md="6" sm="4">
      
            <FormGroup check>
                <Label check>
                  <Input  type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  New Product
                </Label>
              </FormGroup>
        </Col>
       </Row>


<br/>
      
<Row>
<Col lg="6" md="6" sm="6">
</Col>        
<Col lg="2" md="6" sm="6">
<Button color="success">Apply</Button>
</Col>

</Row>
        </div>
    )
}

export default Filter
