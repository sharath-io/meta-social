import './App.css';
import {Navbar} from './components/index';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className="col col-one" ><Navbar/></div>
        <div className="col col-two">
          <div className='display-content'>
             <div className='content-heading'>User feed</div>
          </div>
        </div>
        <div className="col col-three">
          <div className='login-signup'>
           <button className='login-btn'>Login</button>
           <button className='signup-btn'>Join meta-social</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
