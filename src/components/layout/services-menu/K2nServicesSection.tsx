
import ServiceItem from "./ServiceItem";
import { ActiveService } from "./types";

interface SectionProps {
  activeService: ActiveService;
  onMouseEnter: (service: ActiveService) => void;
  onMouseLeave: () => void;
}

const K2nServicesSection = ({ activeService, onMouseEnter, onMouseLeave }: SectionProps) => {
  const serviceLinks = [
    { label: "K2n pisciculture", path: "/services/pisciculture" },
    { label: "K2n boutique", path: "/boutique" },
    { label: "K2n argents d'entretien", path: "/services/entretien" }
  ];

  return (
    <ServiceItem 
      service="services"
      activeService={activeService}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title="K2n Services"
      imgSrc="/logo-S.svg"
      imgAlt="logo k2n services"
      links={serviceLinks}
    />
  );
};

export default K2nServicesSection;
