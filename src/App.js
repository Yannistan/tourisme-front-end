import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Travels from "./components/Travels";
import Reservation from "./components/Reservation";

import IsLoggedInContextProvider from "./context/IsLoggedInContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/styles.css";

function App() {
  return (
    <>
      <Router>
        <IsLoggedInContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservation" exact component={Reservation} />
            <Route path="/travels" exact component={Travels} />
          </Switch>
          <Footer />
        </IsLoggedInContextProvider>
      </Router>
    </>
  );
}

export default App;
