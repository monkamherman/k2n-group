
import ServiceItem from "./ServiceItem";
import { ActiveService } from "./types";

interface SectionProps {
  activeService: ActiveService;
  onMouseEnter: (service: ActiveService) => void;
  onMouseLeave: () => void;
}

const K2nKonsultantSection = ({ activeService, onMouseEnter, onMouseLeave }: SectionProps) => {
  const konsultantLinks = [
    { label: "Construction des fosses septique biofil/ecologique", path: "/konsultan/construction-des-fosses-septique-biofil-ecologique" },
    { label: "Developpement d'application", path: "/konsultan/developpement-d-application" },
    { label: "Suivi et evaluation de projet", path: "/konsultan/suivi-et-evaluation-de-projet" },
    { label: "Electricite batiment", path: "/konsultan/electricite-batiment" },
    { label: "Etude de marché", path: "/konsultan/etude-de-marche" },
    { label: "Etudes statistiqueset socio-demographiques", path: "/konsultan/etudes-statistiqueset-socio-demographiques" },
    { label: "Formation sur site en ligne", path: "/konsultan/formation-sur-site-en-ligne" },
    { label: "Notice d'impact environnemental", path: "/konsultan/notice-d-impact-environnemental" },
    { label: "Traduction et interprétation", path: "/konsultan/traduction-et-interpretation" },
    { label: "Datamining", path: "/konsultan/datamining" }
  ];

  return (
    <ServiceItem 
      service="konsultant"
      activeService={activeService}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title="K2n Konsultant"
      imgSrc="/logo-K.svg"
      imgAlt="logo k2n konsultant"
      links={konsultantLinks}
    />
  );
};

export default K2nKonsultantSection;
