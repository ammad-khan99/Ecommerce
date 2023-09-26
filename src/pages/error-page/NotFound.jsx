import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=> navigate(-1)} >Go Back</button>
      <h1>Error 404, Page not found !</h1>
    </div>
  );
}

export default NotFound;
