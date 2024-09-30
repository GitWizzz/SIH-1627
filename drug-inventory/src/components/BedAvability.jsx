import { useEffect } from 'react';
import React, {useState} from 'react'
import axios from 'axios';
// import bedAvaility from ('../api')


export default function BedAvability() {
    const [hospital,sethospital] = useState([])
    const API_URL = 'http://localhost:5000';
    // const bed = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await bedAvaility;
    //         sethospital(response.data)
    //     } catch (err) {
    //         console.error('error:', err);
    //     }
    // };


    useEffect(() => {
        axios.get(`${API_URL}/bed`)
            .then(response => {
                sethospital(response.data);
            })
            .catch(error => {
                console.error('Error fetching hospital data:', error);
            });
    }, []);

    
  return (
    <div>
        <div className='m-4'>
      <table>
        <thead>
            <tr>
                <th>Hospital</th>
                <th>Total Beds</th>
                <th>Available Beds</th>
            </tr>
        </thead>
        <tbody>
            {
                hospital.map(hospital=>(
                    <tr>
                        <td> {hospital.hospital_name} </td>
                        <td> {hospital.total_bed} </td>
                        <td> {hospital.available_bed} </td>
                    </tr>
                ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
