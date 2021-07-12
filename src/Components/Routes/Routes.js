import { Route, Router, Switch } from "react-router-dom";

import CurrentMovie from "../MainPage/Content/Movies/MoviePage/CurrentMovie";
import CurrentSerial from "../MainPage/Content/TV_serials/SerialPage/CurrentSerial";
import Home from "../MainPage/Content/Home/Home";
import InfoCurrentMovie from "../MainPage/Content/ShowCurrentMovies/infoCurrentMovie/infoCurrentMovie";
import Layout from "./Layout";
import Movies from "../MainPage/Content/Movies/Movies";
import NowPlaying from "../MainPage/Content/Movies/NowPlaying/NowPlaying";
import OnTheAir from "../MainPage/Content/TV_serials/OnTheAir/OnTheAir";
import SearchMovies from "../MainPage/Content/SearchMovies/SearchMovies";
import Serials from "../MainPage/Content/TV_serials/Serials";
import TopRated from "../MainPage/Content/Movies/TopRated/TopRated";
import TopRatedSerials from "../MainPage/Content/TV_serials/TopRated/TopRatedSerials";
import Trailer from "../MainPage/Content/ShowCurrentMovies/trailer/Trailer";
import { createBrowserHistory } from "history";

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
              <InfoCurrentMovie />
            </CurrentMovie>
          </Layout>
        </Route>
        <Route exact path="/kinoland/movies/:movieId/videos">
          <Layout>
            <CurrentMovie>
              <Trailer/>
            </CurrentMovie>
          </Layout>
        </Route>
        <Route exact path="/kinoland/serial/:movieId/details">
          <Layout>
            <CurrentSerial />
          </Layout>
        </Route>
        <Route exact path="/kinoland/search/:name">
          <Layout>
            <SearchMovies />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;