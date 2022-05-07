import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut()
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Car inventory</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                user && <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/inventory">Inventory</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addNewItem">New item</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myItems">My items</Link>
                                    </li>
                                </>
                            }
                            {user?.email ? <button onClick={handleLogOut}>Log out</button> :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li> 
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;