import React from 'react';
import backgroundImage from '../assets/background.jpeg';
import { useState } from 'react';

const Register = () => {    

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-4xl min-h-screen text-black py-5 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-5 px-5">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <input className="px-5 mt-2 py-4 border-2 rounded-md block w-full" type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange} />
                        <input className="px-5 mt-2 py-4 border-2 rounded-md block w-full" type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                        <input className="px-5 mt-2 py-4 border-2 rounded-md block w-full" type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
                        <button className="w-full bg-blue-500 px-5 py-4 rounded-md mt-2" type="submit" value="Make New Account">Register</button>
                    </form>
                    <span>Already have an account ? <a href="/login" className="text-blue-500">Log In</a></span>
                </div>
            </div>
        </div>
    ) 
}

export default Register;