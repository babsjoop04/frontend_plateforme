import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  currentUser: {
    token: null,
    role_utilisateur: null,
    prenom: null,
    nom: null,
  },
  changeCurrentUser: () => {},
//   deconnexion: () => {},
});

const AuthProvider = ({children}) => {
  const persistedUser = {
    token: localStorage.getItem("token")|| null,
    role_utilisateur: localStorage.getItem("role_utilisateur")|| null,
    prenom: localStorage.getItem("prenom")|| null,
    nom: localStorage.getItem("nom")|| null,
  };
  // localStorage.getItem('theme');
  const [user, setUser] = useState(persistedUser);

  const changeCurrentUser = (userCredentials) => {
    setUser(userCredentials);

    for (const key in userCredentials) {
      localStorage.setItem(key, userCredentials[key]);
    }
  };

//   const deconnexion = () => {
//     setUser({
//         token: null,
//         role_utilisateur: null,
//         prenom: null,
//         nom: null,
//       });

//     // for (const key in user) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("role_utilisateur");
//       localStorage.removeItem("prenom");
//       localStorage.removeItem("nom");

//     // }
//   };


return <AuthContext.Provider value={{ currentUser: user, changeCurrentUser }}>{children}</AuthContext.Provider>;

};

export default AuthProvider;

export const useAuthProvider = () => useContext(AuthContext);

