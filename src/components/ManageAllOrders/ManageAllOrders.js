import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    let change = 0;

    useEffect(() => {
        fetch(`https://store-backend-gsi8.onrender.com/allOrder`)
            .then(response => response.json())
            .then(data => setAllOrders(data));

    }, []);

    const handleShipOrder = id => {
        const url = `https://store-backend-gsi8.onrender.com/shipOrder/${id}`;

        fetch(url, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('This product has been shipped.');
                }
            })
    }

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://store-backend-gsi8.onrender.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('This order has been cancelled');
                        const remainingMyOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingMyOrders);
                    }
                });
        }
    }


    return (
        <div>
            <div className="container m-auto my-3 p-3">

                <h2 className="font-bold text-3xl m-3 p-3">All Orders</h2>
                <hr />
                <div className="row">
                    {
                        allOrders.map(order =>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Order No. {order._id}</h5>
                                        <p className="card-text">Product: {order.product}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Price: {order.price}</li>
                                        <li className="list-group-item">Phone: {order.phone}</li>
                                        <li className="list-group-item">Comment: {order.comment}</li>
                                        <li className="list-group-item">Status: {order.status}</li>
                                    </ul>
                                    <button className="btn btn-success" onClick={() => handleShipOrder(order._id)}>Ship This Order</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>Cancel Order</button>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;