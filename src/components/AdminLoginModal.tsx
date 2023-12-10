import axios from 'axios';
import { useState } from 'react';

function AdminLoginModal({ clickHandler }: { clickHandler: () => void }) {
  const [adminId, setAdminId] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');

  const userRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/shop/admin/login',
        {
          AdminId: adminId,
          password: adminPassword,
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
        type="text"
        placeholder="아이디"
        onChange={(e) => {
          setAdminId(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          setAdminPassword(e.target.value);
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl bg-[#bdb0af]"
        onClick={() => {
          userRegister();
          alert('로그인 완료!');
          clickHandler();
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default AdminLoginModal;
