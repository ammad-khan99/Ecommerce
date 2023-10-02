import React from "react";
import { Route , Routes} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/user-routes/ProtectedRoute";
import { routes } from "./routes";
import AppWrapper from "./layout/AppWrapper";

function App() {
  return (
    <Routes>

      {routes.map((route, index) =>
        route.isProtected ? (
          <Route key={index} element={<ProtectedRoute />}>
          <Route path="/" element={<AppWrapper />}>
            <Route {...route} />
          </Route>
          </Route>
        ) : (
          <Route key={index} path={route.path} element={route.element} />
          )
          )}
    </Routes>
  );
}

export default App;
