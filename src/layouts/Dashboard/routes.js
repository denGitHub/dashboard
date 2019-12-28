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
import {User, Map, Device} from "../../pages";

var routes = [
  {
    path: "/device",
    name: "Add device",
    icon: "nc-icon nc-bank",
    component: Device,
    layout: "/user",
    skip:false
  },
  {
    path: "/map",
    name: "Map",
    icon: "nc-icon nc-bank",
    component: Map,
    layout: "/user",
    skip:false
  },
  {
    path: "/profile",
    name: "Map",
    icon: "nc-icon nc-bank",
    component: User,
    layout: "/user",
    skip:true
  }
];
export default routes;
