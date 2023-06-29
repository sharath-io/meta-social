import { Routes,Route, NavLink, useLocation } from 'react-router-dom';

import './App.css';
import Mockman from "mockman-js";
import {Navbar} from './components/index';
import { RequiredAuth } from './components/requiredAuth';
import {Home,Explore,Bookmark,Login,Signup, Logout} from './pages/index';
import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';
import { Liked } from './pages/liked';

function App() {
  const location = useLocation();
  const {authState, userLogout} = useContext(AuthContext);
  return (
    <div className="App">
      {location.pathname==='/mockman' ? 
      <Mockman/> :
      <div className='row'>
        <div className="col col-one" >
          <Navbar/>
        </div>

        <div   className="col col-two">
         <Routes>
            <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}/>
            <Route path="/explore" element={<RequiredAuth><Explore/></RequiredAuth>}/>
            <Route path="/bookmark" element={<RequiredAuth><Bookmark/></RequiredAuth>}/>
            <Route path="/liked" element={<RequiredAuth><Liked/></RequiredAuth>}/>
          </Routes>
          </div>
      
        <div className="col col-three">
          {authState.isLoggedIn ? 
            <div  className='login-signup'>
              <p>User loggedIn</p>
              <button onClick={userLogout} className='signup-btn'>Logout</button>
            </div>
            : <div className='login-signup'>
            <NavLink to="/login"><button className='login-btn'>Login</button></NavLink>
            <NavLink to="/signup"><button className='signup-btn'>Join meta-social</button></NavLink> 
            </div>
          }
          
           <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>}/>
           </Routes>
        </div>
        
      </div>
}
    </div>
  );
}

export default App;
