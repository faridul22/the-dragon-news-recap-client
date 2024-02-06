import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary fs-4'><small>Lorem ipsum dolor sit amet.</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>
            <div className='p-1 mb-2 bg-body-tertiary d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='fs-5 text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/about">About</Nav.Link>
                            <Nav.Link to="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/profile">
                                Profile
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;