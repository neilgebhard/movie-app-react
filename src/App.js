import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/util/ScrollToTop";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import "./App.css";

const HomePage = React.lazy(() => import("./components/Home"));
const MoviePage = React.lazy(() => import("./components/MoviePage/MoviePage"));
const SearchResults = React.lazy(() => import("./components/Search/SearchResults"));

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
