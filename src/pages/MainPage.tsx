import CustomerLoginBtn from '../components/CustomerLoginBtn';
import CustomerRegisterBtn from '../components/CustomerRegisterBtn';
import PurchaseBtn from '../components/PurchaseBtn';
import ReviewBtn from '../components/ReviewBtn';

function MainPage() {
  return (
    <div className="flex h-screen flex-col justify-center bg-[#fffff7]">
      <CustomerRegisterBtn />
      <CustomerLoginBtn />
      <PurchaseBtn />
      <ReviewBtn />
    </div>
  );
}

export default MainPage;
