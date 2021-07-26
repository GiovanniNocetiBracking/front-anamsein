import Dashboard from "views/Dashboard.js"
import Patients from "views/Patients.js"
import Dates from "views/Dates.js"

const dashboardRoutes = [
  {
    path: "/patients",
    name: "Pacientes",
    icon: "nc-icon nc-badge",
    component: Patients,
    layout: "/admin",
  },
  {
    path: "/dates",
    name: "Citas",
    icon: "nc-icon nc-watch-time",
    component: Dates,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Reportes",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
]

export default dashboardRoutes
