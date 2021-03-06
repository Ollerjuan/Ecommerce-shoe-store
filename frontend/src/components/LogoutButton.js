import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import './Logoutbutton.css';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button className='logout_button' onClick={() => logout()}>
        Log out
    </button>
    )
  )
}

export default LogoutButton