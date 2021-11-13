import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const history = useHistory();

    let review = {};
    const handleOnblur = e => {

        const field = e.target.name;
        const value = e.target.value;
        review[field] = value;
        review["name"] = user.displayName;
        review["email"] = user.email;
    }

    const handleReviewSubmit = e => {
        fetch('https://fierce-mesa-00135.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => { if (data.insertedId) { history.push("/") } });
        e.preventDefault();
    }

    return (
        <div className="m-3 p-3 shadow container mx-auto">
            <h2 className="m-3 p-3">Review Form</h2>
            <form onSubmit={handleReviewSubmit}>
                <div className="mb-3">
                    <label className="form-label">Give a nice review about your shopping experience.</label>
                    <input type="text" className="form-control" placeholder="write something" name="review" onBlur={handleOnblur} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rate here (out of 5)</label>
                    <input type="number" min="0" max="5" className="form-control" name="rate" onBlur={handleOnblur} required />
                </div>
                <button type="submit" className="btn btn-primary">Review</button>
            </form>
        </div>
    );
};

export default Review;