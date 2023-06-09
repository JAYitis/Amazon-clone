import "./App.css";
import Checkout from "./Checkout";
import { Header } from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   return (
      //BEM
      <Router>
         <div className="app">
            <Header />
            <Switch>
               <Route path="/checkout">
                  <Checkout />
               </Route>
               <Route path="/">
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
