import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/user-routes/ProtectedRoute";
import { routes } from "./routes";
import { Layout } from "react-feather";
import AppWrapper from "./layout/AppWrapper";

function App() {
  return (
    <Routes>
          {/* {routes.map( (route, index) => {
            return   <Route key={index} path={route.path} element={route.element} />
          }
          )} */}
      <Route path="/" element={<AppWrapper />}>

      {routes.map((route, index) =>
        route.isProtected ? (
          <Route key={index} element={<ProtectedRoute />}>
            <Route {...route} />
          </Route>
        ) : (
          <Route key={index} path={route.path} element={route.element} />
          )
          )}
          </Route>
    </Routes>
  );
}

export default App;
