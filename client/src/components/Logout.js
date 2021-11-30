import React, { Component } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'

function Logout({ gym, onLogout }) {
  function handleLogout() {
    fetch("/Logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      {gym ? (
        <div>
          <p>Welcome, {trainer.name}!</p>
        </div>
      ) : (
        <Link to="/signup">LogOut</Link>
      )}
    </header>
  );
}

export default Logout;