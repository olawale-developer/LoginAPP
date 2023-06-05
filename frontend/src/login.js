import React from  'react'
import {Link} from 'react-router-dom'

export default function Login(){
    return(
      <div>
        <div>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email'/>                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>password</strong></label>
                    <input type='password' placeholder='Enter Password'/>
                </div>
                <button className='btn'><strong>Log in</strong></button>
                <p>You are agree to the terms and policies</p>
                <Link to="/signup">Create Account</Link>
            </form>

        </div>
      </div>
    )
}