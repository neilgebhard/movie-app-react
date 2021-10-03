import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/util/ScrollToTop";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import "./App.css";
import HomePage from "./components/Pages/Home";
import MoviePage from "./components/Pages/Movie";
import SearchResults from "./components/Pages/Search";

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
