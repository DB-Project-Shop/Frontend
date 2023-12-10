import { useState } from 'react';
import CustomerLoginModal from './CustomerLoginModal';

function CustomerLoginBtn() {
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
        고객 로그인
      </button>
      {isClicked ? <CustomerLoginModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default CustomerLoginBtn;
