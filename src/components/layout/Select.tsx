
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ActiveService } from "./services-menu/types";
import ServicesDropdown from "./services-menu/ServicesDropdown";

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState<ActiveService>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleServiceHover = (service: ActiveService) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveService(service);
  };

  const handleServiceLeave = () => {
    const timeout = setTimeout(() => {
      setActiveService(null);
    }, 150); // Réduit le délai pour une transition plus rapide
    setHoverTimeout(timeout);
  };

  return (
    <div
      className="relative text-[1rem] flex items-center gap-2 rounded-[.5rem] lg:px-2 text-dark dark:text-white"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <p>Services</p>
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

      <AnimatePresence>
        <ServicesDropdown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeService={activeService}
          handleServiceHover={handleServiceHover}
          handleServiceLeave={handleServiceLeave}
        />
      </AnimatePresence>
    </div>
  );
}

export default Select;
