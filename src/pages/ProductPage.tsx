import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { fetchProductResponse } from '../states/recoilState';

type ProductType = {
  id: number;
  name: string;
  price: number;
  size: string;
  stock: number;
};

function ProductPage() {
  // const [productId, setProductId] = useState<number>(0);
  // const [productName, setProductName] = useState<string>('');
  // const [productPrice, setProductPrice] = useState<number>(0);
  // const [productSize, setProductSize] = useState<string>('');
  // const [productStock, setProductStock] = useState<number>(0);
  const [productArray, setProductArray] = useState<ProductType[]>([]);
  const setProductResponse = useSetRecoilState(fetchProductResponse);

  const productFetch = async () => {
    const response = await axios.get<ProductType[]>(
      'http://localhost:8080/shop/customers/products',
    );
    console.log(response.data);
    setProductArray(response.data);
    setProductResponse(response.data);
    // setProductId(response.data.id);
    // setProductName(response.data.name);
    // setProductPrice(response.data.price);
    // setProductSize(response.data.size);
    // setProductStock(response.data.stock);
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <>
      {productArray.map((product) => (
        <div className="flex flex-col">
          <span className="text-xl">ID : {product.id}</span>
          <span className="text-xl">NAMD : {product.name}</span>
          <span className="text-xl">PRICE : {product.price}</span>
          <span className="text-xl">SIZE : {product.size}</span>
          <span className="text-xl">STOCK : {product.stock}</span>
        </div>
      ))}
    </>
  );
}

export default ProductPage;
