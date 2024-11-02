import SidebarLinkGroup from "./SidebarLinkGroup";

const SidebarLinks = ({ pathname, setSidebarExpanded }) => {
  const role_utilisateur = "administrateur";

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
              titre: "Manifestation post vaccinale indesrirable (MAPI)",
              isActive: pathname === "/notification/mapi",
            },
            {
              id: new Date().getTime(),
              to: "/notification/eeim",
              titre: "Effet/événement indesrirables des médicaments (EEIM)",
              isActive: pathname === "/notification/eeim",
            },
          ],
        },
      ].map(({activecondition,key,titre,liste_sous_section}, index) => {
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
      })

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
                to: "/notification/eeim",
                titre: "Historique des notifications",
                isActive: pathname === "/notification/eeim",
              },
            ],
          },
        ].map(({activecondition,key,titre,liste_sous_section}, index) => {
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
        })

    // default:
    //     break;
  }

};

export default SidebarLinks;
