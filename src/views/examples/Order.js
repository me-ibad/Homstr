import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ColorNav from "components/Navbars/ColorNav.js";
import {
    Button,
    Input,
    InputGroupAddon,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    CardImg, CardText, 
    CardTitle, CardSubtitle
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    
}));

function Order() {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <ColorNav />
<br/>
<Row>
    <Col lg="5" md="5" sm="3" xm="3"></Col>
                <Col lg="6" md="6" sm="3" xm="3">
                    <h1>Orders</h1>
                </Col>
</Row>

            <br /><br />


            <Row>
                <Col lg="1" md="1" sm="1" xm="1"></Col>
                <Col lg="10" md="10" sm="10" xm="10">
            <Nav
                className="nav-tabs-neutral justify-content-center"
                data-background-color="blue"
                role="tablist"
                tabs
            >
                <NavItem>
                    <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                            e.preventDefault();
                            setPills("1");
                        }}
                    >
                        New
                      </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                            e.preventDefault();
                            setPills("2");
                        }}
                    >
                        Completed
                      </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                            e.preventDefault();
                            setPills("3");
                        }}
                    >
                        Canceled
                      </NavLink>
                </NavItem>
                
                
            </Nav>
                
            <TabContent
                className=""
                activeTab={"pills" + pills}
            >
                <TabPane tabId="pills1">
                    <div className="order-list">
                    <Row>
                        <Col lg="3" md="5" sm="3" xm="3"></Col>
                        <Col lg="5" md="5" sm="3" xm="3">
                            <div className={classes.root}>
                                <Accordion >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading}>Drinks</Typography>
                                        <Typography className={classes.secondaryHeading}>1</Typography>
                                    </AccordionSummary>
                                    <div className="ordetls">
                                        <strong>Name:</strong>&nbsp;<span>Jhon Snow</span>

                                        <div class="details-set">
                                            <strong>Location:</strong>&nbsp;<span>garden town Lahore</span>
                                        </div>
                                        <div class="details-set">
                                            <strong>Phone No:</strong>&nbsp;<span>020384020385</span>
                                        </div>
                                        <div class="ui divider"></div>
                                        <Row>
                                            <Col lg="3" md="5" sm="3" xm="3"></Col>
                                            <Col lg="4" md="4" sm="4" xm="4">
                                                <div class="ui buttons">
                                                    <button class="ui positive button">Complete</button>
                                                    <div class="or"></div>
                                                    <button class="ui negative button">Cancel</button>
                                                </div>
                                            </Col>
                                        </Row>



                                        <br />
                                    </div>
                                </Accordion>

                            </div>
                        </Col>
                    </Row>
                            </div>
                            <br/>
                </TabPane>
                <TabPane tabId="pills2">
                            <div className="order-list">
                                <Row>
                                    <Col lg="3" md="5" sm="3" xm="3"></Col>
                                    <Col lg="5" md="5" sm="3" xm="3">
                                        <div className={classes.root}>
                                            <Accordion >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading}>Laptop</Typography>
                                                    <Typography className={classes.secondaryHeading}>3</Typography>
                                                </AccordionSummary>
                                                <div className="ordetls">
                                                    <strong>Name:</strong>&nbsp;<span>Jhon Snow</span>

                                                    <div class="details-set">
                                                        <strong>Location:</strong>&nbsp;<span>garden town Lahore</span>
                                                    </div>
                                                    <div class="details-set">
                                                        <strong>Phone No:</strong>&nbsp;<span>020384020385</span>
                                                    </div>
                                                    <div class="ui divider"></div>
                                                    <Row>
                                                        <Col lg="3" md="5" sm="3" xm="3"></Col>
                                                        <Col lg="4" md="4" sm="4" xm="4">
                                                            <div class="ui buttons">
                                                                <button class="ui positive button">Complete</button>
                                                                <div class="or"></div>
                                                                <button class="ui negative button">Cancel</button>
                                                            </div>
                                                        </Col>
                                                    </Row>



                                                    <br />
                                                </div>
                                            </Accordion>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                </TabPane>
                <TabPane tabId="pills3">
                            <div className="order-list">
                                <Row>
                                    <Col lg="3" md="5" sm="3" xm="3"></Col>
                                    <Col lg="5" md="5" sm="3" xm="3">
                                        <div className={classes.root}>
                                            <Accordion >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading}>Garment</Typography>
                                                    <Typography className={classes.secondaryHeading}>5</Typography>
                                                </AccordionSummary>
                                                <div className="ordetls">
                                                    <strong>Name:</strong>&nbsp;<span>Jhon Snow</span>

                                                    <div class="details-set">
                                                        <strong>Location:</strong>&nbsp;<span>garden town Lahore</span>
                                                    </div>
                                                    <div class="details-set">
                                                        <strong>Phone No:</strong>&nbsp;<span>020384020385</span>
                                                    </div>
                                                    <div class="ui divider"></div>
                                                    <Row>
                                                        <Col lg="3" md="5" sm="3" xm="3"></Col>
                                                        <Col lg="4" md="4" sm="4" xm="4">
                                                            <div class="ui buttons">
                                                                <button class="ui positive button">Complete</button>
                                                                <div class="or"></div>
                                                                <button class="ui negative button">Cancel</button>
                                                            </div>
                                                        </Col>
                                                    </Row>



                                                    <br />
                                                </div>
                                            </Accordion>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                </TabPane>
                
            </TabContent>
            
</Col>
</Row>

            <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Order
