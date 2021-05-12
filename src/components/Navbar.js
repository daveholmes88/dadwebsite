import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar collapseOnSelect expand='lg' sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><h1>Bruce Holmes</h1></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href='/Feldenkrais'><h4>Feldenkrais</h4></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Becoming"><h4>Square Dance Calling</h4></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <NavDropdown alignRight id='nav-dropdown' class="navbar-toggle collapsed" title={<span><i className="navbar-toggler-icon"></i></span>}>
                            <NavDropdown.Item href='/Dance/Social'>Dance</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/SciFi/Anvil">Science Fiction</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Music">Music</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/TwoCents">Two Cents</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/MailList">Contact</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Triathlon/You'>Triathlon</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Shop/Shipping">Shopping</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Movement/Aikido'>Aikido</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Movement/Juggling'>Juggling</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}