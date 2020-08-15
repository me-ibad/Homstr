import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// reactstrap components
import TextField from '@material-ui/core/TextField';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Row,
  Col,
  Navbar,
  NavItem,
  NavLink,
  Modal,
  ModalBody,
  Button,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import GoogleLogin from "react-google-login";
import { setConstantValue } from "typescript";

function ExamplesNavbar() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [nameinErr, setnameinErr] = useState("");
  const [passinErr, setpassinErr] = useState("");

  const data = new FormData();
  const [namein, setnamein] = useState("");
  const [passwordin, setpasswordin] = useState("");

  const [nameup, setnameup] = useState("");
  const [passwordup, setpasswordup] = useState("");
  const [nameupErr, setnameupErr] = useState("");
  const [passupErr, setpassupErr] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [url, seturl] = useState("");
  const [userimg, setuserimg] = useState("");

  const [validate, setvaldate] = useState("2");
  const [validate2, setvaldate2] = useState("0");
  const onSubmit = (data) => {
    console.log(data);
  };

  var myModule = require("views/database");

  const signinsubmit = async () => {

    // if (namein == "") {
    //   setnameinErr("Enter Email");
    //   setvaldate2("1");
    // }
    // else if (!namein.includes("@")) {
    //   setnameinErr("Enter Correct Email");
    //   setvaldate2(1);
    //   alert('this run')
    // }

    // if (passwordin == "") {
    //   setpassinErr("Enter password");
    //   setvaldate2(1);
    // }

    // if (validate2=="0") {
    //   alert(validate2)
   
    const response = await fetch(myModule.servername + "/api/users/signin", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `namein=${namein}&passwordin=${passwordin}`,
    });

        var swt=await response.json();
if(swt=="yes"){
  localStorage.setItem("tokenhomstr",swt);
  window.location = "/edituser"
}
  else{
    alert('account not found')
  }    


    }

//  }
  const responseGoogle =async (response) => {
   //// setName(response.profileObj.name);
    setnameup(response.profileObj.email);
    setfname(response.profileObj.givenName);
    setlname(response.profileObj.familyName);
    setuserimg(response.profileObj.imageUrl);

    console.log(response);
   ////document.getElementById("showemail").innerHTML = response.profileObj.email;
   
  ///  setUrl(response.profileObj.imageUrl);

    // if (response.profileObj.email != '') {
    //   setcheck("1");
    // }

    const response1 = await fetch(myModule.servername + "/api/users/signup", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `nameup=${response.profileObj.email}&fname=${response.profileObj.givenName}&lname=${response.profileObj.familyName}&userimg=${response.profileObj.imageUrl}&googleid=${response.profileObj.googleId}`,
    });

    var swt = await response1.json();

    console.log(response);

  };


  const responseGoogle1 = async (response) => {
    //// setName(response.profileObj.name);
    setnameup(response.profileObj.email);
    setfname(response.profileObj.givenName);
    setlname(response.profileObj.familyName);
    setuserimg(response.profileObj.imageUrl);

    console.log(response);
    ////document.getElementById("showemail").innerHTML = response.profileObj.email;

    ///  setUrl(response.profileObj.imageUrl);

    // if (response.profileObj.email != '') {
    //   setcheck("1");
    // }

    const response1 = await fetch(myModule.servername + "/api/users/signingoogle", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `nameup=${response.profileObj.email}&fname=${response.profileObj.givenName}&lname=${response.profileObj.familyName}&userimg=${response.profileObj.imageUrl}&googleid=${response.profileObj.googleId}`,
    });

    var swt = await response1.json();
 
    console.log("sassssssssssssssssss");
    console.log(swt);
    if (swt!= null) {
      console.log(swt);
      localStorage.setItem("tokenhomstr", JSON.stringify(swt));
   
   window.location = "/edituser"
    }
    else {
      alert('account not found');
    }  
    console.log(response1);

  };



//-----------------------------------------sign up submit------------------------------------------------



  const signupsubmit = async () => {
    alert('register')
  //     if (nameup == ""){
  //    setnameupErr("Enter Email");
  //       setvaldate("1");
  //       console.log(setvaldate);
          
        
  //     }
  //  else  if (!nameup.includes("@")) {
  //     setnameupErr("Enter Correct Email");
  //       setvaldate("1");
  //      alert('this run')
  //    }

  //  if (passwordup == ""){
  //      setpassupErr("Enter password");
  //    setvaldate("1");
    
  //    }
    
  //    if (validate==="2"){
  //      alert(validate+nameup+passwordup);
      

      const response = await fetch(myModule.servername + "/api/users/signup", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `nameup=${nameup}&passwordup=${passwordup}`,
      });
      
    }
 
    //}
    
    

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });





  return (
    <>


    {/* Sign in */}






      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal1(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">Sign In</h4>
        </div>
        <ModalBody>
          <div className="signin-styl">
            <Row>
              <Col lg="1" md="1" sm="1" xm="1"></Col>
              <Col lg="4" md="4" sm="4" xm="4">
            <GoogleLogin

              clientId="1093297451164-6d3mfddu3947dnf4ov4g87gjnlvcr778.apps.googleusercontent.com"
              render={renderProps => (
                ///   <li class="li1">  <a href="#" class="mylink">   <i class="fab fa-google">         </i> </a> </li>
                //  <button onClick={renderProps.onClick} style={}>This is my custom Google button</button>
                <button class="ui google plus button goosizeinc" onClick={renderProps.onClick}   >
                  <i aria-hidden="true" class="google icon"></i>
    Google
                </button>
              )}
              onSuccess={responseGoogle1}
              onFailure={responseGoogle1}
              cookiePolicy={"single_host_origin"}
            >

            </GoogleLogin>
              </Col>
              <Col lg="1" md="1" sm="1" xm="1"><span className="dottransty">.</span></Col>
              <Col lg="4" md="4" sm="1" xm="1">
                
                <button class="ui facebook button fbsizeinc ">
                  <i aria-hidden="true" class="facebook icon"></i>
    Facebook
  </button>
                
                </Col>



            </Row>
            <br/>
            <Row>
              <Col lg="2" md="4"sm="4" xm="4"></Col>
              <Col lg="8" md="6" sm="6" xm="6">
                <TextField
                  className="sign-textfiel"
                  id="outlined-basic" label="Email" variant="outlined"
                  onChange={(e) => setnamein(e.target.value)} />
                

                <span class="errorstyl">{nameinErr}<i aria-hidden="true" class="icon"></i></span> 
            </Col>
            </Row>
            
            <Row>
              <Col lg="2" md="2" sm="2" xm="2"></Col>
              <Col lg="8" md="4" sm="6" xm="6">
                <TextField
                  className="sign-textfiel topmargsign"
                  id="outlined-basic" label="Password" variant="outlined" type="password"
                  onChange={(e) => setpasswordin(e.target.value)} />
                <span class="errorstyl">{passinErr}<i aria-hidden="true" class="icon"></i></span> 
</Col>
</Row>
<br/>
            <div className="send-button">
              <Button
                block
                className="btn-round"
                color="info"
                
                onClick={signinsubmit}
                size="lg"
              >
                Log in
                    </Button>
            </div>
          </div>
        </ModalBody>
        <div className="modal-footer">
          
       
        </div>
      </Modal>





    {/* Sign Up */}

      <Modal isOpen={modal2} toggle={() => setModal2(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal2(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">Sign Up</h4>
        </div>
        <ModalBody>
          <div>

            <GoogleLogin

              clientId="1093297451164-6d3mfddu3947dnf4ov4g87gjnlvcr778.apps.googleusercontent.com"
              render={renderProps => (
                ///   <li class="li1">  <a href="#" class="mylink">   <i class="fab fa-google">         </i> </a> </li>
                //  <button onClick={renderProps.onClick} style={}>This is my custom Google button</button>
                <li class="li1">  <a href="#" class="mylink" onClick={renderProps.onClick} >   <i class="fab fa-google">         </i> </a> </li>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            >



            </GoogleLogin>
            <Row>
              <Col lg="3" md="4" sm="6" xm="6"></Col>
              <Col lg="4" md="4" sm="6" xm="6">
                <div class="ui labeled input">
                  {/* <p id="showemail"></p> */}
                  <div class="ui label label"><i aria-hidden="true" class="user circle icon"></i></div>
                  <input type="text" placeholder="user name" onChange={(e) => setnameup(e.target.value)} />
                </div>
{validate=="1" ? <><span class="errorstyl">Enter correct email<i aria-hidden="true" class="icon"></i></span></>:null}
                
              </Col>
            </Row>

            <Row>
              <Col lg="3" md="4" sm="6" xm="6"></Col>
              <Col lg="4" md="4" sm="6" xm="6">
                <div class="ui labeled input">
                  <div class="ui label label"><i aria-hidden="true" class="text height icon"></i></div>
                  <input type="password" placeholder="password" onChange={(e) => setpasswordup(e.target.value)} />
                </div>
                <span class="errorstyl">{passupErr}<i aria-hidden="true" class="icon"></i></span>
              </Col>
            </Row>
 <Row>
              <Col lg="3" md="4" sm="6" xm="6"></Col>
              <Col lg="5" md="4" sm="6" xm="6">

                <Button color="info" class="subtnsty" size="lg" onClick={signupsubmit}>Sign Up</Button>
              </Col>
              
              </Row>

          </div>
        </ModalBody>
        <div className="modal-footer">
        
          
        </div>
      </Modal>

{/* navbar setting */}


      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href=""
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
              <span className="brandnamsty">HOMSTR</span>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Coded by Ibad
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
             
             
                         
              <NavItem>
                <NavLink  className="signinstyl" onClick={() => setModal1(true)} >
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="signinstyl" onClick={() => setModal2(true)}>
                  Sign Up
                </NavLink>
              </NavItem>
              
              
                          
              
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
