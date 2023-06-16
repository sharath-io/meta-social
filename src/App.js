import { Routes,Route, NavLink } from 'react-router-dom';

import './App.css';
import {Navbar} from './components/index';
import {Home,Explore,Bookmark,Login,Signup} from './pages/index';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className="col col-one" ><Navbar/></div>

        <div className="col col-two">
              <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/explore" element={<Explore/>}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/signup" element={<Signup/>}/>
                 <Route path="/bookmark" element={<Bookmark/>}/>
              </Routes>
          </div>
      
        <div className="col col-three">
          <div className='login-signup'>
           <NavLink to="/login"><button className='login-btn'>Login</button></NavLink>
           <NavLink to="/signup"><button className='signup-btn'>Join meta-social</button></NavLink> 
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
