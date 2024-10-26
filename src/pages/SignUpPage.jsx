import Logo from "@/images/logo.jpeg";
import {
  AtSign,
  BriefcaseBusiness,
  Upload,
  User,
  UserRoundCog,
} from "lucide-react";

import {
  Stepper,
  Step,
  Button,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function FormChoixType({ change }) {
  return (
    <div className="flex w-80 ml-24 flex-col gap-6 ">
      <label
        htmlFor="role_utilisateur"
        className="  text-sm font-medium text-gray-900 dark:text-white"
      >
        Veuillez séléctionner le tye de compte à créer
      </label>

      <select
        id="role_utilisateur"
        name="role_utilisateur"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => change(e)}
      >
        <option>{""}</option>
        <option value="consommateur">Consommateur</option>
        <option value="professionnel_sante">Professionnel de la santé</option>
        <option value="PRV_exploitant">PRV exploitant</option>
        <option value="responsable_organisme_reglementation">
          Responsable d'organisme de reglementation
        </option>
      </select>
    </div>
  );
}

export function FormInfoPerso({ change, userData }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="prenom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Prenom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Babacar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.prenom}
          />
        </div>
        <div>
          <label
            htmlFor="nom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Diop"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.nom}
          />
        </div>
        <div>
          <label
            htmlFor="dateNaissance"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date de naissance
          </label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.dateNaissance}
          />
        </div>
        <div>
          <label
            htmlFor="sexe"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sexe
          </label>
          <select
            id="sexe"
            name="sexe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => change(e)}
          >
            <option>{""}</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="profession"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Etudiant"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.profession}
          />
        </div>
        <div>
          <label
            htmlFor="adresse"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="keur Massar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.adresse}
          />
        </div>
        <div>
          <label
            htmlFor="telephone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="keur Massar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.telephone}
          />
        </div>
      </div>
    </>
  );
}

export function FormIdentifiants({ change , userData}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="exemple@gmail.com"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.email}

          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            placeholder="••••••••"
            defaultValue={userData.password}

          />
        </div>
        <div>
          <label
            htmlFor="password_confirmation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirmer votre mot de passe
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.password_confirmation}

          />
        </div>
      </div>
    </>
  );
}

export function FormJustificatifs({ change }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <label
            htmlFor="structure_travail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom de la structure
          </label>
          <input
            type="text"
            id="structure_travail"
            name="structure_travail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
          />
        </div>
        <div>
          <label
            htmlFor="adresse_structure_travail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adresse de la structure
          </label>
          <input
            type="text"
            id="adresse_structure_travail"
            name="adresse_structure_travail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Keur Massar"
            required
            onChange={(e) => change(e)}
          />
        </div>

        <div>
          <label
            htmlFor="files"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fichiers justificatifs
          </label>
          <p className="text-xs  ">
            Vous devrez fournir :
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par
            <br /> l'ordre professionnel d'appartenance
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par <br /> l'établissement de santé ou la strructure
            <br /> * une photocopie legalisée du contrat de travail signé avec{" "}
            <br /> l'établissement de santé ou la structure
          </p>

          <p className="text-xs ">
            NB : Les fichiers doivent etre compressés au format Zip (Taille max.
            )
          </p>
          <input
            type="file"
            id="files"
            name="files"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
          />
        </div>
      </div>
    </>
  );
}

const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  // useEffect(() => {
  //   console.log(userData);
  // });

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const [userData, setUserData] = useState({
    role_utilisateur: "",
    nom: "",
    prenom: "",
    sexe: "",
    adresse: "",
    telephone: "",
    profession: "",
    dateNaissance: "",
    email: "",
    password: "",
    password_confirmation: "",
    // specilité: "",
    // Est_point_focal: null,
    // district_lOCALITE: "",
    structure_travail: "",
    Adresse_structure: "",
    files: null,
  });
  const change = (e) => {
    // if (e.target.name==="files") {
    //   setUserData({ ...userData, [files]: e.target.files[0]})
    // }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className=" mx-auto md:h-screen lg:py-0 ">
        <div className="flex flex-row items-center justify-center my-10  ">
          <img src={Logo} className="w-12 object-cover  h-12 rounded-full" />
          <h5 className="font-semibold my-4 mx-2 md:order-0 text-white">
            Sama pharmacovigile
          </h5>
        </div>
        {/* <div className="flex flex-col items-center justify-center mx-auto "> */}
        <div className="flex justify-center  w-3/5 mx-auto  rounded-lg  dark:border   xl:p-0 bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className=" sm:pt-10">
            <h1 className="text-xl mb-5  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Creation de compte
            </h1>
            <div className="w-96 mb-16  mx-16">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step className="">
                  <UserRoundCog />

                  <div className="absolute -bottom-9 w-max text-center  ">
                    <Typography
                      variant="h6"
                      color={activeStep === 0 ? "light-blue" : "white"}
                    >
                      Type de compte
                    </Typography>
                  </div>
                </Step>
                <Step className="">
                  <User />
                  <div className="absolute -bottom-9 w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 1 ? "light-blue" : "white"}
                    >
                      Infos
                    </Typography>
                  </div>
                </Step>
                <Step className="">
                  <AtSign />
                  <div className="absolute -bottom-9 w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 2 ? "light-blue" : "white"}
                    >
                      Identifiants
                    </Typography>
                  </div>
                </Step>
                <Step>
                  <BriefcaseBusiness />
                  <div className="absolute -bottom-9 w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 3 ? "light-blue" : "white"}
                    >
                      {/* Info <br /> supplementaire */}
                      Justificatif
                    </Typography>
                  </div>
                </Step>
              </Stepper>
            </div>
            <form className=" mx-auto  ">
              {/*mb-16 mb-16 space-y-4 md:space-y-6 */}

              {activeStep === 0 ? <FormChoixType change={change} /> : null}

              {activeStep === 1 ? (
                <FormInfoPerso change={change} userData={userData} />
              ) : null}

              {activeStep === 2 ? <FormIdentifiants change={change} userData={userData}/> : null}

              {activeStep === 3 ? <FormJustificatifs change={change} userData={userData} /> : null}
            </form>
            <div className="my-10  flex justify-between">
              <Button onClick={handlePrev} disabled={isFirstStep}>
                Précedent
              </Button>
              <Button onClick={handleNext} disabled={isLastStep}>
                Suivant
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default SignUpPage;
