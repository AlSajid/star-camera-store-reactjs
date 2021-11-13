import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="container ">
            <div className="container m-3 p-3 mx-auto">
                <h2>Login</h2>
                <hr />

                <div className="bg-danger rounded m-3">
                    <p className="text-white ">{authError}</p>
                </div>

                {isLoading && <Spinner></Spinner>}
                {!isLoading &&

                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onBlur={handleOnblur} id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onBlur={handleOnblur} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                }

                Don't have an account? <Link to="/register">Register here</Link>
            </div>
        </div >
    );
};

export default Login;