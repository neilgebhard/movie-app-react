import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Layout/Header";
import HomePage from "./components/Home";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchResults from "./components/Search/SearchResults";
import Footer from "./components/Layout/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/movie/:movieId">
          <MoviePage />
        </Route>
        <Route path="/search/:searchText">
          <SearchResults />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
