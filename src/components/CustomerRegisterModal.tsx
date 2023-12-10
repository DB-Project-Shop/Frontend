import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import {
  customerRegisterResponse,
  registerResponse,
} from '../states/recoilState';

function CustomerRegisterModal({ clickHandler }: { clickHandler: () => void }) {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userNickname, setUserNickName] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userCard, setUserCard] = useState<string>('');
  const [userAccountNumber, setUserAccountNumber] = useState<string>('');
  const setRegisterResponse = useSetRecoilState(customerRegisterResponse);

  const userRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/shop/customers/register',
        {
          CustomerId: userId,
          password: userPassword,
          nickname: userNickname,
          address: userAddress,
          paymentCard: userCard,
          accountNumber: userAccountNumber,
        },
      );
      console.log(response.data);
      setRegisterResponse(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 flex h-auto w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center rounded-xl border-2 border-[#800080] bg-[#ffffff] p-10">
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="text"
        placeholder="아이디"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="text"
        placeholder="닉네임"
        onChange={(e) => {
          setUserNickName(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="text"
        placeholder="주소"
        onChange={(e) => {
          setUserAddress(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="text"
        placeholder="카드사"
        onChange={(e) => {
          setUserCard(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#800080] bg-[#ffffff] text-lg outline-none"
        type="text"
        placeholder="계좌번호"
        onChange={(e) => {
          setUserAccountNumber(e.target.value);
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl border-2 border-[#800080] bg-[#bdb0af]"
        onClick={() => {
          userRegister();
          alert('회원가입 완료!');
          clickHandler();
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default CustomerRegisterModal;
