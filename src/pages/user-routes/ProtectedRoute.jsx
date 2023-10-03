import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const [token, setToken] = useState(false);

  const navigate = useNavigate();
  const user = useSelector(store=> store.user)

  useEffect(() => {
    setToken(user?.isLoggedIn);
  }, []);

  return <>{token ? <Outlet /> : navigate("/home")}</>;
}

export default ProtectedRoute;
