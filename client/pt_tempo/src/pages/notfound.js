import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import "./notFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>OoPs!</h1>
        <h1> 404 PAGE NOT FOUND</h1>
        <Link
          to={ROUTE.home}
          className="btn grey-text white "
          style={{ fontSize: "large", borderRadius: "20px"}}
        >
         Pagina Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
