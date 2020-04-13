import React from 'react'
import Card from "components/Card/pcard.js";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/TransparentFooter.js";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
  } from "reactstrap";

  
function Profile() {
    return (
        <div>
            <ExamplesNavbar />
<LandingPageHeader />
            <div>
            
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
              <div className="list-group">
                <a href="" className="list-group-item active">Products</a>
                <a href="" className="list-group-item">Reviews</a>
                <a href="" className="list-group-item">About Us</a>
              </div>

              <br/> <br/> <br/>
           <div className="button_cont" align="center">
             <a className="example_f" href="add-website-here" target="_blank" rel="nofollow">
             <span>Add Product</span></a></div>
           
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
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  
<Card/>


                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Card/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
               <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Card/>
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
      </div>


      <div className="row">
                <div className="col-lg-6 col-md-6 mb-6">
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


    
        </div>
    )
}

export default Profile



