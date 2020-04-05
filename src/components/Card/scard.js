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
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from "reactstrap";

function scard() {
    return (
        <div>
                  {/* Card */}
      <div className="card-landing">
        {/* Card image */}
        <div className="view overlay">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap" />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>
        {/* Card content */}
        <div className="card-body">
          {/* Title */}
          <h4 className="card-title font-weight-bold"><a>Shop Name</a></h4>
          {/* Data */}
          <ul className="list-unstyled list-inline rating1 mb-0">
            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text"> </i></li>
            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
            <li className="list-inline-item"><i className="fas fa-star-half-alt amber-text" /></li>
            <li className="list-inline-item"><p className="text-muted">4.5 (413)</p></li>
          </ul>
          <p className="mb-2">$ • Category</p>
          {/* Text */}
          <p className="card-text">Some quick example text to build on shop and its product description content.</p>
          
         
          {/* Button */}
          <Button color="info" type="button"
           href="/profile"
           onClick={"profile"}
          >
                Visit
              </Button>
        </div>
      </div>
        </div>
    )
}

export default scard
