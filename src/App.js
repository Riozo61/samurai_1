import React from "react";
import { connect, Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import store from "./redux/reduxStore";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div>
        <HeaderContainer />
        <Route
          path="/dialogs"
          render={() => {
            return (
              <React.Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </React.Suspense>
            );
          }}
        />
        <Route
          path="/profile/:userId?"
          render={() => {
            return (
              <React.Suspense fallback={<Preloader />}>
                <ProfileContainer />
              </React.Suspense>
            );
          }}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;
