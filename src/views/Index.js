import React from "react";
import { BrowserRouter, Route, Switch, Redirect,Link } from "react-router-dom";
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
//import Images from "./index-sections/Images.js";
//import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import LandingPage from "views/examples/LandingPage.js";
import Firstpage from "views/examples/Firstpage.js";
import Search from "views/examples/Search.js";
import Shopsetup from "views/examples/Shopsetup.js";
import Bank from "views/examples/Bank.js";
import Edituser from "views/examples/Edituser.js";
import Order from "views/examples/Order.js";
import Test from "./index-sections/Test.js";
import Productdetails from "views/examples/Productdetails.js";
import ShopProfile from "views/examples/ShopProfile.js";
import Product from "views/examples/Product.js";
import Cart from "views/examples/Cart.js";
import Contact from "views/examples/Contact.js";
import ShopPanel from "views/examples/ShopPanel.js";


import DefaultFooter from "components/Footers/TransparentFooter.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
   
    
    <BrowserRouter>
    
                <Switch>
     <Route path="/" exact component={LandingPage}   />
    <Route path="/Search" component={Search}   />
        <Route path="/Firstpage" component={Firstpage} />
<Route path="/shopprofile" component={ShopProfile}   />
<Route path="/cart" component={Cart}   />
<Route path="/product" component={Product}   />
<Route path="/contact" component={Contact}   />
<Route path="/shopsetup" component={Shopsetup}   />
        <Route path="/order" component={Order} />
<Route path="/bank" component={Bank}   />
        <Route path="/productdetails" component={Productdetails} />
        <Route path="/edituser" component={Edituser} />
        <Route path="/ShopPanel" component={ShopPanel} />

        <Route path="/test" component={Test} />
</Switch>
 <DefaultFooter /> 
      </BrowserRouter>




      // {/* <div className="wrapper">
      //   <IndexHeader />
      //   <div className="main">
      //    <Images />
      //     <BasicElements /> 
      //      <Navbars />
      //     <Tabs />
      //     <Pagination />
      //     <Notifications />
      //     <Typography />
      //     <Javascript />
      //     <Carousel />
      //     <NucleoIcons />
      //     <CompleteExamples />
      //     <SignUp />
      //     <Examples /> 
      //     <LandingPage  />
      //   </div>
      //   <DarkFooter />
      // </div> */}
  
  );
}

export default Index;
