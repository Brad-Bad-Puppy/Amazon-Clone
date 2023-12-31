import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Login from './Login';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
            {/* <Header /> */}
        <Switch>
          <Route path="/login">
              <h1>Login page</h1>
              <Login/>

        </Route>
          <Route path="/checkout">
              <Header />
                <Checkout />
                </Route>
                <Route path="/">
              <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
