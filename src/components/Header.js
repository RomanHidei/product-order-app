import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container } from '@material-ui/core'
import Products from './Pages/Products'
import Bucket from './Pages/Bucket'


export default class Header extends Component {

    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" style={{backgroundColor:"primary", minHeight:"100px",}}>
                    <Container>
                        <Navbar.Collapse id="responsive-navbar-nav" style={{borderBottom:"1px",}}>
                            <Nav className="mg-auto">
                            <Button variant="outline-primary" style={{marginLeft:100,}}>
                                <Nav.Link href="/products">Products</Nav.Link>
                                </Button>
                                <Button variant="outline-primary" style={{marginLeft:900,}}>
                                <Nav.Link href="/bucket" >Bucket</Nav.Link>
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/bucket" component={Bucket} />

                    </Switch>
                </Router>
            </>
        )
    }
}
