import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://store-backend-gsi8.onrender.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));

    }, [])

    return (
        <div className="my-3 py-3">
            <div className="container border rounded">
                <div className="p-3">
                    <h3>Reviews</h3>
                    <hr />
                    <div className="row">
                        {
                            reviews.map(review =>
                                <div className="card col-lg-4 col-sm-12">
                                    <div className="card-body">
                                        <h3 className="card-title">{review.name}</h3>
                                        <small>{review.email}</small>
                                        <hr />
                                        <p className="card-text">{review.review}</p>
                                        <p className="card-text">Rating: {review.rate}/5</p>

                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Reviews;