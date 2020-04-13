import React from 'react'
import MyNavbar from "views/index-sections/MyNavbar.js";
import {
    
    Navbar
} from "reactstrap";
function ColorNav() {
    return (
        <div>
           <Navbar className="bg-info" expand="lg">
             <MyNavbar/>
            </Navbar> 


        </div>
    )
}

export default ColorNav


