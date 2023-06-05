import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://store-backend-gsi8.onrender.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://store-backend-gsi8.onrender.com/deleteProduct/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The product has been deleted');
                        const remainingMyOrders = products.filter(order => order._id !== id);
                        setProducts(remainingMyOrders);
                    }
                });
        }
    }

    return (
        < div className="m-3 p-3 container mx-auto" >
            <h2 className="fw-bold m-3 p-3">Products</h2>
            <hr />
            <div className="row g-5">
                {
                    products.map(product =>
                        <div className="card col-lg-4 col-sm-12">
                            <img className="card-img-top" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h6 className="card-title">{product.title}</h6>
                                <p className="card-text">৳ {product.price}</p>

                                <button className="btn btn-danger" onClick={() => handleDeleteOrder(product._id)}>Delete This Product</button>

                            </div>
                        </div>

                    )
                }

            </div>
        </div >
    );
};

export default ManageProducts;