import { useState } from 'react';
import ProductPostModal from './ProductPostModal';

function ProductPostBtn() {
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
        상품등록
      </button>
      {isClicked ? <ProductPostModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default ProductPostBtn;
