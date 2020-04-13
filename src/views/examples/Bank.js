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
function Bank() {
    return (
        <div>
            <ColorNav />
 <div className = "  text-center" >
            <h2 className="title">Setup Your Account</h2>
            </div>

      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-5">
            {/* Credit card form tabs */}
            <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
              <li className="nav-item">
                <a data-toggle="pill" href="#nav-tab-card" className="nav-link active rounded-pill">
                  <i className="fa fa-credit-card" />
                  Credit Card
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="pill" href="#nav-tab-paypal" className="nav-link rounded-pill">
                  <i className="fa fa-paypal" />
                  Paypal
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="pill" href="#nav-tab-bank" className="nav-link rounded-pill">
                  <i className="fa fa-university" />
                  Bank Transfer
                </a>
              </li>
            </ul>
            {/* End */}
            {/* Credit card form content */}
            <div className="tab-content">
              {/* credit card info*/}
              <div id="nav-tab-card" className="tab-pane fade show active">
                <p className="alert alert-success">Some text success or error</p>
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="username">Full name (on the card)</label>
                    <input type="text" name="username" placeholder="Jason Doe" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <div className="input-group">
                      <input type="text" name="cardNumber" placeholder="Your card number" className="form-control" required />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted">
                          <i className="fa fa-cc-visa mx-1" />
                          <i className="fa fa-cc-amex mx-1" />
                          <i className="fa fa-cc-mastercard mx-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label><span className="hidden-xs">Expiration</span></label>
                        <div className="input-group">
                          <input type="number" placeholder="MM" name className="form-control" required />
                          <input type="number" placeholder="YY" name className="form-control" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                          <i className="fa fa-question-circle" />
                        </label>
                        <input type="text" required className="form-control" />
                      </div>
                    </div>
                  </div>
                  <button type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm</button>
                </form>
              </div>
              {/* End */}
              {/* Paypal info */}
              <div id="nav-tab-paypal" className="tab-pane fade">
                <p>Paypal is easiest way to pay online</p>
                <p>
                  <button type="button" className="btn btn-primary rounded-pill"><i className="fa fa-paypal mr-2" /> Log into my Paypal</button>
                </p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* End */}
              {/* bank transfer info */}
              <div id="nav-tab-bank" className="tab-pane fade">
                <h6>Bank account details</h6>
                <dl>
                  <dt>Bank</dt>
                  <dd> THE WORLD BANK</dd>
                </dl>
                <dl>
                  <dt>Account number</dt>
                  <dd>7775877975</dd>
                </dl>
                <dl>
                  <dt>IBAN</dt>
                  <dd>CZ7775877975656</dd>
                </dl>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* End */}
            </div>
            {/* End */}
          </div>
        </div>
      </div> 

< div className = "sett-1" >
<Row>

<Col lg="2" md="2" sm="2">

   </Col>
 <Col lg="6" md="2" sm="2">
<Button color="danger"
href="/shopsetup"
   onClick={"shopsetup"}
>Back</Button>
   </Col>


<Col lg="1" md="1" sm="1">
<Button color="link"

>Skip</Button>
   </Col>


   <Col lg="2" md="2" sm="2">
<Button color="info"
href="/bank"
   onClick={"bank"}

>Continue</Button>
   </Col>
   
   
   </Row>
</div>



        </div>
    )
}

export default Bank
