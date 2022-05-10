import Diabetes from "../Disease/Diabetes";
import Disease from "../Disease/Disease";
import Heart from "../Disease/Heart";
import Lung from "../Disease/Lung";
import Tab from "../Disease/Table";
import Brain from "../Disease/Brain";
import Pharma from "../Disease/Pharma";
import LungTable from "../Disease/LungTable";
import BrainTable from "../Disease/BrainTable";
import DiabetesTable from "../Disease/DiabetesTable";
import HeartTable from "../Disease/HeartTable";

export const routes = [ 
    {
      path: "/lung",
      component: Lung,
      layout: "/disease",
      key:1,
    },
    {
      path: "/diabetes",
      component: Diabetes,
      layout: "/disease",
      key:2,
    },
    {
        path: "/choice",
        component: Disease,
        layout: "/disease",
        key:3,
      },
      {
        path: "/heart",
        component: Heart,
        layout: "/disease",
        key:4,
      },
      {
        path: "/brain",
        component: Brain,
        layout: "/disease",
        key:5,
      },
      {
        path: "/allHistory",
        component: Tab,
        layout: "/disease",
        key:6,
      },
      {
        path: "/pharma",
        component: Pharma,
        layout: "/disease",
        key:7,
      },
      {
        path: "/LungAnalytics",
        component:LungTable,
        layout: "/disease",
        key:8,
      },
      {
        path: "/HeartAnalytics",
        component:HeartTable,
        layout: "/disease",
        key:9,
      },
      {
        path: "/DiabetesAnalytics",
        component:DiabetesTable,
        layout: "/disease",
        key:10,
      },
      {
        path: "/BrainAnalytics",
        component:BrainTable,
        layout: "/disease",
        key:11,
      },
];