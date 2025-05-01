
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type ActiveService = "services" | "konsultant" | "technologie" | null;

const dropdownVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
    },
  },
};

const listVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.15,
    },
  },
};

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
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            className="absolute z-50 p-4 lg:top-20 -top-20 left-[-200%] lg:left-[10%]  dark:bg-gray-800 rounded-[.5rem] bg-white lg:w-[50rem] shadow-md"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex flex-wrap gap-4 m-4">
              {/* Service K2n Services */}
              <motion.div
                className="flex flex-col gap-2 flex-1 size-fit"
                onMouseEnter={() => handleServiceHover("services")}
                onMouseLeave={handleServiceLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/services">
                  <motion.img
                    src="/logo-S.svg"
                    alt="logo k2n services"
                    className="rounded-[.5rem] shadow-lg w-full h-auto object-cover cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <h2 className="font-semibold mb-2 underline underline-offset-4">
                  K2n Services
                </h2>
                <AnimatePresence>
                  {activeService === "services" && (
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-2"
                    >
                      <Link
                        to="/services/pisciculture"
                        className="text-[.7rem] lg:text-[1.1rem] hover:bg-green-600 rounded-[.5rem] px-2"
                      >
                        K2n pisciculture
                      </Link>
                      <Link
                        to="/boutique"
                        className="text-[.7rem] lg:text-[1.1rem] hover:bg-green-600 rounded-[.5rem] px-2"
                      >
                        K2n boutique
                      </Link>
                      <Link
                        to="/services/entretien"
                        className="text-[.7rem] lg:text-[1.1rem] hover:bg-green-600 rounded-[.5rem] px-2"
                      >
                        K2n argents d'entretien
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Service K2n Konsultant */}
              <motion.div
                className="flex flex-1 gap-2 flex-col size-fit"
                onMouseEnter={() => handleServiceHover("konsultant")}
                onMouseLeave={handleServiceLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/konsultan">
                  <motion.img
                    src="/logo-K.svg"
                    alt="logo k2n konsultant"
                    className="rounded-[.5rem] shadow-lg h-[138px] w-[250px] object-contain cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <h2 className="font-semibold mb-2 underline underline-offset-4">
                  K2n Konsultant
                </h2>
                <AnimatePresence>
                  {activeService === "konsultant" && (
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-2"
                    >
                      {[
                        "Construction des fosses septique biofil/ecologique",
                        "Developpement d'application",
                        "Suivi et evaluation de projet",
                        "Electricite batiment",
                        "Etude de marché",
                        "Etudes statistiqueset socio-demographiques",
                        "Formation sur site en ligne",
                        "Notice d'impact environnemental",
                        "Traduction et interprétation",
                        "Datamining"
                      ].map((service, idx) => (
                        <Link
                          key={idx}
                          to={`/konsultan/${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[.7rem] lg:text-[1.1rem] text-dark dark:text-white hover:bg-green-600 truncate-text rounded-[.5rem] px-2"
                        >
                          {service}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Service K2n Technologie */}
              <motion.div
                className="flex flex-1 gap-2 flex-col size-fit"
                onMouseEnter={() => handleServiceHover("technologie")}
                onMouseLeave={handleServiceLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/technologie">
                  <motion.img
                    src="/logo-T.svg"
                    alt="logo k2n technologie"
                    className="rounded-[.5rem] shadow-lg w-full h-auto object-cover cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <h2 className="font-semibold mb-2 underline underline-offset-4">
                  K2n Technologie
                </h2>
                <AnimatePresence>
                  {activeService === "technologie" && (
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-2"
                    >
                      {[
                        "Recherche en statistique appliquée",
                        "Recherche en sciences sociales et sciences humaines",
                        "Recherche en economie appliquée",
                        "Recherche et developpement IA"
                      ].map((service, idx) => (
                        <Link
                          key={idx}
                          to={`/technologie/${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[.7rem] lg:text-[1.1rem] text-dark dark:text-white hover:bg-green-600 rounded-[.5rem] px-2 truncate-text"
                        >
                          {service}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Select;
