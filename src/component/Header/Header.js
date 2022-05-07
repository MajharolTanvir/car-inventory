import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <div className='container'>
            <Navbar className='y-3' bg="transparent" expand="lg">
                <Container>
                    <CustomLink className='mx-2 font-bold text-2xl no-underline' to="/">Car inventory</CustomLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='mx-2 font-medium text-lg no-underline' to="/home">Home</CustomLink>
                            {
                                user && <>
                                    <CustomLink className='mx-2 font-medium text-lg no-underline' to="/inventory">Inventory</CustomLink>
                                    <CustomLink className='mx-2 font-medium text-lg no-underline' to="/myItems">My Items</CustomLink>
                                    <CustomLink className='mx-2 font-medium text-lg no-underline' to="/addNewItem">Add item</CustomLink>
                                    <CustomLink className='mx-2 font-medium text-lg no-underline' to="/blogs">Blogs</CustomLink>
                                </>
                            }
                            {
                                user ? <button className='mx-2 font-medium text-lg no-underline' onClick={handleLogOut}>Log out</button> : <CustomLink className='mx-2 font-medium text-lg no-underline' to="#link">Login</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;