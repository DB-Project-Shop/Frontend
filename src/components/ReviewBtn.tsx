import { useState } from 'react';
import ReviewModal from './ReviewModal';

function ReviewBtn() {
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
        리뷰 작성
      </button>
      {isClicked ? <ReviewModal clickHandler={clickHandler} /> : ``}
    </>
  );
}

export default ReviewBtn;
