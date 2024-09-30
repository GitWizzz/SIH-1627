import React from 'react'
import graph from './image/enhanced_medicine_usage_delhi_districts.png';
import emergraph from './image/emergrncy cases.jpg';



export default function DataAnalytics() {
    return (
        <div>
            <div className='m-5 specialties-box'>
                <div className='m-3'>
                    <header class="new-header d-flex justify-content-center">
                        <h1 class="new-title">Medicine Usage and Health Statistics in Delhi (2024)</h1>
                    </header>
                    
                    <div className=' data-margin'>
                        <div className='row '>


                            <div className='col-12'>
                                <div className='graph-box '>
                                    <section className=''>
                                        <img src={graph} className="graph" alt="" />
                                    </section>
                                </div>
                            </div>

                            <div className='col'>
                                <section class="new-data-section border border-successs">
                                    <h2 class="new-heading">Top Prescribed Medicines</h2>
                                    <ul class="new-list">
                                        <li><strong>Metformin:</strong> Type 2 diabetes (most prescribed)</li>
                                        <li><strong>Amlodipine:</strong> High blood pressure</li>
                                        <li><strong>Paracetamol:</strong> Pain relief, fever</li>
                                        <li><strong>Atorvastatin:</strong> Cholesterol reduction</li>
                                        <li><strong>Omeprazole:</strong> Acid reflux, ulcers</li>
                                        <li><strong>Azithromycin:</strong> Respiratory infections</li>
                                        <li><strong>Cefixime:</strong> Urinary tract infections</li>
                                    </ul>
                                </section>
                            </div>

                        </div>

                        <div className='row my-5'>
                            

                            <div className='col'>

                                <section class="new-data-section my-3 border border-successs">
                                    <h2 class="new-heading">Substance Use Prevalence (Adults 18-75 years)</h2>
                                    <table class="new-table">
                                        <thead class="new-table-header">
                                            <tr>
                                                <th>Substance</th>
                                                <th>Prevalence (%)</th>
                                                <th>Estimated Users</th>
                                            </tr>
                                        </thead>
                                        <tbody class="new-table-body">
                                            <tr>
                                                <td>Alcohol</td>
                                                <td>17.1%</td>
                                                <td>15.1 million</td>
                                            </tr>
                                            <tr>
                                                <td>Cannabis</td>
                                                <td>3.3%</td>
                                                <td>29 million</td>
                                            </tr>
                                            <tr>
                                                <td>Opioids</td>
                                                <td>2.1%</td>
                                                <td>19 million</td>
                                            </tr>
                                            <tr>
                                                <td>Sedatives</td>
                                                <td>1.21%</td>
                                                <td>11 million</td>
                                            </tr>
                                            <tr>
                                                <td>Inhalants</td>
                                                <td>0.58%</td>
                                                <td>6 million</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>

                            </div>

                        </div>
                        </div>
                        <section class="new-data-section ">
                            <h2 class="new-heading d-flex justify-content-center">Government Initiatives for Substance Use</h2>
                            <ul class="new-list ">
                                <li className='d-flex justify-content-center'><strong>Nasha Mukt Bharat Abhiyaan (NMBA):</strong> Nationwide outreach to over 10.7 crore individuals, involving educational institutions, youth volunteers, and women.</li>
                                <li className='d-flex justify-content-center'><strong>Rehabilitation Centers:</strong> 342 Integrated Rehabilitation Centres for Addicts (IRCAs) providing counseling, detoxification, and reintegration.</li>
                                <li className='d-flex justify-content-center'><strong>Peer-Based Intervention:</strong> Programs targeting vulnerable adolescents to prevent early drug use.</li>
                                <li className='d-flex justify-content-center'><strong>District De-Addiction Centres:</strong> Focused addiction treatment in underserved areas.</li>
                            </ul>
                        </section>
                    
                </div>
            </div>

        </div>
    )
}
