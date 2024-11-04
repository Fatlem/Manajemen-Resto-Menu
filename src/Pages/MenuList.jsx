import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useMenu } from "../Contexts/MenuContext";

const MenuList = () => {
  const navigate = useNavigate();
  const { menu, searchTerm, setSearchTerm } = useMenu();

  const filteredMenu = menu.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">List Menu</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/menu/${item.id}`)}
          >
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">Kategori: {item.category}</p>
            <p className="text-gray-600 mb-2">Stok: {item.stock}</p>
            <p className="text-blue-600 font-semibold">
              Harga: Rp {item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
