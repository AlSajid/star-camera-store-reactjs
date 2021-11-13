import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fierce-mesa-00135.herokuapp.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProducts(data));

    }, [id])

    const { include } = product;

    let order = {};
    const handleOnblur = e => {

        const field = e.target.name;
        const value = e.target.value;
        order[field] = value;
        order["email"] = user.email;
        order["name"] = user.displayName;
        order["product"] = product.title;
        order["price"] = product.price;
        order["status"] = "Pending";
    }
    const handleOrderSubmit = e => {
        fetch('https://fierce-mesa-00135.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => { if (data.insertedId) { history.push("/") } });
        e.preventDefault();
    }

    return (
        <div className="row container my-3 p-3 m-auto g-5">
            {/* service information */}
            <div className="m-3 p-3 col-lg-6 col-md-12">

                {/* image */}
                <div className="m-3 p-3">
                    <img className="rounded m-auto img-thumbnail" src={product.image} alt="ticket" />
                </div>

                <h2 className="m-3 p-3 text-center">{product.title}</h2>
                <div className="m-3 p-3">
                    {include && <h3 className="">Include -</h3>}
                    <ul>
                        {
                            include ? include.map((item) => (<li>- {item}</li>))
                                : include
                        }
                    </ul>
                </div>
                <div className="m-3 p-3">
                    <h4 className="text-red-600 font-bold my-3 py-3 text-3xl">Price: {product.price} Taka</h4>
                </div>
            </div>

            {/* Booking form */}
            <div className="m-3 p-3 shadow col-lg-5 col-md-12 float-end">
                <h2 className="m-3 p-3">Booking Form</h2>
                <hr />
                <form onSubmit={handleOrderSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" name="name" onBlur={handleOnblur} value={user.displayName} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onBlur={handleOnblur} value={user.email} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" onBlur={handleOnblur} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-control" name="phone" onBlur={handleOnblur} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Comment</label>
                        <input type="text" className="form-control" name="comment" onBlur={handleOnblur} />
                    </div>
                    <button type="submit" className="btn btn-primary">Order Now</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;