import React from 'react';
import { useHistory } from 'react-router';

const AddAProduct = () => {
    const history = useHistory();

    let review = {};
    const handleOnblur = e => {

        const field = e.target.name;
        const value = e.target.value;
        review[field] = value;
    }

    const handleReviewSubmit = e => {
        fetch('https://store-backend-gsi8.onrender.com/addAProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => { if (data.insertedId) { history.push("/explore") } });
        e.preventDefault();
    }
    return (
        <div className="m-3 p-3 shadow container mx-auto">
            <h2 className="m-3 p-3">Add A New Product</h2>
            <hr />
            <form onSubmit={handleReviewSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input type="text" className="form-control" name="image" onBlur={handleOnblur} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Title</label>
                    <input type="text" className="form-control" name="title" onBlur={handleOnblur} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input type="text" className="form-control" name="price" onBlur={handleOnblur} required />
                </div>

                <button type="submit" className="btn btn-primary">Add A Product</button>
            </form>
        </div>
    );
};

export default AddAProduct;