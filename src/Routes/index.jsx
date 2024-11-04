import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import MenuList from "../Pages/MenuList";
import MenuDetail from "../Pages/MenuDetail";
import { useMenu } from "../Contexts/MenuContext";

const AppRoutes = () => {
  const { Menu, searchTerm, setSearchTerm } = useMenu();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/menu"
        element={
          <MenuList
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        }
      />
      <Route path="/menu/:id" element={<MenuDetail />} />
    </Routes>
  );
};

export default AppRoutes;
