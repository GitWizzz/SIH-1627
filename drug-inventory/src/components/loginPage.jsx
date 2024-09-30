import React, { Component } from 'react'
import './css/loginPage.css'
import patient from './image/patient.jpg'
import hospital from './image/hospital.jpg'
import superAdmin from './image/super_admin.jpg'
import doctor from './image/doctor.jpg'

export default function loginPage() {
  return (

      <div className=''>
                <div class="background">
                    <div class="trans-box">
                        <h1>WELCOME</h1>
                        <h4>A Comprehensive Solution for Patients, Hospitals, Doctors, and Administrators</h4>
                    </div>
                </div>
                <div className="marquee ">
                    <p>Please choose wisely from the available options and login to proceed with accessing your account. Make sure to select the correct role to get the best experience tailored to your needs!</p>
                </div>
                <div className="card-container m-5 ">
                    <div className="card m-5">
                        <img src={patient} className="card-img" />
                        <p className="card-title">User</p>
                        <div className='d-flex justify-content-around'>
                            <a href="/login"><button type="button">Login</button></a>
                        </div>
                    </div>
                    <div className="card m-5">
                        <img src={hospital} className="card-img" />
                        <p className="card-title">Hospital</p>
                        <div className='d-flex justify-content-center'>
                            <button className='' type="button">Login</button>
                        </div>
                    </div>
                    
                    <div className="card m-5">
                        <img src={superAdmin} className="card-img" />
                        <p className="card-title">Super Admin</p>
                        <div className='d-flex justify-content-center'>
                            <button className='' type="button">Login</button>
                        </div>
                    </div>
                </div>
            </div>

  )
}

