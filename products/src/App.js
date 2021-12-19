import logo from './logo.svg';
import './App.css';
import {BothNavbar} from "./utils/Bothnavbar"
import { Products } from './utils/products';
import {Login} from './components/Login';
import {Route,Switch} from "react-router-dom";
import {Test} from "./utils/Test"
import {Random} from "./utils/random"
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}

       {/* <BothNavbar></BothNavbar> */}
       
       
       <Switch>
         <Route exact path = "/"><Products></Products></Route>
         <Route exact path = "/products"><Products/></Route>
         <Route exact path = "/productDetail/:id"><Test></Test></Route>
       </Switch>
    </div>
  );
}

export default App;
