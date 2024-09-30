import React, { useState } from "react";
import { bookAppointment } from "../api";



const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        mobileNumber: '',
        address: '',
        gender: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // nst handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI2NTkyOTUxfQ.UfEcEW94wt8JktIHCHWdBxiYoX84XndmLAV0FuIhFUg";
    //         const response = await bookAppointment(formData, token);
    //         console.log('Appointment booked:', response.data);
    //     } catch (err) {
    //         console.error('Error booking appointment:', err);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI2NTkyOTUxfQ.UfEcEW94wt8JktIHCHWdBxiYoX84XndmLAV0FuIhFUg";
            const response = await bookAppointment(formData, token);
            console.log('Appointment booked:', response.data);
        } catch (err) {
            console.error('Error booking appointment:', err);
        }
    };



    return (
        <div className="d-flex justify-content-center">
            <div className="form-popup m-4">
                <div className="form-content">
                    <h4 className="text-center">Please Fill-Out The Form Below To Book Appointment</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="details">
                            <input type="text" name="fullName" placeholder="Full Name"  required value={formData.fullName} onChange={handleInputChange}/>
                        </div>

                        <div className="details">
                            <input type="number" name="age" placeholder="Age" required value={formData.age} onChange={handleInputChange}  />
                        </div>

                        <div className="details">
                            <input type="text" name="mobileNumber" placeholder="Mobile Number" required value={formData.mobileNumber} onChange={handleInputChange}
                            />
                        </div>

                        <div className="details">
                            <input type="email" name="email" placeholder="Email" required value={formData.email} 
                            />
                        </div>

                        <div className="details">
                            <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleInputChange}
                            />
                        </div>

                        <div className="details">
                            <label htmlFor="timeSlot">Choose Time Slot:</label>
                            <input type="datetime-local" name="timeSlot" required value={formData.timeSlot}
                            />
                        </div>

                        <div className="details">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className="details">
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="details text-center">
                            <button type="submit" className="submit-apn btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AppointmentForm;
