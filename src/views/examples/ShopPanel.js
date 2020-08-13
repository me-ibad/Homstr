import React from 'react';
import Card2 from "components/Card/pcard.js";
import ColorNav from "components/Navbars/ColorNav.js";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ListAltIcon from '@material-ui/icons/ListAlt';

import {
    Button,
    Label,
    Alert,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


function ShopPanel() {
    const classes = useStyles();
    return (
        <div>
            
            <ColorNav/>
     <Container>
         <Row>
             <Col lg="3" md="3" sm="6" xs="6">
                        <div className={classes.root}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button onClick={() => window.location = "/shopsetup"}>
                                    <ListItemIcon>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Edit Shop" />
                                </ListItem>
                                <ListItem button onClick={() => window.location = "/productdetails"}>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Product" />
                                </ListItem>
                                <ListItem button onClick={() => window.location = "/order"}>
                                    <ListItemIcon>
                                        <ListAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Orders" />
                                </ListItem>
                            </List>
                            <Divider />
                            
                        </div>
             </Col>
                    <Col lg="2" md="3" sm="6" xs="6"></Col>
                    <Col lg="2" md="3" sm="6" xs="6">
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/julie.jpg")}
                        ></img>
                        
                        </Col>

         </Row>
                <br /><br />
         <Row>
                    <Col lg="3" md="6" sm="6" xm="6">
                        <Card2 />
                    </Col>
                    <Col lg="3" md="6" sm="6" xm="6">
                        <Card2 />
                    </Col>
                    <Col lg="3" md="6" sm="6" xm="6">
                        <Card2 />
                    </Col>
                    <Col lg="3" md="6" sm="6" xm="6">
                        <Card2 />
                    </Col>
         </Row>
     </Container>
            <br /><br /><br/>
        </div>
    )
}

export default ShopPanel
