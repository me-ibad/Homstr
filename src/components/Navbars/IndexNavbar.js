import React from "react";
import { Link } from "react-router-dom";
import SignUp from "views/index-sections/SignUp.js";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
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
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            HOMSTR
            
            <NavbarBrand
              href="www.encodersoft.codes"
              target="_blank"
              id="navbar-brand"
            >
             
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              
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
            <Nav className="ml-auto" navbar>
                      
                      <NavItem>
                        
                        <NavLink
                      
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Message
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_send"
                          ></i>
                        </NavLink>
                      </NavItem>
                      
                      <NavItem>
                      
                        <NavLink
                          href="/profile"
                          onClick={"/profile"}
                        >
                          User
                          <i
                            aria-hidden={true}
                            className="now-ui-icons users_single-02"
                          ></i>
                        </NavLink>
                      </NavItem>
                     

                      <NavItem>
                      
                      <NavLink
                        href="/cart"
                        onClick={"cart"}
                      >
                        Cart
                        <i
                          aria-hidden={true}
                          className="now-ui-icons shopping_bag-16"
                        ></i>
                      </NavLink>
                    </NavItem>
                   
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                        >
                          Options
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem header tag="a">
                            More options Here
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Your Shop
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            History
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Address
                          </DropdownItem>
                          <div className="divider"></div>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <div className="divider"></div>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            LogOut
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>









          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
