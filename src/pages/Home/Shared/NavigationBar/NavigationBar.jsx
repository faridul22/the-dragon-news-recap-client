import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => { console.log(error) });
    }
    return (
        <Container>
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
                        <Nav className="mx-auto ">
                            <Link className='text-decoration-none text-dark ms-2' to="/category/0">
                                Home
                            </Link>
                            <Link className='text-decoration-none text-dark ms-2' to="/about">
                                About
                            </Link>
                            <Link className='text-decoration-none text-dark ms-2' to="/career">
                                Career
                            </Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <Button onClick={handleLogOut} variant='secondary'>LogOut</Button> : <Link to="/login">
                                    <Button variant='secondary'>Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;