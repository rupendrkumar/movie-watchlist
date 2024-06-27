import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/add" component={AddMovie} />
          <Route path="/edit/:id" component={EditMovie} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
