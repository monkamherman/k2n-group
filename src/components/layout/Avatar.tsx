
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const AvatarIcon = () => {
  const { user, logout } = useAuthStore();
  const isMobile = useIsMobile();

  // If user is not logged in and on mobile, don't show login buttons
  // They will be shown in the mobile menu
  if (!user && isMobile) {
    return null;
  }

  // If user is not logged in and not on mobile, show login buttons
  if (!user) {
    return (
      <div className="hidden sm:flex gap-2">
        <NavLink to="/inscription">
          <Button className="rounded-full bg-white shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
            S'inscrire
          </Button>
        </NavLink>
        <NavLink to="/connexion">
          <Button className="rounded-full shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
            Se connecter
          </Button>
        </NavLink>
      </div>
    );
  }

  // If user is logged in, show avatar with dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} alt={user.username} />
            <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <NavLink to="/profile">Profil</NavLink>
        </DropdownMenuItem>
        {user.role === 'admin' && (
          <DropdownMenuItem asChild>
            <NavLink to="/admin/dashboard">Dashboard Admin</NavLink>
          </DropdownMenuItem>
        )}
        {user.role === 'blogger' && (
          <DropdownMenuItem asChild>
            <NavLink to="/blogger/dashboard">Dashboard Blogueur</NavLink>
          </DropdownMenuItem>
        )}
        {user.role === 'technician' && (
          <DropdownMenuItem asChild>
            <NavLink to="/technician/dashboard">Dashboard Technicien</NavLink>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarIcon;
