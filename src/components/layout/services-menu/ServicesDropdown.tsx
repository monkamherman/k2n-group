
import { motion } from "framer-motion";
import { dropdownVariants } from "./animations";
import { ActiveService } from "./types";
import K2nServicesSection from "./K2nServicesSection";
import K2nKonsultantSection from "./K2nKonsultantSection";
import K2nTechnologieSection from "./K2nTechnologieSection";

interface ServicesDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeService: ActiveService;
  handleServiceHover: (service: ActiveService) => void;
  handleServiceLeave: () => void;
}

const ServicesDropdown = ({ 
  isOpen,
  setIsOpen,
  activeService,
  handleServiceHover,
  handleServiceLeave
}: ServicesDropdownProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={dropdownVariants}
      className="absolute z-50 p-4 lg:top-20 -top-20 left-[-200%] lg:left-[10%] dark:bg-gray-800 rounded-[.5rem] bg-white lg:w-[50rem] shadow-md"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex flex-wrap gap-4 m-4">
        <K2nServicesSection 
          activeService={activeService} 
          onMouseEnter={handleServiceHover} 
          onMouseLeave={handleServiceLeave} 
        />
        <K2nKonsultantSection 
          activeService={activeService} 
          onMouseEnter={handleServiceHover} 
          onMouseLeave={handleServiceLeave} 
        />
        <K2nTechnologieSection 
          activeService={activeService} 
          onMouseEnter={handleServiceHover} 
          onMouseLeave={handleServiceLeave} 
        />
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
