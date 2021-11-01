import { Route, Router, Switch } from "react-router-dom";

import Layout from "./Layout";
import Movies from "../MainPage/Content/Movies/Movies";
import NowPlaying from "../MainPage/Content/Movies/NowPlaying/NowPlaying";
import OnTheAir from "../MainPage/Content/TV_serials/OnTheAir/OnTheAir";
import Serials from "../MainPage/Content/TV_serials/Serials";
import ShowInfoCurrentPage from "../CurrentPages/CurrentMovie/infoCurrentMovie/showInfoCurrentPage";
import TopRated from "../MainPage/Content/Movies/TopRated/TopRated";
import TopRatedSerials from "../MainPage/Content/TV_serials/TopRated/TopRatedSerials";
import { createBrowserHistory } from "history";
import ShowTrailer from "../CurrentPages/CurrentMovie/trailer/showTrailer";
import CurrentMovie from "../pages/MoviePage/CurrentMovie";
import CurrentSerial from "../pages/SerialPage/CurrentSerial";
import SearchMovies from "../pages/SearchMovies/SearchMovies";
import Home from "../MainPage/Content/Home/Home";
import ActorPage from "../pages/ActorPage/ActorPage";
import Actors from "../CurrentPages/CurrentMovie/Actors/Actors";

function Routes() {
  const customHistory = createBrowserHistory();

  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/kinoland/serials">
          <Layout>
            <Serials />
          </Layout>
        </Route>
        <Route exact path="/kinoland/serials/ontheair">
          <Layout>
            <OnTheAir />
          </Layout>
        </Route>
        <Route exact path="/kinoland/serials/toprated">
          <Layout>
            <TopRatedSerials />
          </Layout>
        </Route>
        <Route exact path="/kinoland/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/nowplaying">
          <Layout>
            <NowPlaying />
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies">
          <Layout>
            <Movies />
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/toprated">
          <Layout>
            <TopRated />
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
            <SearchMovies />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
