import { useAuthProvider } from "../utils/AuthContext";
import SidebarLinkGroup from "./SidebarLinkGroup";

const SidebarLinks = ({ pathname, setSidebarExpanded }) => {
  const { currentUser, changeCurrentUser } = useAuthProvider();

  const role_utilisateur = "responsable_organisme_reglementation";
  // const role_utilisateur = currentUser.role_utilisateur;

  switch (role_utilisateur) {
    case "administrateur":
      return [
        {
          activecondition: pathname.includes("utilisateurs"),
          key: new Date().getTime(),
          titre: "Utilisateurs",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/utilisateurs/demandes",
              titre: "Demandes d'inscription",
              isActive: pathname === "/utilisateurs/demandes",
            },
            {
              id: new Date().getTime(),
              to: "/utilisateurs/gestion",
              titre: "Gestion des utilisateurs",
              isActive: pathname === "/utilisateurs/gestion",
            },
          ],
        },

        {
          activecondition: pathname.includes("/produits"),
          key: new Date().getTime(),
          titre: "Produit de sante",
          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/produits/ajout",
              titre: "Ajouter un produit",
              isActive: pathname === "/produits/ajout",
            },
            {
              id: new Date().getTime(),
              to: "/produits/gestion",
              titre: "Gestion des produits",
              isActive: pathname === "/produits/gestion",
            },
          ],
        },
      ].map(({ activecondition, key, titre, liste_sous_section }, index) => {
        return (
          <SidebarLinkGroup
            activecondition={activecondition}
            key={key + index}
            pathname={pathname}
            setSidebarExpanded={setSidebarExpanded}
            titre={titre}
            liste_sous_section={liste_sous_section}
          />
        );
      });

    case "consommateur":
      return [
        {
          activecondition: pathname.includes("/notification"),
          key: new Date().getTime(),
          titre: "Notifier",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/notification/pqif",
              titre: "Suspition de defaut de qualité (PQIF)",
              isActive: pathname === "/notification/pqif",
            },

            {
              id: new Date().getTime(),
              to: "/notification/eeim",
              titre: "Effet/événement indesrirables des médicaments (EEIM)",
              isActive: pathname === "/notification/eeim",
            },
            {
              id: new Date().getTime(),
              to: "/notifications/historique",
              titre: "Historique ",
              isActive: pathname === "/notifications/historique",
            },
          ],
        },
      ].map(({ activecondition, key, titre, liste_sous_section }, index) => {
        return (
          <SidebarLinkGroup
            activecondition={activecondition}
            key={key + index}
            pathname={pathname}
            setSidebarExpanded={setSidebarExpanded}
            titre={titre}
            liste_sous_section={liste_sous_section}
          />
        );
      });

    case "professionnel_sante":
      return [
        {
          activecondition: pathname.includes("/notification"),
          key: new Date().getTime(),
          titre: "Notifier",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/notification/pqif",
              titre: "Suspition de defaut de qualité (PQIF)",
              isActive: pathname === "/notification/pqif",
            },

            {
              id: new Date().getTime(),
              to: "/notification/mapi",
              titre: "Manifestation post vaccinale indésirable (MAPI)",
              isActive: pathname === "/notification/mapi",
            },

            {
              id: new Date().getTime(),
              to: "/notification/eeim",
              titre: "Effet/événement indesrirables des médicaments (EEIM)",
              isActive: pathname === "/notification/eeim",
            },
            {
              id: new Date().getTime(),
              to: "/notifications/historique",
              titre: "Historique ",
              isActive: pathname === "/notifications/historique",
            },
          ],
        },
      ].map(({ activecondition, key, titre, liste_sous_section }, index) => {
        return (
          <SidebarLinkGroup
            activecondition={activecondition}
            key={key + index}
            pathname={pathname}
            setSidebarExpanded={setSidebarExpanded}
            titre={titre}
            liste_sous_section={liste_sous_section}
          />
        );
      });

    case "PRV_exploitant":
      return [
        {
          activecondition: pathname.includes("/notification"),
          key: new Date().getTime(),
          titre: "Notifier",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/notification/pqif",
              titre: "Suspition de defaut de qualité (PQIF)",
              isActive: pathname === "/notification/pqif",
            },

            {
              id: new Date().getTime(),
              to: "/notification/mapi",
              titre: "Manifestation post vaccinale indésirable (MAPI)",
              isActive: pathname === "/notification/mapi",
            },

            {
              id: new Date().getTime(),
              to: "/notification/eeim",
              titre: "Effet/événement indesrirables des médicaments (EEIM)",
              isActive: pathname === "/notification/eeim",
            },
            {
              id: new Date().getTime(),
              to: "/notifications/historique",
              titre: "Historique ",
              isActive: pathname === "/notifications/historique",
            },
          ],
        },
        {
          activecondition: pathname.includes("/exploitant"),
          key: new Date().getTime(),
          titre: "Exploitant",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/exploitant/liste",
              titre: "Liste de mes exploitants",
              isActive: pathname === "/exploitant/liste",
            },

            {
              id: new Date().getTime(),
              to: "/exploitant/ajout",
              titre: "Demande d'ajout d'exploitant",
              isActive: pathname === "/exploitant/ajout",
            },

            
            
          ],
        },
        {
          activecondition: pathname.includes("/exploitation"),
          key: new Date().getTime(),
          titre: "Exploitation",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/exploitation/liste",
              titre: "Liste des exploitations",
              isActive: pathname === "/exploitation/liste",
            },

            {
              id: new Date().getTime(),
              to: "/exploitation/ajout",
              titre: "Demande d'exploitation",
              isActive: pathname === "/exploitation/ajout",
            },

            
          ],
        },
      ].map(({ activecondition, key, titre, liste_sous_section }, index) => {
        return (
          <SidebarLinkGroup
            activecondition={activecondition}
            key={key + index}
            pathname={pathname}
            setSidebarExpanded={setSidebarExpanded}
            titre={titre}
            liste_sous_section={liste_sous_section}
          />
        );
      });

    case "responsable_organisme_reglementation":
      return [
        {
          activecondition: pathname.includes("/notifications/"),
          key: new Date().getTime(),
          titre: "Notifications",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/notifications/liste",
              titre: "Liste des notifications non traitées",
              isActive: pathname === "/notifications/liste",
            },

            
          ],
        },
        {
          activecondition: pathname.includes("/traitement"),
          key: new Date().getTime(),
          titre: "Traitements",

          liste_sous_section: [
            {
              id: new Date().getTime(),
              to: "/notifications/traitement/pqif",
              titre: "Mes traitements en cours",
              isActive: pathname === "/notifications/traitement/pqif",
            },

            {
              id: new Date().getTime(),
              to: "/notifications/traitement/eeim",
              titre: "Historique de mes traitements",
              isActive: pathname === "/notifications/traitement/eeim",
            },
            
          ],
        },
      ].map(({ activecondition, key, titre, liste_sous_section }, index) => {
        return (
          <SidebarLinkGroup
            activecondition={activecondition}
            key={key + index}
            pathname={pathname}
            setSidebarExpanded={setSidebarExpanded}
            titre={titre}
            liste_sous_section={liste_sous_section}
          />
        );
      });

    // default:
    //     break;
  }
};

export default SidebarLinks;
