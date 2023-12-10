import AdminLoginBtn from '../components/AdminLoginBtn';
import ProductPostBtn from '../components/ProductPostBtn';

function AdminPage() {
  return (
    <div className="flex h-screen flex-col justify-center">
      <AdminLoginBtn />
      <ProductPostBtn />
    </div>
  );
}

export default AdminPage;
