
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItemProps } from "./types";
import { listVariants } from "./animations";

interface ServiceProps extends ServiceItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  links: { label: string; path: string }[];
}

const ServiceItem = ({ 
  service, 
  activeService, 
  onMouseEnter, 
  onMouseLeave, 
  title, 
  imgSrc, 
  imgAlt,
  links
}: ServiceProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2 flex-1 size-fit"
      onMouseEnter={() => onMouseEnter(service)}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/${service}`}>
        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-[.5rem] shadow-lg w-full h-auto object-cover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <h2 className="font-semibold mb-2 underline underline-offset-4">
        {title}
      </h2>
      <AnimatePresence>
        {activeService === service && (
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-2"
          >
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-[.7rem] lg:text-[1.1rem] text-dark dark:text-white hover:bg-green-600 truncate-text rounded-[.5rem] px-2"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceItem;
