import React from "react";
import "./css/style1.css";
import Hospital from "./image/h2.jpg";
import Hospital2 from "./image/hospital2.jpg";
import Ehospital from "./image/imresizer-1726420131136.jpg";

export default function HomePage() {
    return (
        <div>
            <div className="marquee ">
                <p>"Welcome to the Drug Inventory and Supply Chain Management System—ensuring the right medications reach the right place at the right time, with streamlined procurement, real-time tracking, and seamless inventory control."</p>
            </div>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Hospital} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Hospital2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Ehospital} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>


                {/* SERVICE SECTION  */}
                <div className="mx-5 ">
                    <div className="row">
                        <div className="col">
                            <a href="/dashboard" className="tp_widget" id="btn-cta-bb-book-appointment">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon" />
                                <h5 className="effect">Inventory</h5>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/medi" id="btn-cta-bb-buy-medicine" className="tp_widget">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg" alt="icon" />
                                <h5 className="effect">Buy Medicine</h5>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/" className="tp_widget " id="btn-cta-bb-book-prohealth">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon" />
                                <h5 className="effect">Track Shipments</h5>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/data" id="btn-cta-bb-view-health-record" className="tp_widget">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg" alt="icon" />
                                <h5 className="effect">Data & Analytics</h5>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/" id="btn-cta-bb-consult-online" className="tp_widget">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg" alt="icon" />
                                <h5 className="effect">Register Complaint</h5>
                            </a>
                        </div>
                    </div>


                </div>

                {/* specialties*/}

                <div className="m-5 specialties-box  ">
                    <div className="m-2">
                        <div className="text-center m-5 fst-italic">
                            <h1>Explore our Centres of Excellence in Drug Inventory Management</h1>
                            <p>SuryaVed offers dedicated Centres of Excellence for drug inventory and supply chain management. These state-of-the-art facilities, integrated across our hospital locations, ensure seamless procurement, storage, and distribution of essential medications, setting new standards for efficiency and reliability in healthcare logistics.</p>
                            <u><h3>Medicine Usage and Health Statistics in Delhi (2024)</h3></u>

                        </div>
                        <div className="row ">
                            <img className=" col-4 doctar-image" src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp" alt="" />

                            <div className="col ">
                                <div className="">
                                    
                                    <div className="row doctor-margin">
                                        <div className="col-5 border  border-success m-1">
                                            <div className="box-hs">
                                                <p className="title-hs">Multi-Site Inventory Tracking</p><img decoding="async" alt="multisites inventory tracking for state government" src="https://asapsystems.com/wp-content/uploads/2022/08/multisites-inventory-tracking-for-state-government.svg" />
                                                <div className="cnt-hs">
                                                    <p>Manage inventory levels across multiple warehouses, sites, or offices with ease. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 border  border-success m-1">
                                            <div className="box-hs">
                                                <p className="title-hs">Streamlined Receiving</p><img decoding="async" alt="receive inventory feature" src="https://asapsystems.com/wp-content/uploads/2022/08/receive-inventory-feature.svg" />
                                                <div className="cnt-hs">
                                                    <p>Efficiently receive inventory using purchase orders (POs). </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 border  border-success m-1 ">
                                            <div className="box-hs">
                                                <p className="title-hs">Configurable Inventory Reports</p><img decoding="async" alt="configurable inventory reports for the state government" src="https://asapsystems.com/wp-content/uploads/2022/08/configurable-inventory-reports-for-the-state-government.svg" />
                                                <div className="cnt-hs">
                                                    <p>Generate tailored reports with the most relevant inventory data. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 border  border-success m-1">
                                            <div className="box-hs">
                                                <p className="title-hs">Configurable Inventory Functions</p><img decoding="async" alt="inventory configurable functions for state governmental entities" src="https://asapsystems.com/wp-content/uploads/2022/08/inventory-configurable-functions-for-state-governmental-entities.svg" />
                                                <div className="cnt-hs">
                                                    <p>Configure system functions to align with specific municipality/county/town requirements. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 border  border-success m-1">
                                            <div className="box-hs">
                                                <p className="title-hs">Configurable Inventory Dashboards</p><img decoding="async" alt="inventory configurable dashboard for state governmental entities" src="https://asapsystems.com/wp-content/uploads/2022/08/inventory-configurable-dashboard-for-state-governmental-entities.svg" />
                                                <div className="cnt-hs">
                                                    <p>Each user can configure their dashboard to display the inventory data they need. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 border  border-success m-1">
                                            <div className="box-hs">
                                                <p className="title-hs">Configurable Barcode Labels</p><img decoding="async" alt="configurable inventory barcode labels for the state government" src="https://asapsystems.com/wp-content/uploads/2022/08/configurable-inventory-barcode-labels-for-the-state-government.svg" />
                                                <div className="cnt-hs">
                                                    <p>Easily edit and configure barcode labels to display real-time, critical information. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>







    );
}
