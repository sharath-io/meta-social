import {NavLink} from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import './navbar.css';

export function Navbar(){
    
    return (
        <div className="navbar-container">
            <div className="brand-name">meta-social</div>
            <NavLink to="/"  className="nav-item"><IoHomeOutline className='nav-icon'/>Home</NavLink>
            <NavLink to="/explore"  className="nav-item"><MdOutlineExplore  className='nav-icon'/>Scroll</NavLink >
            <NavLink to="/bookmark"  className="nav-item"><MdOutlineBookmarkBorder  className='nav-icon'/>Bookmarks</NavLink >
            <NavLink to="/liked"  className="nav-item"><FavoriteBorderIcon  className='nav-icon'/>Liked Posts</NavLink >
            {/* <NavLink to="/" className="nav-item">Liked posts</NavLink > */}
        </div>
    )
}