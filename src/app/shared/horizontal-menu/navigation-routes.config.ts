import { RouteInfo } from "../vertical-menu/vertical-menu.metadata";

export const HROUTES: RouteInfo[] = [

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
