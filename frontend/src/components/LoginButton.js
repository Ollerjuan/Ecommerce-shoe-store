import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const Loginbutton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0 ();

  return (
      !isAuthenticated && (
          <button className='login_button' onClick={()=> loginWithRedirect()}>
        Log in
             </button>
  
      )
  )
}

export default Loginbutton;