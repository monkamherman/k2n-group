
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

function ButoonHeader() {
  const { user, logout } = useAuthStore();

  if (user) {
    return (
      <div className="flex gap-2 sm:flex-row flex-col">
        <button 
          onClick={() => logout()}
          className="rounded-full bg-white shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white"
        >
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 sm:flex-row flex-col">
      <NavLink to="/inscription">
        <button className="rounded-full bg-white shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
          S'inscrire
        </button>
      </NavLink>
      <NavLink to="/connexion">
        <button className="rounded-full shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
          Se connecter
        </button>
      </NavLink>
    </div>
  );
}

export default ButoonHeader;
