/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {NavLink} from "react-router-dom";
//import {Nav} from "reactstrap";
// javascript plugin used to create scrollbars on windows
//import PerfectScrollbar from "perfect-scrollbar";

//import logo from "logo.svg";
//var ps;

const Sidebar = props => {
  const routes = props.routes;

  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
        <ul className="sidenav__list">
          {routes.map ((prop, key) => {
            if(prop.skip)return false;
            return (
              <li
                className="sidenav__list-item"
                key={key}
              >
                <NavLink  to={prop.layout + prop.path}>
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
    </aside>
  );
}

export default Sidebar;
