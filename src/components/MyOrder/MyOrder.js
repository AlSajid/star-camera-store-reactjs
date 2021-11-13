import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://fierce-mesa-00135.herokuapp.com/myOrder/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrders(data));

    }, [user.email]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://fierce-mesa-00135.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your order has been cancelled');
                        const remainingMyOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingMyOrders);
                    }
                });
        }
    }

    return (
        <div>
            <div className="container m-auto my-3 p-3">

                <h2 className="font-bold text-3xl m-3 p-3">My Orders</h2>
                <hr />
                <div className="row">
                    {
                        myOrders.map(order =>
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
                                    </ul>
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

export default MyOrder;