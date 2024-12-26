import { Typography,Carousel } from "@material-tailwind/react";
import { Card, Button, Dropdown, List, Modal, Spinner } from "flowbite-react";

import imgEEIM from "@/images/eeim.png";


const ModalPresentationNotif = ({selectNotif,openModal,annulerSelectionNotif}) => {
    return (
        <Modal
              show={openModal}
              size="7xl"
              // position={modalPlacement}
              onClose={() => {
                annulerSelectionNotif();
                // setProduitSelectionne({});
              }}
            >
              <Modal.Header>Details de la notification</Modal.Header>
              <Modal.Body>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                      <h5 className="text-2xl md:text-2xl pb-3 text-gray-800 dark:text-gray-100 font-bold">
                        Produit de santé
                      </h5>
                      <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <Carousel className="rounded-xl col-span-2">
                          {selectNotif.produits.map((produit, index) => {
                            return (
                              <div
                                className="relative h-full w-full"
                                key={index}
                              >
                                <img
                                  src={imgEEIM}
                                  // "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                  alt="image 1"
                                  className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
                                  <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                      variant="h1"
                                      color="white"
                                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                      {produit.produit_sante.nom_produit}
                                    </Typography>
                                    <div className="grid grid-cols-2 gap-3 w-full text-gray-100  mx-auto">
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Numero de lot :{" "}
                                        </span>
                                        {produit.numero_lot}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Provenance :{" "}
                                        </span>
                                        {produit.provenance}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date de peremption :{" "}
                                        </span>
                                        {produit.date_peremption}
                                      </div>
                                      {produit.produit_sante.type_produit !==
                                        "vaccin" && (
                                        <div className=" ">
                                          <span className="font-bold ">
                                            Posologie :{" "}
                                          </span>
                                          {produit.posologie}
                                        </div>
                                      )}
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date de debut de prise du produit :{" "}
                                        </span>
                                        {produit.date_debut_prise}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date de fin de prise :{" "}
                                        </span>
                                        {produit.date_fin_prise}
                                      </div>

                                      {produit.produit_sante.type_produit ===
                                        "autre" && (
                                        <div className=" ">
                                          <span className="font-bold ">
                                            Date de prise :{" "}
                                          </span>
                                          {produit.date_prise}
                                        </div>
                                      )}

                                      {produit.produit_sante.type_produit ===
                                        "vaccin" && (
                                        <>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Date d'ouverture du flacon :{" "}
                                            </span>
                                            {produit.date_ouverture_flacon}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Date de la vaccination :{" "}
                                            </span>
                                            {produit.date_vaccination}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Site d'administration :{" "}
                                            </span>
                                            {produit.site_administration}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Nombre de contact avec vaccin :{" "}
                                            </span>
                                            {produit.nombre_contact_vaccin}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Nom du solvant :{" "}
                                            </span>
                                            {produit.nom_solvant}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              numero de lot du solvant :{" "}
                                            </span>
                                            {produit.numero_lot_solvant}
                                          </div>
                                          <div className=" ">
                                            <span className="font-bold ">
                                              Date de peremption du solvant :{" "}
                                            </span>
                                            {produit.date_peremption_solvant}
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>
                    <div className="md:flex-1 px-4">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {selectNotif.type_notification !== "notification_pqif"
                          ? "Info sur le patient"
                          : "Info sur le constatateur"}
                      </h2>
                      <div className="mb-4 grid grid-cols-2 gap-5  w-full  py-5 mx-auto text-gray-700 dark:text-gray-300">
                        {selectNotif.type_notification !==
                        "notification_pqif" ? (
                          <>
                            <div className=" ">
                              <span className="font-bold">
                                Numero dossier :{" "}
                              </span>
                              {selectNotif.numero_dossier_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Prenom ou initial :
                              </span>
                              {selectNotif.prenom_initiale}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Nom ou initial :
                              </span>
                              {selectNotif.nom_initiale}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Adresse :</span>
                              {selectNotif.adresse_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Telephone :</span>
                              {selectNotif.tel_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Date de naissance :{" "}
                              </span>
                              {selectNotif.date_naissance_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Sexe :</span>
                              {selectNotif.sexe}
                            </div>
                            <div className=" col-span-2">
                              <span className=" font-bold ">
                                Antecedents medicaux/Facteurs de risque/Facteurs
                                associés :{" "}
                              </span>
                              {
                                selectNotif.antecedentsMedicaux_facteursRisques_facteursAssocies
                              }
                            </div>
                          </>
                        ) : (
                          <>
                            <div className=" ">
                              <span className="font-bold">
                                Numero dossier :{" "}
                              </span>
                              {selectNotif.numero_dossier_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Prenom :</span>
                              {selectNotif.prenom_constatateur}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Nom :</span>
                              {selectNotif.nom_constatateur}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Adresse :</span>
                              {selectNotif.adresse_constatateur}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">Telephone :</span>
                              {selectNotif.tel_constatateur}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Date de signalement de la suspicion de defaut de
                                qualité :{" "}
                              </span>
                              {selectNotif.date_signalement_suspicion_pqif}
                            </div>
                          </>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Evenement / Effet
                      </h2>
                      <div className="mb-4 grid grid-cols-2 gap-5  w-full  py-5 mx-auto ">
                        {selectNotif.type_notification !==
                        "notification_pqif" ? (
                          <>
                            <div className=" ">
                              <span className="font-bold ">
                                Description de lévenement :{" "}
                              </span>
                              {selectNotif.description_evenement}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Date d'apparition de l'evenement :{" "}
                              </span>
                              {selectNotif.date_apparition_evenement}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Date de disparition de l'evenement :{" "}
                              </span>
                              {selectNotif.date_disparition_evenement}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Réadministration du produit :{" "}
                              </span>
                              {selectNotif.readministration == "1"
                                ? "Oui"
                                : "Non"}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Réapparition de l'évenement apres
                                réadminstration:{" "}
                              </span>
                              {selectNotif.reapparition_apres_readministration ==
                              "1"
                                ? "Oui"
                                : "Non"}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Est ce qu'un traitement correcteur a été
                                appliqué ? :{" "}
                              </span>
                              {selectNotif.traitement_correcteur == "1"
                                ? "Oui"
                                : "Non"}
                            </div>
                            {selectNotif.traitement_correcteur == "1" && (
                              <div className=" ">
                                <span className="font-bold ">
                                  Traitement correcteur :{" "}
                                </span>
                                {selectNotif.text_traitement_correcteur}
                              </div>
                            )}
                            <div className=" ">
                              <span className="font-bold ">
                                Suivi patient :
                              </span>
                              {selectNotif.suivi_patient}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Evolution de la situation du patient :{" "}
                              </span>
                              {selectNotif.evolution_situation_patient}
                            </div>

                            <div className=" ">
                              <span className="font-bold ">
                                Les produits ont été prescrits pour :{" "}
                              </span>
                              {selectNotif.motif_prise_produits_sante}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className=" ">
                              <span className="font-bold ">
                                Date de survenue de l'incident :{" "}
                              </span>
                              {selectNotif.date_survenue_incident}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Moment de detection de l'incident :{" "}
                              </span>
                              {selectNotif.moment_detection_incident}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Mesure prise :{" "}
                              </span>
                              {selectNotif.mesure_prise}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Nature de l'incident :{" "}
                              </span>
                              {selectNotif.nature_incident}
                            </div>

                            <div className=" ">
                              <span className="font-bold ">
                                Circonstances de l'incident :{" "}
                              </span>
                              {selectNotif.circonstances_incident}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Conséquence(s) clinique(s) sur le patient et/ou
                                l’utilisateur:{" "}
                              </span>
                              {selectNotif.consequence_clinique == "1"
                                ? "Oui"
                                : "Non"}
                            </div>
                            {selectNotif.consequence_clinique == "1" && (
                              <div className=" ">
                                <span className="font-bold ">
                                  Description de l'évenement :{" "}
                                </span>
                                {selectNotif.description_evenement}
                              </div>
                            )}
                            <div className=" ">
                              <span className="font-bold ">
                                Date d'apparition de l'evenement :{" "}
                              </span>
                              {selectNotif.date_apparition_evenement}
                            </div>
                            <div className=" ">
                              <span className="font-bold ">
                                Date de disparition de l'evenement :{" "}
                              </span>
                              {selectNotif.date_disparition_evenement}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="flex justify-end	">
                <Button color="red" onClick={() => annulerSelectionNotif()}>
                  Fermer
                </Button>
              </Modal.Footer>
            </Modal>
    );
};

export default ModalPresentationNotif;