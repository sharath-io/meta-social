import { Routes,Route, NavLink,useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import {Navbar} from './components/index';
import { RequiredAuth } from './components/requiredAuth';
import {Home,Explore,Bookmark,Login,Signup,Profile} from './pages/index';
import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';
import { Liked } from './pages/liked';
import { RightSidebar } from './components/RightSidebar/rightSidebar';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const {authState,  userLogout} = useContext(AuthContext);
  return (
    <div className="App">
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
            <Route path="/profile/:username" element={<RequiredAuth><Profile/></RequiredAuth>}/>
          </Routes>
          {
            !authState.isLoggedIn 
            && <div className="meta-media">
                  <div className="meta-media-details">
                    <h1>Welcome to meta-social</h1>
                    <p>where you can post and share about :</p>
                    <ul>
                      <li>- Your interests</li>
                      <li>- Share Projects</li>
                      <li>- Your experience</li>
                      <li>- collaborate with others</li>
                    </ul>
                  </div>
                  <img src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='meta-social' className="banner"/>
               </div>
          }
          </div>
      
        <div className="col col-three">
          {authState.isLoggedIn ? 
           <div>
            <div  className='login-signup'>
              <button className='signup-btn'  onClick={()=> navigate(`/profile/${authState.user.username}`)}>Profile</button>
              <button className='login-btn'  onClick={userLogout}>Logout</button>
            </div>
              <div>
                  <RightSidebar/>
              </div>
            
           </div>
            : <div className='login-signup'>
                 {location.pathname!=='/login' &&<NavLink to="/login"><button className='login-btn'>Login</button></NavLink>}
                 {location.pathname!=='/signup' &&<NavLink to="/signup"><button className='signup-btn'>Join meta-social</button></NavLink> }
              </div>
          }
          
           <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
           </Routes>
        </div>
        
      </div>

    </div>
  );
}

export default App;