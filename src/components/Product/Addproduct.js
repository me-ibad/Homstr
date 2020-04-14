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

function Addproduct() {
    return (
        <div>
              <Container>
            <div className = "  " >
            
            <img
                  alt="..."
                  className="rounded img-raised widthig"
                  src={require("assets/img/no.jpg")}
                ></img>

                
                  <img
                  alt="..."
                  className="rounded img-raised widthig"
                  src={require("assets/img/no.jpg")}
                ></img>
                
 <img
                  alt="..."
                  className="rounded img-raised widthig"
                  src={require("assets/img/no.jpg")}
                ></img>
                 <img
                  alt="..."
                  className="rounded img-raised widthig"
                  src={require("assets/img/no.jpg")}
                ></img>
                 <img
                  alt="..."
                  className="rounded img-raised widthig"
                  src={require("assets/img/no.jpg")}
                ></img>



                
            </div>
            
            
            
            
            <Row>
   <Col md="4"  lg="4" sm="4"></Col>
< Col md="6" lg="4" sm="6" >
              <label for="img">Select image:</label>
                 <Input  type="file"  accept="image/*" />
            </ Col>
            
            <Col md="2"> </Col>
           </Row>
<br/>
             <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Product Name<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>



<Col lg="6" md="6" sm="6">
   <Label for="ShopName">Price<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>



<Col lg="6" md="6" sm="6">
   <Label for="ShopName">Discount<span > (optional)</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

              </Row>

<Row>
 <Col lg="9" md="6" sm="6">

 <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder = "Add Description"
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
     </Col>
     </Row>


              </Container>
        </div>
    )
}

export default Addproduct
