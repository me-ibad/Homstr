/*eslint-disable*/
import React, { useState } from 'react';

// reactstrap components
import { Container,InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  
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


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);



  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/main.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            
          <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
        <Button color="info" size="lg">
        Find Restaurants
              </Button>
        </InputGroupAddon>
      </InputGroup>


          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
