import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const [login, setLogin] = useState({});
    const history = useHistory();

    const { registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...login };
        newLoginData[field] = value;
        setLogin(newLoginData);
    }
    const handleLoginSubmit = e => {
        registerUser(login.email, login.password, login.name, history);
        e.preventDefault();
    }

    return (
        <div className="container ">
            <div className="container m-3 p-3 mx-auto">
                <h2>Register</h2>
                <hr />
                <div className="bg-danger rounded m-3">
                    <p className="text-white ">{authError}</p>
                </div>
                {isLoading && <Spinner></Spinner>}
                {!isLoading &&
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input type="text" className="form-control" name="name" onBlur={handleOnBlur}  required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onBlur={handleOnBlur} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onBlur={handleOnBlur} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                }
                Already have an account? <Link to="/login">Login here</Link>
            </div>
        </div >
    );
};

export default Register;