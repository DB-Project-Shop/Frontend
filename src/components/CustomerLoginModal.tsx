import axios from 'axios';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { customerLoginResponse } from '../states/recoilState';

function CustomerLoginModal({ clickHandler }: { clickHandler: () => void }) {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const setLoginResponse = useSetRecoilState(customerLoginResponse);

  const userLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/shop/customers/login',
        {
          CustomerId: userId,
          password: userPassword,
        },
      );
      console.log(response.data);
      setLoginResponse(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 flex h-auto w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center rounded-xl bg-[#f1f1f1] p-10">
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="text"
        placeholder="아이디"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl bg-[#bdb0af]"
        onClick={() => {
          userLogin();
          alert('로그인 완료!');
          clickHandler();
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default CustomerLoginModal;
