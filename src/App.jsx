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
        {/* <Route index  element={<PrivateHome />} /> */}
        <Route index  element={<Dashboard />} />
        {/* <Route index  element={<Home />} /> */}
        <Route  path="/sinformer"  element={<Sinformer />} />
        <Route  path="/utilisateurs/gestion"  element={<GestionUtilisateurs />} />
        <Route  path="/utilisateurs/demandes"  element={<DemandeInscription />} />
        <Route  path="/produits/gestion"  element={<GestionProduits />} />
        <Route  path="/produits/ajout"  element={<AjoutProduits />} />

        <Route  path="/notification/eeim"  element={<NotificationEEIM />} />
        <Route  path="/notification/mapi"  element={<NotificationMAPI />} />
        <Route  path="/notification/pqif"  element={<NotificationPQIF />} />








        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
