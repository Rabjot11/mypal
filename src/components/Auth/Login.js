import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './AuthPage.css';
import { useState } from 'react';

export const Login=() =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error);
    });
};


    return (
            <div className='authcont'>
                <img src='https://www.doggies.com/blog/wp-content/uploads/2017/10/pet-montage-1024x1024.jpg'
                    alt='login' />

                <form className='authform' onSubmit={login}>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email'  placeholder="Enter your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'  placeholder="Enter your Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link>
                    <Link 
                    to='/'
                        className='stylenone'

                    >
                        <button type='submit' className='btn' >Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
        
    )
}

