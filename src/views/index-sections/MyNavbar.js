import React from 'react'
import {
    Button,
    Collapse,
     Modal,
     ModalBody,
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
function MyNavbar() {
 const [modal1, setModal1] = React.useState(false);
 const [modal2, setModal2] = React.useState(false);

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
        
            <Container>
<Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal2(false)}
                isOpen={modal2}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div>
                <ModalBody>
                  <h2>Coming Soon!</h2>
                </ModalBody>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>







          <div className="navbar-translate">
            
          <span className="brandnamsty">HOMSTR</span>
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
                          onClick={() => setModal2(true)}
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
                <img
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  class="ui avatar image"
                />
                User
                         
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
                            href="/shopsetup"
                            onClick={"shopsetup"}
                          >
                            Your Shop
                          </DropdownItem>
                          <DropdownItem
                            href=""
                            onClick={""}
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
       
    )
}

export default MyNavbar
