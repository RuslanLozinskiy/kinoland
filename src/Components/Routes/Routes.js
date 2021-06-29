import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./Layout";
import Movies from "../MainPage/Content/Movies/Movies";
import Home from "../MainPage/Content/Home/Home";
import Serials from "../MainPage/Content/TV_serials/Serials";
import CurrentMovie from "../MainPage/Content/Movies/MoviePage/CurrentMovie";
import CurrentSerial from "../MainPage/Content/TV_serials/SerialPage/CurrentSerial";
import NowPlaying from "../MainPage/Content/Movies/NowPlaying/NowPlaying";
import TopRated from "../MainPage/Content/Movies/TopRated/TopRated";
import OnTheAir from "../MainPage/Content/TV_serials/OnTheAir/OnTheAir";
import TopRatedSerials from "../MainPage/Content/TV_serials/TopRated/TopRatedSerials";
import SearchMovies from "../MainPage/Content/SearchMovies/SearchMovies";

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
              <Route exact path="/kinoland/movies/:movieId">
          <Layout>
            <CurrentMovie />
          </Layout>
        </Route>

              <Route exact path="/kinoland/serial/:movieId">
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
