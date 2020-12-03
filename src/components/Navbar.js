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
                            <Nav.Link href='/Feldenkrais.html'><h4>Feldenkrais</h4></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Becoming.html"><h4>Square Dance Calling</h4></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <NavDropdown alignRight id='nav-dropdown' class="navbar-toggle collapsed" title={<span><i className="navbar-toggler-icon"></i></span>}>
                            <NavDropdown.Item href='/Dance/DanceSocial.html'>Dance</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/SciFi/Anvil.html">Science Fiction</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Music/Music.html">Music</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/TwoCents/TwoCents.html">Two Cents</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Touch/TouchMailList.html">Contact</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Triathlon/TriYou.html'>Triathlon</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Shop/ShopShipping.html">Shopping</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Movement/Aikido.html'>Aikido</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/Movement/Juggling.html'>Juggling</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}