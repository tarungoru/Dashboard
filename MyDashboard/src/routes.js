import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";




// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdContactSupport,
} from "react-icons/md";
import { FcLeft } from "react-icons/fc";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <i class="fa-solid fa-key"></i>,
    component: <MainDashboard />,
    
    
  },
  {
    name: "Product",
    layout: "/admin",
    path: "default",
    icon: <i class="fa-solid fa-cubes"></i>,
    
  },
  {
    name: "Customers",
    layout: "/admin",
    path: "default",
    icon: <i class="fa-regular fa-circle-user"></i>,
    
  },
  {
    name: "Income",
    layout: "/admin",
    path: "default",
    icon: <i class="fa-solid fa-coins"></i>,
    
  },
  {
    name: "Promote",
    layout: "/auth",
    path: "default",
    icon: <i class="fa-solid fa-percent border-1"></i>,
  },
  {
    name: "Help",
    layout: "/rtl",
    path: "default",
    icon: <i class="fa-regular fa-message"></i>,
  },
];

const arrow=[{
  icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>}

]
export default routes;
