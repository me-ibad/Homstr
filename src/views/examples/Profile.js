import React from 'react'
import Pcard from "components/Card/pcard.js";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
import Addproduct from "components/Product/Addproduct.js";
import {
    Card,
    CardHeader,
    CardBody,
    Modal,
    FormGroup,
    Label,
    ModalBody,
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
  } from "reactstrap";


  
function Profile() {
   const [iconPills, setIconPills] = React.useState("1");
   const [pills, setPills] = React.useState("1");
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
        <div>
            <ExamplesNavbar />
<LandingPageHeader />
            
            
        {/* Page Content */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <p className="category"></p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/img.jpg")}
                ></img>
              <h2 className="my-4">Shop Name</h2>
              
            <div class="ui left labeled button">
              <a class="ui right pointing basic label">2,048</a>
              <button class="ui icon button" tabindex="0">
                <i aria-hidden="true" class="fork icon"></i>
              </button>
            </div>

              <br/> <br/> <br/>
           <div className="button_cont" align="center">
             <a className="example_f" onClick={() => setModal1(true)} target="_blank" rel="nofollow">
             <span>Add Product</span></a></div>
            <FormGroup>
              <Label for="ShopType">Filter</Label>
              <br />
              <select class="ui dropdown ">
                <option>--select option--</option>

                <option>others</option>
              </select>
            </FormGroup>

<Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Add New Product</h4>
                </div>
                <ModalBody>
                  <Addproduct/>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="success" type="button">
                    Add Product
                  </Button>
                <Button color="primary" type="button">
                  Details
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






            </div>
            
            {/* /.col-lg-3 */}
            <div className="col-lg-9">
              <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src={require("assets/img/piz.jpg")} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src={require("assets/img/burger.jpg")} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src={require("assets/img/wings.jpg")} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>



              
                
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
                        <i className="now-ui-icons shopping_shop"></i>
                        Home
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
                        <i className="now-ui-icons ui-2_like"></i>
                        Reviews
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
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        About
                      </NavLink>
                    </NavItem>
                  </Nav>
                
                
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                     <br/>
                    <Row>
                <Col lg="4" md="4" sm="2">                
<Pcard/>
</Col>
 <Col lg="4" md="4" sm="2">                
<Pcard/>
</Col>

 <Col lg="4" md="4" sm="2">                
<Pcard/>
</Col>

 

</Row>




                
                {/* <div className="col-lg-4 col-md-6 mb-4">
                <Pcard/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
               <Pcard/>
                </div>
              


                 <div className="col-lg-4 col-md-6 mb-4">
                <Pcard/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Pcard/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Pcard/>
                </div>  */}
             

             <br/>
 <div className="row">
                <div className="col-lg-5 col-md-6 mb-6">
</div>
<div className="col-lg-4 col-md-6 mb-4">
      <Pagination>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-left"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-right"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>

</div>
</div>

                    </TabPane>
                   
                    <TabPane tabId="iconPills3">
                     <br/>
      <div className="container">
        <div className="row">
          < div className = "col-lg-5 col-md-6 mb-4" >
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
          < div className = "col-lg-5 col-md-6 mb-4" >
            <h4>Rating breakdown</h4>
            <div className="pull-left">
              <div className="pull-left" style={{width: '35px', lineHeight: 1}}>
                <div style={{height: '9px', margin: '5px 0'}}>5 <span className="glyphicon glyphicon-star" /></div>
              </div>
              <div className="pull-left" style={{width: '180px'}}>
                <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={5} style={{width: '1000%'}}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{marginLeft: '10px'}}>1</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{width: '35px', lineHeight: 1}}>
                <div style={{height: '9px', margin: '5px 0'}}>4 <span className="glyphicon glyphicon-star" /></div>
              </div>
              <div className="pull-left" style={{width: '180px'}}>
                <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={4} aria-valuemin={0} aria-valuemax={5} style={{width: '80%'}}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{marginLeft: '10px'}}>1</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{width: '35px', lineHeight: 1}}>
                <div style={{height: '9px', margin: '5px 0'}}>3 <span className="glyphicon glyphicon-star" /></div>
              </div>
              <div className="pull-left" style={{width: '180px'}}>
                <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={5} style={{width: '60%'}}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{marginLeft: '10px'}}>0</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{width: '35px', lineHeight: 1}}>
                <div style={{height: '9px', margin: '5px 0'}}>2 <span className="glyphicon glyphicon-star" /></div>
              </div>
              <div className="pull-left" style={{width: '180px'}}>
                <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={2} aria-valuemin={0} aria-valuemax={5} style={{width: '40%'}}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{marginLeft: '10px'}}>0</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{width: '35px', lineHeight: 1}}>
                <div style={{height: '9px', margin: '5px 0'}}>1 <span className="glyphicon glyphicon-star" /></div>
              </div>
              <div className="pull-left" style={{width: '180px'}}>
                <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={1} aria-valuemin={0} aria-valuemax={5} style={{width: '20%'}}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{marginLeft: '10px'}}>0</div>
            </div>
          </div>			
        </div>			
        <div className="row">
          < div className = "col-lg-10 col-md-8 mb-6" >
            <hr />
            <div className="review-block">
              <div className="row">
                <div className="col-md-3">
                  <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
                  <div className="review-block-name"><a href="#">nktailor</a></div>
                  <div className="review-block-date">January 29, 2016<br />1 day ago</div>
                </div>
                <div className="col-md-9">
                  <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>
                  <div className="review-block-title">this was nice in buy</div>
                  <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
                  <div className="review-block-name"><a href="#">nktailor</a></div>
                  <div className="review-block-date">January 29, 2016<br />1 day ago</div>
                </div>
                <div className="col-sm-9">
                 <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>
                  <div className="review-block-title">this was nice in buy</div>
                  <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
                  <div className="review-block-name"><a href="#">nktailor</a></div>
                  <div className="review-block-date">January 29, 2016<br />1 day ago</div>
                </div>
                <div className="col-sm-9">
                 <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>
                  <div className="review-block-title">this was nice in buy</div>
                  <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <h2> Shop Name</h2>
                      <h3> Owner Name</h3>
                       <h4> Address</h4>
                 </TabPane>
                  </TabContent>
                
              





              
              {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
      


     


    
        </div>
    )
}

export default Profile



