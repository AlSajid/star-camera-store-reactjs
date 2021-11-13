import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout, admin } = useAuth();

    return (
        <div>
            {/* header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow ">
                <div className="container-fluid">
                    {/* title */}
                    <NavLink exact to="/" className="text-decoration-none text-white">
                        <h1 className="fs-4 font-monospace">Star Camera Store</h1>
                    </NavLink>

                    {/* menu button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navigations */}
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact to="/" className="nav-link mx-3" activeClassName="active fw-bolder">Home</NavLink>
                            <NavLink exact to="/explore" className="nav-link mx-3" activeClassName="active fw-bolder">Explore</NavLink>
                            {
                                user?.email
                                    ?
                                    <>
                                        <div className="btn-group">
                                            <button type="button" className="btn dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dashboard
                                            </button>
                                            <ul className="dropdown-menu">
                                                {(admin) ?
                                                    <>
                                                        <NavLink exact to="/manageAllOrders" className="nav-link text-dark">Manage All Orders</NavLink>
                                                        <NavLink exact to="/addAProduct" className="nav-link text-dark">Add A Product</NavLink>
                                                        <NavLink exact to="/makeAdmin" className="nav-link text-dark">Make Admin</NavLink>
                                                        <NavLink exact to="/manageProducts" className="nav-link text-dark">Manage Products</NavLink>
                                                    </>
                                                    :
                                                    <>
                                                        <NavLink exact to="/pay" className="nav-link text-dark">Pay</NavLink>
                                                        <NavLink exact to="/myOrder" className="nav-link text-dark">My Orders</NavLink>
                                                        <NavLink exact to="/review" className="nav-link text-dark">Review</NavLink>
                                                    </>

                                                }

                                                <button onClick={logout} className="nav-link btn text-dark">Logout</button>
                                            </ul>
                                        </div>
                                        <div className="nav-link fw-bold">
                                            <span>{user.displayName}</span>
                                        </div>
                                    </>

                                    :
                                    <NavLink exact to="/login" className="nav-link mx-3" activeClassName="active fw-bolder">Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;