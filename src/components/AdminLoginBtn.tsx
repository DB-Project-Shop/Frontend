import { useState } from 'react';
import AdminLoginModal from './AdminLoginModal';

function AdminLoginBtn() {
  const [isClicked, SetIsClicked] = useState(false);

  const clickHandler = () => {
    SetIsClicked(false);
  };

  return (
    <>
      <button
        type="button"
        className="my-5 h-12 w-28 rounded-md bg-gray-500"
        onClick={() => {
          SetIsClicked(!isClicked);
        }}
      >
        관리자 로그인
      </button>
      {isClicked ? <AdminLoginModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default AdminLoginBtn;
