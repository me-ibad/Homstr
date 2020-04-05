import React from 'react'
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
function pcard() {
    return (
        <div>
            

            <div class="card mb-4 ">
    <div class="view overlay">
     
      <img  src={require("assets/img/pizza.jpg")} />
     <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body p-3">
    <a  href="/product"
            onClick={"product"}
            
            
            >
      
      <h5 className="card-title font-weight-bold pointer fuchsia-rose-text mb-0 pointer">
       

        Product name
        </h5></a>
        <a  href="/profile"
            onClick={"profile"}
            
            
            >
      <p className="pointer aqua-sky-text mb-0 ">Shop Name</p>
      </a>
      <ul className="list-unstyled list-inline my-2">
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
        <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
      </ul>

      
      <p className="chili-pepper-text mb-0">100 Rs</p>

      <Button className="butt" color="info"
      href="/cart"
      onClick={"cart"}
      >
      <i
                          aria-hidden={true}
                          className="now-ui-icons shopping_cart-simple"
                        ></i>
        Cart</Button>
    </div>
  </div>


        </div>
    )
}

export default pcard





