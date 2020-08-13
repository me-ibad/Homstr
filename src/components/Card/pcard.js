import React, { useState, useEffect } from "react";


import {
    
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
  Modal,
  ModalBody,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
  } from "reactstrap";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function pcard() {

  return (
    <>
    
        <div>
       

        <section class="cards">
          <article class=" card--1">

           
            <a href="/product" class="card_link">
              <img src={require("assets/img/cake.jpeg")} />
            </a>
            
<div className="starreview">

              <ul className="list-unstyled list-inline my-2">
                <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                <li className="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                <li className="list-inline-item mx-0"><i class="fas fa-star-half-alt mimosa-text"></i></li>
              </ul>
</div>





<div className="addfav">

              <i aria-hidden="true" class="like icon"></i>

</div>


            <div class="card__info">
              
              <h3 class="card__title">Crisp Spanish</h3>
              
              <span class="card__by">by <a href="/profile"
                onClick={"/profile"} class="card__author" title="author">Celeste Mils</a></span>
                <div className="pcard_styl-btn">
                <a href="/productdetails"><EditIcon /></a>
                &nbsp;&nbsp;&nbsp;
                <a href="" ><DeleteIcon /></a>
              
              {/* <button class="ui vertical animated button">
                <div class="hidden content">Shop</div>
                <div class="visible content"><i aria-hidden="true" class="shop icon"></i></div>
              </button> */}
              </div>
              <br>
              </br>
              <p className="chili-pepper-text mb-0"><a class="ui label">$100000.00</a></p>
              
             
            </div>
          </article>


        </section>
        </div>
        </>
    )
}

export default pcard





