import axios from 'axios';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { orderResponse } from '../states/recoilState';

type orderResponse = {
  orderId: number;
  customer: Customer;
  product: Product;
};

type Customer = {
  nickname: string;
  address: string;
  paymentCard: string;
  accountNumber: string;
};

type Product = {
  name: string;
  price: number;
};

function PurchaseModal({ clickHandler }: { clickHandler: () => void }) {
  const [userId, setUserId] = useState<number>(0);
  const [productId, setProductId] = useState<number>(0);
  const setOrderResponse = useSetRecoilState(orderResponse);

  const order = async () => {
    try {
      const response = await axios.post<orderResponse>(
        'http://localhost:8080/shop/orders',
        {
          customerId: userId,
          productId: productId,
        },
      );
      console.log(response.data);
      setOrderResponse(response.data);
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
        placeholder="상품 아이디"
        onChange={(e) => {
          setProductId(Number(e.target.value));
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl bg-[#bdb0af]"
        onClick={() => {
          order();
          alert('주문 완료!');
          clickHandler();
        }}
      >
        주문하기
      </button>
    </div>
  );
}

export default PurchaseModal;
