
// Types for the services menu components
export type ActiveService = "services" | "konsultant" | "technologie" | null;

export interface ServiceItemProps {
  service: ActiveService;
  activeService: ActiveService;
  onMouseEnter: (service: ActiveService) => void;
  onMouseLeave: () => void;
}

export interface ServiceLinkProps {
  to: string;
  className: string;
  children: React.ReactNode;
}
