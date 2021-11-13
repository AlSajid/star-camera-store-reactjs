import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container p-3">
                <div className="row gx-5">
                    <div className="col-lg-3 col-sm-12 ">
                        <h3>Support</h3>
                        <hr />
                        <p>
                            <p>Phone: <span className="text-warning">09678432213</span></p>
                            <p>Store Location: <span className="text-warning">Find Our Stores</span></p>
                        </p>
                    </div>
                    <div className="col-lg-5 col-sm-12 row text-secondary gx-5">
                        <h3 className="text-white">About Us</h3>
                        <hr />
                        <div className="col-lg-4 col-sm-12">
                            <h6>EMI Terms</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Career</h6>
                            <h6>Blog</h6>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h6>About Us</h6>
                            <h6>Terms & Conditions</h6>
                            <h6>Star Point Policy</h6>
                            <h6>Contact Us</h6>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h6>Online Delivery</h6>
                            <h6>Refund and Return Policy</h6>
                            <h6>Write for Us</h6>
                            <h6>Brands</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <h3>Stay Connected</h3>
                        <hr />
                        <h6><b>Star Camera Store</b></h6>
                        <p className="text-secondary">63th floor, 280 Kazi Nazrul Islam Ave, Nabin Zamzam Square, Dhaka 1200</p>
                        <p>Email: <span className="text-warning">info@starcamera.com</span></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;