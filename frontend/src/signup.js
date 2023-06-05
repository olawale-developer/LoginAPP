import React from "react";
import {Link} from 'react-router-dom'

export default function Signup(){
    return (
        <div>
        <div>
            <form action="">
            <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Email' required/>                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' required/>                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>password</strong></label>
                    <input type='password' placeholder='Enter Password' required/>
                </div>
                <button className='btn'><strong>Sign up</strong></button>
                <p>You are agree to the terms and policies</p>
                <Link to="/">Log in</Link>
            </form>

        </div>
      </div>
    )
}