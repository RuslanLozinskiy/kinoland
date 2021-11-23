import { Route, Router, Switch } from "react-router-dom";

import Layout from "./Layout";
import ShowInfoCurrentPage from "../CurrentPages/CurrentMovie/infoCurrentMovie/showInfoCurrentPage";
import { createBrowserHistory } from "history";
import ShowTrailer from "../CurrentPages/CurrentMovie/trailer/showTrailer";
import CurrentMovie from "../pages/MoviePage/CurrentMovie";
import CurrentSerial from "../pages/SerialPage/CurrentSerial";
import SearchMovies from "../pages/SearchMovies/SearchMovies";
import ActorPage from "../pages/ActorPage/ActorPage";
import Actors from "../CurrentPages/CurrentMovie/Actors/Actors";
import SearchInput from "../pages/SearchMovies/searchInput";
import Movies from "../pages/Movies/Movies";
import Home from "../pages/Home/Home";
function Routes() {
  const customHistory = createBrowserHistory();

  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/kinoland/serials">
          <Layout>
            <Movies/>
          </Layout>
        </Route>
        <Route exact path="/kinoland/">
          <Layout>
            <Home/>
          </Layout>
        </Route>
        <Route exact path="/kinoland/serials/page/:pageId">
          <Layout>
            <Movies />
          </Layout>
        </Route>
        <Route exact path="/kinoland/serials/genre/:genreId/page/:pageId">
          <Layout>
            <Movies />
          </Layout>
        </Route>
        <Route
          exact
          path="/kinoland/serials/genre/:genreId/year/:yearId/page/:pageId"
        >
          <Layout>
            <Movies />
          </Layout>
        </Route>
        <Route
          exact
          path="/kinoland/serials/genre/:genreId/year/:yearId/sort/:sortId/page/:pageId"
        >
          <Layout>
            <Movies />
          </Layout>
        </Route>

        <Route exact path="/kinoland/movies/page/:pageId">
          <Layout>
            <Movies></Movies>
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/genre/:genreId/page/:pageId">
          <Layout>
            <Movies></Movies>
          </Layout>
        </Route>
        <Route
          exact
          path="/kinoland/movies/genre/:genreId/year/:yearId/page/:pageId"
        >
          <Layout>
            <Movies></Movies>
          </Layout>
        </Route>
        <Route
          exact
          path="/kinoland/movies/genre/:genreId/year/:yearId/sort/:sortId/page/:pageId"
        >
          <Layout>
            <Movies></Movies>
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/:movieId/details">
          <Layout>
            <CurrentMovie>
              <ShowInfoCurrentPage />
            </CurrentMovie>
          </Layout>
        </Route>
        <Route exact path="/kinoland/person/:personId">
          <Layout>
            <ActorPage />
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/:movieId/videos">
          <Layout>
            <CurrentMovie>
              <ShowTrailer />
            </CurrentMovie>
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/:movieId/actors">
          <Layout>
            <CurrentMovie>
              <Actors />
            </CurrentMovie>
          </Layout>
        </Route>
        <Route exact path="/kinoland/serial/:serialId/details">
          <Layout>
            <CurrentSerial>
              <ShowInfoCurrentPage />
            </CurrentSerial>
          </Layout>
        </Route>
        <Route exact path="/kinoland/serial/:serialId/videos">
          <Layout>
            <CurrentSerial>
              <ShowTrailer />
            </CurrentSerial>
          </Layout>
        </Route>
        <Route exact path="/kinoland/serial/:serialId/actors">
          <Layout>
            <CurrentSerial>
              <Actors />
            </CurrentSerial>
          </Layout>
        </Route>
        <Route exact path="/kinoland/search">
          <Layout>
            <SearchInput />
          </Layout>
        </Route>
        <Route exact path="/kinoland/search/query">
          <Layout>
            <SearchInput />
            <SearchMovies />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
