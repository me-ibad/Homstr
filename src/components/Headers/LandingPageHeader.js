import React from "react";

// reactstrap components
import { Button, Container,Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,Row,NavLink,
  Col } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);


  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
           backgroundImage:
                        "url(" + require("assets/img/main2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
         
         
            
          <div class="s130">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            
          <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>

            <input id="search" type="text" placeholder="What are you looking for?" />
          </div>
          <div className="input-field second-wrap">
            <button className="btn-search" type="button"
            
            
            >
              <NavLink
            href="/search"
            onClick={"search"}
            ><span class="stext">
              SEARCH </span></NavLink></button>
          </div>
        </div>
        <span className="info">ex. Grocery, Medicine, Fruit & Vegetable</span>
      </form>
    </div>
            
            
             
          {/* <Col lg="8" sm="10">
           
          <InputGroup className="input-group-focus" >
                  <Input className="inputname"
                    placeholder="Search Here....."
                    type="text"
                    onFocus={() => setRightFocus(true)}
                    onBlur={() => setRightFocus(true)}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_zoom-bold"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                </Col> */}
       
          </Container>
        
        </div>
      </div>

    

    </>
  );
}

export default LandingPageHeader;
