import React from "react";
import "assets/demo/searchbar.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// reactstrap components
import { Button, Container,Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,Row,NavLink,
  Col } from "reactstrap";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
// core components

function LandingPageHeader(props) {
  const classes = useStyles();
  const [Keywords, setkeywords] = React.useState('');

  const handleChange = (event) => {
   /// setAge(event.target.value);
    props.setsearchcategory(event.target.value);
  };


  const buttonhandler = () => {
    props.setsearchtext(Keywords)
   };

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
            <div class="s003">
              <form>
                <div class="inner-form">
                  <div class="input-field first-wrap">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        
                        onChange={handleChange}
                      >
                        <MenuItem value={"Grocery"}>Grocery</MenuItem>
                        <MenuItem value={"Medicine"}>Medicine</MenuItem>
                        <MenuItem value={"Garments"}>Garments</MenuItem>
                        <MenuItem value={"Foods"}>Foods</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                        <MenuItem value={"Cosmatics"}>Cosmatics</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div class="input-field second-wrap">
                    <input id="search" type="text"   onChange={(e) => setkeywords(e.target.value)}    placeholder="Enter Keywords?" />
                  </div>
                  <div class="input-field third-wrap">
                    <button class="btn-search" type="button" onClick={buttonhandler}>
                      <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

         
            
        
        <span className="info">ex. Grocery, Medicine, Garments, Food, Electronics & Cosmatics</span>
     
            
            
             
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
