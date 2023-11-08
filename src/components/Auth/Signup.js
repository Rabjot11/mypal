import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './AuthPage.css';
import { useState } from 'react';

export const Signup =() =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        console.log(userCredentials);
    })
    .catch((error) => {
        console.log(error);
    });
}


    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src='https://www.doggies.com/blog/wp-content/uploads/2017/10/pet-montage-1024x1024.jpg'
                    alt='login' />

                <form className='authform' onSubmit={signup}>
                    <h1>Create Account</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder="Enter your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>                 
                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder="Enter your Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Already have an account?</p>
                    </Link>
                    <Link to='/login'
                        className='stylenone'
                    >
                        <button type='submit' className='btn' >Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}


