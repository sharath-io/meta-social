import './App.css';
import {Navbar} from './components/index';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className="col col-one" ><Navbar/></div>
        <div className="col col-two">User feed</div>
        <div className="col col-three" >others</div>
      </div>
    </div>
  );
}

export default App;
