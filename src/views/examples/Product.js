import React from 'react'
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
import {
   
    Label,
     Input,
     InputGroupAddon,
     InputGroupText,
     InputGroup,
    FormGroup,
     Modal,
     CardBody,
     Button,
     NavItem,
     NavLink,
     Nav,
     TabContent,
     TabPane,
    Row,
    Col
  } from "reactstrap";

function Product() {
 const [iconPills, setIconPills] = React.useState("1");
 const [pills, setPills] = React.useState("1");


    return (
        <div>
             
<ExamplesNavbar />
<LandingPageHeader />
             <div class="container1">
		<div class="card1">
			<div class="container-fliud">
				<div class="wrapper row">
					< div class = "preview col-md-6  col-lg-6" >
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={require("assets/img/jacket.jpg")} /></div>
						  <div class="tab-pane" id="pic-2"><img src={require("assets/img/jacket1.jpg")} /></div>
						  <div class="tab-pane" id="pic-3"><img src={require("assets/img/jacket2.jpg")} /></div>
						  <div class="tab-pane" id="pic-4"><img src={require("assets/img/jacket3.jpg")} /></div>
						  <div class="tab-pane" id="pic-5"><img src={require("assets/img/jacket4.jpg")} /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={require("assets/img/jacket.jpg")} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={require("assets/img/jacket1.jpg")} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={require("assets/img/jacket2.jpg")} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={require("assets/img/jacket3.jpg")} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={require("assets/img/jacket4.jpg")} /></a></li>
						</ul>
						
					</div>




					
					< div class = " col-md-6 col-lg-6" >
						 
          
            <h2 class="name">
              Product Name Title Here 
			  <br/>
              <small>Product by <a href="">Adeline</a></small>
			  </h2>
			  <Row>
          <Col lg="2" md="2" sm="4" >
        <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>
</Col>

 <Col lg="4" md="4" sm="4" >
 <span class="fa fa-2x"><h5>(109) Votes</h5></span>  
              

	 </Col>
</Row>
<br/>
<Row>
<Col lg="6" md="6" sm="4" >

<h2>1090 Rs</h2>

 <div class="certified">
              <ul>
                <li><a href="javascript:void(0);">Delivery time<span>7 Working Days</span></a></li>
                <li><a href="javascript:void(0);">Certified<span>Quality Assured</span></a></li>
              </ul>
            </div>
	</Col>
</Row>

<Row>

<Col lg="2" md="2" sm="2" >

<FormGroup className="pinp">
                  <Input
                    defaultValue="1"
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
  </Col>


<Col lg="6" md="6" sm="4" >
<Button className="btn-round" color="danger" type="button">
                <i className="now-ui-icons ui-1_simple-add"></i>
                Add To Cart
              </Button>

  </Col>
  </Row>
</div>

                <Row> 
                  <Col lg="3" md="3" sm="3" xm="3" >

                    </Col>
                  <Col lg="8" md="8" sm="8" xm="8" >

                  
  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons files_paper"></i>
                        Description
                      </NavLink>
                    </NavItem>
                   
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons design_bullet-list-67"></i>
                        Specification
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_like"></i>
                        Reviews
                      </NavLink>
                    </NavItem>
                  </Nav>

<TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        
                        the nucleus.
                      </p>
                    </TabPane>
                    
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the 
                        because I got the answers. I understand culture. I am
                        the nucleus.
						I think that’ s a responsibility that I have, to push
						possibilities, to show people, this is the level that
						things could be at.So when you get something that has
						the name Kanye West on it, it’ s supposed to be pushing
						the
						because I got the answers.I understand culture.I am
						the nucleus.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                    <br />
                    <div className="container">
                      <div className="row">
                        < div className="col-lg-5 col-md-6 mb-4" >
                          <div className="rating-block">
                            <h4>Average user rating</h4>
                            <h2 className="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
                            <ul className="list-unstyled list-inline my-2">
                              <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                              <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                              <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                              <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                              <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
                            </ul>
                          </div>
                        </div>
                        < div className="col-lg-5 col-md-6 mb-4" >
                          <h4>Rating breakdown</h4>
                          <div className="pull-left">
                            <div className="pull-left" style={{ width: '35px', lineHeight: 1 }}>
                              <div style={{ height: '9px', margin: '5px 0' }}>5 <span className="glyphicon glyphicon-star" /></div>
                            </div>
                            <div className="pull-left" style={{ width: '180px' }}>
                              <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={5} style={{ width: '1000%' }}>
                                  <span className="sr-only">80% Complete (danger)</span>
                                </div>
                              </div>
                            </div>
                            <div className="pull-right" style={{ marginLeft: '10px' }}>1</div>
                          </div>
                          <div className="pull-left">
                            <div className="pull-left" style={{ width: '35px', lineHeight: 1 }}>
                              <div style={{ height: '9px', margin: '5px 0' }}>4 <span className="glyphicon glyphicon-star" /></div>
                            </div>
                            <div className="pull-left" style={{ width: '180px' }}>
                              <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={4} aria-valuemin={0} aria-valuemax={5} style={{ width: '80%' }}>
                                  <span className="sr-only">80% Complete (danger)</span>
                                </div>
                              </div>
                            </div>
                            <div className="pull-right" style={{ marginLeft: '10px' }}>1</div>
                          </div>
                          <div className="pull-left">
                            <div className="pull-left" style={{ width: '35px', lineHeight: 1 }}>
                              <div style={{ height: '9px', margin: '5px 0' }}>3 <span className="glyphicon glyphicon-star" /></div>
                            </div>
                            <div className="pull-left" style={{ width: '180px' }}>
                              <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={5} style={{ width: '60%' }}>
                                  <span className="sr-only">80% Complete (danger)</span>
                                </div>
                              </div>
                            </div>
                            <div className="pull-right" style={{ marginLeft: '10px' }}>0</div>
                          </div>
                          <div className="pull-left">
                            <div className="pull-left" style={{ width: '35px', lineHeight: 1 }}>
                              <div style={{ height: '9px', margin: '5px 0' }}>2 <span className="glyphicon glyphicon-star" /></div>
                            </div>
                            <div className="pull-left" style={{ width: '180px' }}>
                              <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={2} aria-valuemin={0} aria-valuemax={5} style={{ width: '40%' }}>
                                  <span className="sr-only">80% Complete (danger)</span>
                                </div>
                              </div>
                            </div>
                            <div className="pull-right" style={{ marginLeft: '10px' }}>0</div>
                          </div>
                          <div className="pull-left">
                            <div className="pull-left" style={{ width: '35px', lineHeight: 1 }}>
                              <div style={{ height: '9px', margin: '5px 0' }}>1 <span className="glyphicon glyphicon-star" /></div>
                            </div>
                            <div className="pull-left" style={{ width: '180px' }}>
                              <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={1} aria-valuemin={0} aria-valuemax={5} style={{ width: '20%' }}>
                                  <span className="sr-only">80% Complete (danger)</span>
                                </div>
                              </div>
                            </div>
                            <div className="pull-right" style={{ marginLeft: '10px' }}>0</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        < div className="col-lg-10 col-md-8 mb-6" >
                          <hr />
                              <div class="ui comments">
                                <div class="comment">
                                  <a class="avatar"><img src="/images/avatar/small/joe.jpg" /></a>
                                  <div class="content">
                                    <div class="author">Tom Lukic</div>
                                    <div class="text">
                                      This will be great for business reports. I will definitely download this.
      </div>
                                    <div class="actions">
                                      <ul className="list-unstyled list-inline my-2">
                                        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                                        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                                        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                                        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                                        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                      </div>
                    </div>
                    </TabPane>
                  </TabContent>

                  </Col>

                </Row>



					
				</div>
			</div>
		</div>
	</div>



         
        </div>
    )
}

export default Product


