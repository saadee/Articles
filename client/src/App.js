import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./routing/PrivateRoute";
import myStore from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import DashBoard from "./StudentPortal/DashBoard/userProfile/Dashboard";
import ArticleHome from "./StudentPortal/Posts/ArticleHome";
import TextEditor from "./component/TextEditor";
import "./App.css";
import ArticleDisplay from "./StudentPortal/Posts/ArticleDisplay";
import login from "./Forms/signup/login";
import signup  from './Forms/signup/signup'
import EditArticle from './StudentPortal/Posts/EditArticle'
import Dashboard from "./StudentPortal/DashBoard/userProfile/Dashboard";
// import Dashboard from './views/Routing Components/BlockChain-component/Dashboard';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    myStore.dispatch(loadUser());
  }, []);
  return (
    <Provider store={myStore}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/signup" component={signup} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/articles" component={ArticleHome} />
            <Route exact path="/write" component={TextEditor} />
            <Route exact path="/article/:id" component={ArticleDisplay} />
            <Route exact path="/article/edit/:id" component={EditArticle} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
