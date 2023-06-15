import './navbar.css';

export function Navbar(){
    return (
        <div className="navbar-container">
            <div className="brand-name">meta-social</div>
            <div className="nav-item">Home</div>
            <div className="nav-item">Scroll</div>
            <div className="nav-item">Bookmarks</div>
            <div className="nav-item">Liked posts</div>
        </div>
    )
}