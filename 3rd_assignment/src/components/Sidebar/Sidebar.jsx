import React from "react";

import { NavLink, Link, useNavigate } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("level");
    navigate("/login");
  };

  const isLogin = () => {
    return localStorage.getItem("level");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-taxi-line"></i>
          </span>{" "}
          UberX
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span onClick={handleLogout}>
            <i className="ri-logout-circle-line"></i>
            {isLogin() ? "Logout" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
