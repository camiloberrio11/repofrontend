import { RouteInfo } from "./vertical-menu.metadata";

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tableros",
    icon: "ft-pie-chart",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
    validateAdmin: true,
  },
  {
    path: "/assigned-to-me",
    title: "Asignado a mi",
    icon: "ft-tag",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
    validateAdmin: false,
  },
  {
    path: "/history",
    title: "Historial gestionados",
    icon: "ft-clipboard",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
    validateAdmin: false,
  },
];
