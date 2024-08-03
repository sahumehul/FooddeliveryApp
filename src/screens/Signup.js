import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/v1/createuser", {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = response.data;
            console.log(json);

            if (!json.success) {
                alert("Enter valid credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="geolocation" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' onChange={onChange} id="geolocation" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
                </form>
            </div>
        </>
    );
};

export default Signup;
