import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/util/ScrollToTop";
import Header from "./components/Layout/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import HomePage from "./components/Pages/Home";
import MoviePage from "./components/Pages/Movie";
import SearchResults from "./components/Pages/Search";
import Footer from "./components/Layout/Footer";
import "./App.css";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
