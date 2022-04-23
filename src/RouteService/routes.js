import Diabetes from "../Disease/Diabetes";
import Disease from "../Disease/Disease";
import Heart from "../Disease/Heart";
import Lung from "../Disease/Lung";

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
        component: Disease,
        layout: "/disease",
        key:5,
      }
];