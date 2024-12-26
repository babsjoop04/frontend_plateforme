import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "@/css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateHome from "./pages/PrivateHome";
import Home from "./pages/Home";
import Sinformer from "./pages/Sinformer";
import GestionUtilisateurs from "./pages/GestionUtilisateurs";
import DemandeInscription from "./pages/DemandeInscription";

import GestionProduits from "./pages/GestionProduits";
import AjoutProduits from "./pages/AjoutProduits";

import NotificationEEIM from "./pages/NotificationEEIM";
import NotificationPQIF from "./pages/NotificationPQIF";
import NotificationMAPI from "./pages/NotificationMAPI";
import HistoriqueNotifications from "./pages/HistoriqueNotifications";
import Exploitants from "./pages/Exploitants";
import AjoutExploitant from "./pages/AjoutExploitant";
import Exploitations from "./pages/Exploitations";
import AjoutExploitation from "./pages/AjoutExploitation";
import Traitements from "./pages/Traitements";
import AuthControle from "./pages/AuthControle";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route index element={<PrivateHome />} />
        {/* <Route index  element={<Dashboard />} /> */}
        {/* <Route index  element={<Home />} /> */}
        <Route
          path="/sinformer"
          element={
            <AuthControle>
              <Sinformer />
            </AuthControle>
          }
        />
        <Route
          path="/utilisateurs/gestion"
          element={
            <AuthControle>
              <GestionUtilisateurs />
            </AuthControle>
          }
        />
        <Route
          path="/utilisateurs/demandes"
          element={
            <AuthControle>
              <DemandeInscription />
            </AuthControle>
          }
        />
        <Route
          path="/produits/gestion"
          element={
            <AuthControle>
              <GestionProduits />
            </AuthControle>
          }
        />
        <Route
          path="/produits/ajout"
          element={
            <AuthControle>
              <AjoutProduits />
            </AuthControle>
          }
        />

        <Route
          path="/notification/eeim"
          element={
            <AuthControle>
              <NotificationEEIM />
            </AuthControle>
          }
        />
        <Route
          path="/notification/mapi"
          element={
            <AuthControle>
              <NotificationMAPI />
            </AuthControle>
          }
        />
        <Route
          path="/notification/pqif"
          element={
            <AuthControle>
              <NotificationPQIF />
            </AuthControle>
          }
        />

        <Route
          path="/notifications/liste"
          element={
            <AuthControle>
              <HistoriqueNotifications />
            </AuthControle>
          }
        />

        <Route
          path="/notifications/historique"
          element={
            <AuthControle>
              <HistoriqueNotifications />
            </AuthControle>
          }
        />

        <Route
          path="/exploitant/liste"
          element={
            <AuthControle>
              <Exploitants />
            </AuthControle>
          }
        />
        <Route
          path="/exploitant/ajout"
          element={
            <AuthControle>
              <AjoutExploitant />
            </AuthControle>
          }
        />

        <Route
          path="/exploitation/liste"
          element={
            <AuthControle>
              <Exploitations />
            </AuthControle>
          }
        />
        <Route
          path="/exploitation/ajout"
          element={
            <AuthControle>
              <AjoutExploitation />
            </AuthControle>
          }
        />

        <Route
          path="/traitement/historique"
          element={
            <AuthControle>
              <Traitements historique={true} />
            </AuthControle>
          }
        />
        <Route
          path="/traitement/actif"
          element={
            <AuthControle>
              <Traitements />
            </AuthControle>
          }
        />

        <Route
          path="/login"
          element={
            <AuthControle>
              <LoginPage />
            </AuthControle>
          }
        />
        <Route
          path="/signup"
          element={
            
              <SignUpPage />
           
          }
        />
      </Routes>
    </>
  );
}

export default App;
