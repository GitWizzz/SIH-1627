import React from 'react';
import Logosurya from './image/logo-suryaved.png'
import "./css/style1.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src={Logosurya} alt="Logo" />
                    <p>Get A Lot Of Information About Us</p>
                    <h4>Subscribe Our Newsletter</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email id" />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="footer-buttons">
                        <button className="book-health">Check-Updates</button>
                        <button className="book-appointment">Contact Us</button>
                    </div>
                </div>

                <div className="footer-links-section">
                    <div>
                        <h4>Drug Categories</h4>
                        <ul>
                            <li>Prescription Drugs</li>
                            <li>Over-the-Counter Drugs</li>
                            <li>Herbal Supplements</li>
                            <li>Vitamins & Minerals</li>
                            <li>Homeopathic Remedies</li>
                            <li>Medical Devices</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Inventory Management</h4>
                        <ul>
                            <li>Stock Availability</li>
                            <li>Order Tracking</li>
                            <li>Restocking Procedures</li>
                            <li>Expiry Tracking</li>
                            <li>Supplier Management</li>
                            <li>Distribution Channels</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Pharmacy Services</h4>
                        <ul>
                            <li>Online Prescription Refills</li>
                            <li>Drug Consultation</li>
                            <li>Home Delivery Services</li>
                            <li>Medication Therapy Management</li>
                            <li>Adverse Drug Reactions Monitoring</li>
                            <li>Specialty Medications</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Corporate</h4>
                        <ul>
                            <li>Company Overview</li>
                            <li>Inventory Reporting</li>
                            <li>Pharmacy Management System</li>
                            <li>Supplier Contracts</li>
                            <li>Logistics & Supply Chain</li>
                            <li>Regulatory Compliance</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
