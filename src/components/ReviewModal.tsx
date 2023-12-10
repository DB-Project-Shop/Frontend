import axios from 'axios';
import { useState } from 'react';

type reviewResponese = {
  customer: Customer;
  order: Order;
  review: Review;
};

type Customer = {
  nickname: string;
};

type Order = {
  productName: string;
};

type Review = {
  reviewId: number;
  rating: number;
  content: string;
};

function ReviewModal({ clickHandler }: { clickHandler: () => void }) {
  const [userId, setUserId] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const reviewPost = async () => {
    try {
      const response = await axios.post<reviewResponese>(
        'http://localhost:8080/shop/orders/1/reviews',
        {
          customerId: userId,
          rating: rating,
          content: content,
        },
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 flex h-auto w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center rounded-xl bg-[#f1f1f1] p-10">
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="number"
        placeholder="고객 아이디"
        onChange={(e) => {
          setUserId(Number(e.target.value));
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="number"
        placeholder="평점"
        onChange={(e) => {
          setRating(Number(e.target.value));
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="text"
        placeholder="리뷰 내용"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl bg-[#bdb0af]"
        onClick={() => {
          reviewPost();
          alert('리뷰 등록 완료!');
          clickHandler();
        }}
      >
        주문하기
      </button>
    </div>
  );
}

export default ReviewModal;
