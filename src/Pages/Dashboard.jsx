import { useMenu } from "../Contexts/MenuContext.jsx";

const Dashboard = () => {
  const { menu } = useMenu();

  const totalItems = menu.reduce((sum, item) => sum + item.stock, 0);
  const totalCategories = new Set(menu.map((item) => item.category)).size;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Makanan & Minuman</h3>
          <p className="text-3xl font-bold text-blue-600">{totalItems}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Jumlah Kategori</h3>
          <p className="text-3xl font-bold text-green-600">{totalCategories}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Jenis Menu</h3>
          <p className="text-3xl font-bold text-purple-600">
            {menu.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
