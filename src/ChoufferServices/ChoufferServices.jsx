import React from "react";
import WorldClass from "./WorldClass";
import WorldWild from "./WorldWild";
import PrivateChauffeur from "./PrivateChauffeur";
import ProfessionalChauffeur from "./ProfessionalChauffeur";

const ChoufferServices = () => {
  return (
    <div>
      <WorldClass />
      <WorldWild />
      <PrivateChauffeur />
      <ProfessionalChauffeur />
    </div>
  );
};

export default ChoufferServices;
