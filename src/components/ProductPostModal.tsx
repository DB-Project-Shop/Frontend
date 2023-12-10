/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { postProductResponse } from '../states/recoilState';

type Category = {
  id: number;
  name: string;
};

type ProductResposne = {
  name: string;
  price: number;
  size: string;
  stock: number;
  category: {
    id: number;
    name: string;
  };
  id: number;
};

function ProductPostModal({ clickHandler }: { clickHandler: () => void }) {
  const [productName, setProductName] = useState<string>('');
  const [categoryNumber, setCategoryNumber] = useState<number>(0);
  const [productSize, setProductSize] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productStock, setProductStock] = useState<number>(0);
  const [categoryData, setCategoryData] = useState<[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const setPostProductResponse = useSetRecoilState(postProductResponse);

  const productPost = async () => {
    try {
      const response = await axios.post<ProductResposne>(
        'http://localhost:8080/shop/admin/products',
        {
          name: productName,
          categoryId: categoryNumber,
          size: productSize,
          price: productPrice,
          stock: productStock,
        },
      );
      console.log(response.data);
      setPostProductResponse(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const categoryFetch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/categories');
      setCategoryData(response.data);
      setCategoryId(response.data.id);
      setCategoryName(response.data.name);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    categoryFetch();
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 flex h-auto w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center rounded-xl bg-[#f1f1f1] p-10">
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="text"
        placeholder="상품명"
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      <div className="grid grid-cols-3 gap-1">
        {categoryData.map((category: Category) => (
          <div
            className="flex h-10 w-full items-center justify-center rounded-xl border-2 border-[#9f9c9c] hover:cursor-pointer hover:bg-[#95c798]"
            onClick={() => {
              setCategoryNumber(category.id);
            }}
          >
            {category.id} {category.name}
          </div>
        ))}
      </div>
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="text"
        placeholder="사이즈"
        onChange={(e) => {
          setProductSize(e.target.value);
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="number"
        placeholder="가격"
        onChange={(e) => {
          setProductPrice(Number(e.target.value));
        }}
      />
      <input
        className="mb-4 h-10 border-b-2 border-[#c6baba] bg-[#f1f1f1] text-lg outline-none"
        type="number"
        placeholder="재고량"
        onChange={(e) => {
          setProductStock(Number(e.target.value));
        }}
      />
      <button
        type="button"
        className="mt-2 h-10 w-full rounded-3xl bg-[#bdb0af]"
        onClick={() => {
          productPost();
          alert('상품 등록 완료!');
          clickHandler();
        }}
      >
        상품등록
      </button>
    </div>
  );
}

export default ProductPostModal;
