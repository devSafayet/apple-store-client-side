import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth).then(() => {

        })
    }
    return (
        <nav className='bg-color'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span className='text-primary'>APPLE STORE</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="/addProducts">Add Product</Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to="/manageProduct">Manage Product</Nav.Link>
                            }

                            {
                                user && <Nav.Link as={Link} to="/myProducts">My Products</Nav.Link>
                            }

                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                            {
                                user
                                    ?
                                    <Nav.Link as={Link} to="/signin" onClick={handelSignOut}>
                                        Sign Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/signin">
                                        Sign In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;