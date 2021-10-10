import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tablero",
    icon: "ft-home",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/assigned-to-me",
    title: "Asignado a mi",
    icon: "ft-home",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/history",
    title: "Historial gestionados",
    icon: "ft-home",
    class: "dropdown nav-item",
    isExternalLink: false,
    submenu: [],
  },
];
