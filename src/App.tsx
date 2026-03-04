import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Outlet, Route, Routes} from "react-router-dom";
import {S} from '././components/pages/_styles.ts'
import {Error404} from "./components/pages/Error404.tsx";
import {Model} from "./components/pages/Model.tsx";
import {Prices} from "./components/pages/Prices.tsx";

const PATH = {
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/abibas',
  PAGE4: '/prices',

} as const;


const App = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink
            to={PATH.PAGE1}

          > Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink
            to={PATH.PAGE2}

          > Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink
            to={PATH.PAGE3}

          > Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink
            to={PATH.PAGE4}

          > Цены для оптовиков</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet/>
          {/*<Routes>*/}
          {/*  <Route*/}
          {/*    path="/"*/}
          {/*    element={<Navigate to={PATH.PAGE1} />}*/}
          {/*  />*/}
          {/*  <Route*/}
          {/*    path={PATH.PAGE1}*/}
          {/*    element={<Adidas />}*/}
          {/*  />*/}
          {/*  <Route*/}
          {/*    path={PATH.PAGE2}*/}
          {/*    element={<Puma />}*/}
          {/*  />*/}
          {/*  <Route*/}
          {/*    path={PATH.PAGE3}*/}
          {/*    element={<Abibas />}*/}
          {/*  />*/}
          {/*  <Route*/}
          {/*    path={PATH.PAGE4}*/}
          {/*    element={<Prices />}*/}
          {/*  />*/}

          {/*  <Route*/}
          {/*    path={'/:model/:id'}*/}
          {/*    element={<Model />}*/}
          {/*  />*/}


          {/*  <Route*/}
          {/*    path="/*"*/}
          {/*    element={<Error404 />}*/}
          {/*  />*/}
          {/*</Routes>*/}
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;