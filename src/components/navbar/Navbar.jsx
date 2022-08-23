import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ authState, setAuthState }) {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };
  return (
    <>
      {!authState
        ? (<></>) : (
          <nav className="navbar zalupa fixed-top">
            <div className="container-fluid">
              <NavLink to="/home" className="navbar-brand">ХОЛОДОС</NavLink>
              <NavLink to="/home" className="nav-link middle">ХОЛОДОС</NavLink>
              <button type="submit" onClick={logoutHandler} className="btn btn-danger">Выйти!</button>
            </div>
          </nav>
        )}
    </>
  );
}
