import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router';

import { routes } from "./routes";
// import "./index.css";
import { useState } from "react";

// Main App
const App = () => {
  const [loading, setLoading] = useState(true);

  // map data dari routes.js menjadi component Route
  const pages = () => {
    return (routes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      ))
    );
  }


  // RootProvider: Component yg ngewrap semua provider, kalau kalian pengen masukin
  // provider baru taruh di file RootProvider
  // lokasi: services (global) / context / RootProvider

  return (
    <div onLoad={() => setLoading(false)}>
      {(
        <>
          <Router>
            <Switch>
              {pages()}
              <Navigate to="/" /> 
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
