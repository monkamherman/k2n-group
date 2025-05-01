
import ServiceItem from "./ServiceItem";
import { ActiveService } from "./types";

interface SectionProps {
  activeService: ActiveService;
  onMouseEnter: (service: ActiveService) => void;
  onMouseLeave: () => void;
}

const K2nTechnologieSection = ({ activeService, onMouseEnter, onMouseLeave }: SectionProps) => {
  const techLinks = [
    { label: "Recherche en statistique appliquée", path: "/technologie/recherche-en-statistique-appliquee" },
    { label: "Recherche en sciences sociales et sciences humaines", path: "/technologie/recherche-en-sciences-sociales-et-sciences-humaines" },
    { label: "Recherche en economie appliquée", path: "/technologie/recherche-en-economie-appliquee" },
    { label: "Recherche et developpement IA", path: "/technologie/recherche-et-developpement-ia" }
  ];

  return (
    <ServiceItem 
      service="technologie"
      activeService={activeService}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title="K2n Technologie"
      imgSrc="/logo-T.svg"
      imgAlt="logo k2n technologie"
      links={techLinks}
    />
  );
};

export default K2nTechnologieSection;
