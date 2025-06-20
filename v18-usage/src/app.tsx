import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { isSplitRoute, routes } from "./config/route";

export const App = () => {
  console.log(routes);
  return (
    <BrowserRouter>
      <nav>
        {routes.map((route, idx) => {
          if (isSplitRoute(route)) {
            return (
              <>
                <br />
                <br />
              </>
            );
          }

          return (
            <React.Fragment key={route.path}>
              <Link key={route.path} to={route.path}>
                {route.name}
              </Link>
              <span> | </span>
            </React.Fragment>
          );
        })}
      </nav>
      <Routes>
        {routes.map((route) => {
          if (isSplitRoute(route)) {
            return null;
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export const App2 = () => {
  return <div>asdfsf</div>;
};
