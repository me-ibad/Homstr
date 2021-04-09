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

function pcard(props) {






  const cartfun = async(uid,pid)  => {

    var myModule = require('views/database');
      const response = await fetch(myModule.servername + "/api/users/addtocart", {
          method: "post",
          headers: {
              "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: `uid=${JSON.parse(localStorage.getItem("tokenhomstr"))._id}&pid=${pid}`,

          

      });
      var swt = await response.json();
     
  



  }












  return (
    <div>
  {props.loading ? (
    <h2>Loading...</h2>
  )  : (
    props.post.map((item) => {     

    return (

      <Col lg="3" md="6" sm="6" xm="6"> 
        <div>
            

        <section class="cards">
          <article class=" card--1">

           
            <a href="/product" >
              <img class="card_link" src={require("E:/react projects/Homstr/Back-end/public/"+item.productimage[0])} />
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
              
    <h3 class="card__title">{item.pname}</h3>
              
              <span class="card__by">by <a href="/profile"
                onClick={"/profile"} class="card__author" title="author"> {item.uplodername}</a></span>
            <div className="pcard_styl-btn">
              

                <button onClick={()=>cartfun(item.uploderid,item._id)}   class="ui vertical animated button">
                <div class="hidden content">Shop</div>
                <div class="visible content"><i aria-hidden="true" class="shop icon"></i></div>
              </button>
            </div>
              <br>
              </br>
    <p className="chili-pepper-text mb-0"><a class="ui label">{item.price}</a></p>
              
             
            </div>
          </article>


        </section>
        </div>

        </Col>


    )
  }))} </div>)

}

export default pcard





