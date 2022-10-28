import React from "react";
import { Link, Outlet } from "react-router-dom";

function Schools() {
  return (
    <div>
      <div>
        <nav className="school-navbar">
          <ul>
            <li>
              <Link to="/schools/product"> Product </Link>
            </li>
            <li>
              <Link to="/schools/data"> Data </Link>
            </li>
            <li>
              <Link to="/schools/engineering"> Engineering </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />

     
    </div>
  );
}

export default Schools;
