import React from "react";
import WorldClass from "./WorldClass";
import WorldWild from "./WorldWild";
import PrivateChauffeur from "./PrivateChauffeur";
import ProfessionalChauffeur from "./ProfessionalChauffeur";
import ChauffeurHero from "./ChauffeurHero";
import Services from "../Component/Services";

const ChoufferServices = () => {
  return (
    <div>
      <ChauffeurHero />
      <Services />
      <WorldClass />
      <WorldWild />
      <PrivateChauffeur />
      <ProfessionalChauffeur />
    </div>
  );
};

export default ChoufferServices;
