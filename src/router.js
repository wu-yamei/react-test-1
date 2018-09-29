import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.js";
import Share from "./share.js";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// then our route config
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/share",
    component: Share
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfig = () => (
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

export default RouteConfig;