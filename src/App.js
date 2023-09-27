import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/user-routes/ProtectedRoute";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route,index) =>
          route.isProtected ? (
            <Route key={index} element={<ProtectedRoute />}>
              <Route {...route}/>
            </Route>
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;