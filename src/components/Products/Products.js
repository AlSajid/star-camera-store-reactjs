import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const [allproducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fierce-mesa-00135.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, [])

    let products = allproducts;

    if (props.cut === true) {
        products = allproducts.slice(0, 6);
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
                                <Link to={`/purchase/${product._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>

                    )
                }

            </div>
        </div >
    );
};

export default Products;