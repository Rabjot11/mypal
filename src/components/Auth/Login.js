import React from 'react';
import { Link } from 'react-router-dom';

import './AuthPage.css';
export function Login(){
    return (
        <div className='authpage'>
           

            <div className='authcont'>
                <img src='https://www.doggies.com/blog/wp-content/uploads/2017/10/pet-montage-1024x1024.jpg'
                    alt='login' />

                <form className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link>
                    <Link to='/'
                        className='stylenone'

                    >
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

