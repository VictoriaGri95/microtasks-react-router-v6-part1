import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject
} from "react-router-dom";
import App from "../App.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import {Adidas} from "../components/pages/Adidas.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {Abibas} from "../components/pages/Abibas.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Model} from "../components/pages/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
import {Login} from "../components/pages/Login.tsx";


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECTEDPAGE: '/protectedpage',
  ERROR: '/error',
  LOGIN: '/login',

} as const;

export const PrivetRoute = () => {
  const isAuth = false
  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}


const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={PATH.ADIDAS} />
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas />
  },
  {
    path: PATH.PUMA,
    element: <Puma />
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />
  },
  {
    path: PATH.PRICES,
    element: <Prices />
  },
  {
    path: PATH.MODEL,
    element: <Model />
  },
  {
    path: PATH.LOGIN,
    element: <Login />
  },
  {
    path: PATH.ERROR,
    element: <Error404 />
  },
]
const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTEDPAGE,
    element: <ProtectedPage />
  },
]

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Navigate to={PATH.ERROR} />,
      children: [
        {
          element: <PrivetRoute />,
          children: privateRoutes
        },

        ...publicRoutes,
      ],

    },

  ]
);


//
// import {createBrowserRouter, Navigate} from "react-router-dom";
// import App from "../App.tsx";
// import {Error404} from "../components/pages/Error404.tsx";
// import {Adidas} from "../components/pages/Adidas.tsx";
// import {Puma} from "../components/pages/Puma.tsx";
// import {Abibas} from "../components/pages/Abibas.tsx";
// import {Prices} from "../components/pages/Prices.tsx";
// import {Model} from "../components/pages/Model.tsx";
// import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
// import {ProtectedRoute} from "./ProtectedRoute.tsx";
// import {Login} from "../components/pages/Login.tsx";
//
//
// export const PATH = {
//   ADIDAS: '/adidas',
//   PUMA: '/puma',
//   ABIBAS: '/abibas',
//   PRICES: '/prices',
//   MODEL: '/:model/:id',
//   PROTECTEDPAGE: '/protectedpage',
//   ERROR: '/error',
//   LOGIN: '/login',
//
// } as const;
//
//
// export const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <Navigate to={PATH.ERROR}/>,
//       children: [
//         {
//           path: PATH.ADIDAS,
//           element: <Adidas />
//         },
//         {
//           path: PATH.PUMA,
//           element: <Puma />
//         },
//         {
//           path: PATH.ABIBAS,
//           element: <Abibas />
//         },
//         {
//           path: PATH.PRICES,
//           element: <Prices />
//         },
//         {
//           path: PATH.MODEL,
//           element: <Model />
//         },
//         {
//           path: PATH.LOGIN,
//           element: <Login />
//         },
//         {
//           path: PATH.PROTECTEDPAGE,
//           element: (
//             <ProtectedRoute>
//               <ProtectedPage />
//             </ProtectedRoute>
//           )
//         },
//         {
//           path: PATH.ERROR,
//           element: <Error404 />
//         },
//
//
//       ],
//
//     },
//
//   ]
// );

