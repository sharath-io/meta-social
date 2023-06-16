import {NavLink} from 'react-router-dom';

import './navbar.css';

export function Navbar(){
    
    return (
        <div className="navbar-container">
            <div className="brand-name">meta-social</div>
            <NavLink to="/"  className="nav-item">Home</NavLink>
            <NavLink to="/explore"  className="nav-item">Scroll</NavLink >
            <NavLink to="/bookmark"  className="nav-item">Bookmarks</NavLink >
            {/* <NavLink to="/" className="nav-item">Liked posts</NavLink > */}
        </div>
    )
}