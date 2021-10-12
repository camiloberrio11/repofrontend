import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tablero",
    icon: "ft-pie-chart",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/assigned-to-me",
    title: "Asignado a mi",
    icon: "ft-tag",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/history",
    title: "Historial gestionados",
    icon: "ft-clipboard",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
];
