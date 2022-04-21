const Dashboard = () => import("../views/Dashboard.vue");

export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { layout: "default" },
  },
];
