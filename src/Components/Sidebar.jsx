import { Link } from "react-router-dom";
import { Package, Home, PlusCircle } from "lucide-react";

const Sidebar = () => (
  <div className="bg-blue-200 text-white fixed left-0 top-0 h-screen w-64 p-4">
    <div className="text-2xl font-bold mb-8 text-center">Tema Website</div>
    <nav>
      <Link
        to="/"
        className="flex items-center text-black gap-2 p-3 hover:bg-blue-300 rounded-lg mb-2"
      >
        <Home size={20} />
        Dashboard
      </Link>
      <Link
        to="/menu"
        className="flex items-center text-black gap-2 p-3 hover:bg-blue-300 rounded-lg mb-2"
      >
        <Package size={20} />
        Menu
      </Link>
    </nav>
  </div>
);

export default Sidebar;
