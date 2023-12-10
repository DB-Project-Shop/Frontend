import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

function PurchaseBtn() {
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
        상품 주문
      </button>
      {isClicked ? <PurchaseModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default PurchaseBtn;
