import logo from './logo.svg';
import './App.css';
import {BothNavbar} from "./utils/Bothnavbar"
import { Products } from './utils/products';
import {Login} from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
       <BothNavbar></BothNavbar>
       <Products></Products>
       
    </div>
  );
}

export default App;
