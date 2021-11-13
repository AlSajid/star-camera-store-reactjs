import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const { admin } = useAuth();
    const history = useHistory();

    if (!admin) {
        history.push('/');
    }

    let newAdmin = {};
    const handleOnblur = e => {

        const field = e.target.name;
        const value = e.target.value;
        newAdmin[field] = value;
    }

    const handleReviewSubmit = e => {
        fetch('https://fierce-mesa-00135.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
            .then(response => response.json())
            .then(data => { if (data.insertedId) { history.push("/") } });
        e.preventDefault();
    }

    return (
        <div className="m-3 p-3 shadow container mx-auto">
            <h2 className="m-3 p-3">Make an Admin</h2>
            <form onSubmit={handleReviewSubmit}>
                <div className="mb-3">
                    <label className="form-label">Admin Email</label>
                    <input type="text" className="form-control" name="admin" onBlur={handleOnblur} />
                </div>
                <button type="submit" className="btn btn-primary">Add New Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;