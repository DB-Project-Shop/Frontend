import { useState } from 'react';
import CustomerRegisterModal from './CustomerRegisterModal';

function CustomerRegisterBtn() {
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
        고객 회원가입
      </button>
      {isClicked ? <CustomerRegisterModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default CustomerRegisterBtn;
