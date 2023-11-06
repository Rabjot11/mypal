import React from 'react';
import './NewsLetter.css';

export function Newsletter() {
    return(
        <div className='newsletter'>
         <h1>Get Exclusive Offers On Your Email</h1>
         <p>Subscribe To Our Newsletter And Stay Updated </p>
<div>
<input type="email" placeholder='your email id'/>
<button>subscribe</button>

    </div>    
        </div>
        
    )
}

