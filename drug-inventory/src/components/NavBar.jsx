import React from 'react'
import './css/style1.css'
import NCT from './image/NCT_logo.png';
import Mahotsav from './image/Mahotsav.png';
import Tiranga from './image/Tiranga.jpg';
import Contact from './image/contact.svg';
import Location from './image/location-dot-solid.svg';

export default function NavBar() {
    return (
        <div>
            <div>
                <div className='d-flex justify-content-around help'>
                    <div className="email">
                        <p>
                            <img className='icon-solid m-1' src={Location} alt="" />
                            support@hospital.com | 12 street,New Delhi
                        </p>
                    </div>
                    <div className="call">
                        <p>
                            <img className='icon-solid m-1' src={Contact} alt="" />
                            Call us for any query: +919963438845
                        </p>
                    </div>
                </div>

                <div className="header row">
                    <div className='col-1'>
                        <img src={NCT} alt='' className="emblem" />
                    </div>
                    <h1 className='col-8 d-flex justify-content-center Heading'><b>DRUG INVENTORY AND SUPPLY CHAIN TRACKING SYSTEM</b></h1>
                    <div className="symbols col-3">
                        <div className='d-flex justify-content-end'>
                            <img src={Mahotsav} alt='' />
                            <img src={Tiranga} alt='' style={{ marginLeft: '1rem' }} />
                        </div>
                    </div>
                </div>

                <div className='m-2'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active bg-light fw-bold pl-0" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item active bg-light">
                                        <a className="nav-link fw-bold fw-bold" href="/">Inventory</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="/">Track Shippments</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a className="nav-link" href="/">Billing and Payment</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fw-bold" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Login/Sign Up
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/login_page">Login</a></li>
                                            <li><a className="dropdown-item" href="/">Sign Up</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="/">Register Hospital</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fw-bold" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Contact Us
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/">Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}
