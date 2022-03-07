import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, sestIsLoggedIn] = useState(false);
  return(
    <Router>
      {
        // isLoggedIn ? () : ()
        isLoggedIn ? (
          <Route path="/">
            <Home />
          </Route>
        ) : (
          <Route path="/">
            <Auth/>
          </Route>
        )}
      
    </Router>
  );
}

export default AppRouter;