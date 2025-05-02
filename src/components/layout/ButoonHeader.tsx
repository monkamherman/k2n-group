
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";

function ButoonHeader() {
  const { user, logout } = useAuthStore();

  if (user) {
    return (
      <div className="flex gap-2 sm:flex-row flex-col">
        <Button 
          onClick={() => logout()}
          variant="outline"
          size="sm"
          className="text-dark-green hover:bg-dark-green/10 hover:text-dark-green dark:text-white dark:hover:bg-dark-green/20"
        >
          Se déconnecter
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 sm:flex-row flex-col">
      <Button 
        asChild
        variant="outline"
        size="sm"
        className="text-dark-green hover:bg-dark-green/10 hover:text-dark-green dark:text-white dark:hover:bg-dark-green/20"
      >
        <NavLink to="/inscription">
          S'inscrire
        </NavLink>
      </Button>
      <Button
        asChild
        variant="green"
        size="sm"
      >
        <NavLink to="/connexion">
          Se connecter
        </NavLink>
      </Button>
    </div>
  );
}

export default ButoonHeader;
