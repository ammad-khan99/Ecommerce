import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Link to={'/'}>Go Back</Link>
      <h1>Error 404, Page not found !</h1>
    </div>
  );
}

export default NotFound;
