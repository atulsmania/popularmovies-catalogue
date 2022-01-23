import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";
import { configStore } from "store";
import { Footer } from "components";
import { MovieDetails, MoviesPage, Favorites } from "containers";
import "styles.css";

function App() {
  return (
    <Provider store={configStore()}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/details/:id" component={MovieDetails} />
            <Route exact path="/:catagory?/:page?" component={MoviesPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
