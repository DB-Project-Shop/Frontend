import { atom } from 'recoil';

type CustomerRegisterResponse = {
  customerId: string;
};

type CustomerLoginResponse = {
  CustomerId: string;
  nickname: string;
};

type OrderResponse = {
  orderId: number;
  customer: {
    nickname: string;
    address: string;
    paymentCard: string;
    accountNumber: string;
  };
  product: {
    name: string;
    price: number;
  };
};

type FetchProductResponse = {
  id: number;
  name: string;
  price: number;
  size: string;
  stock: number;
};

type PostProductResponse = {
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

export const customerRegisterResponse = atom<CustomerRegisterResponse>({
  key: 'customerRegisterResponse',
  default: { customerId: '' },
});

export const customerLoginResponse = atom<CustomerLoginResponse>({
  key: 'customerLoginResponse',
  default: { CustomerId: '', nickname: '' },
});

export const orderResponse = atom<OrderResponse>({
  key: 'orderResponse',
  default: {
    orderId: 0,
    customer: { nickname: '', address: '', paymentCard: '', accountNumber: '' },
    product: { name: '', price: 0 },
  },
});

export const fetchProductResponse = atom<FetchProductResponse[]>({
  key: 'fetchProductResponse',
  default: [],
});

export const postProductResponse = atom<PostProductResponse>({
  key: 'postProductResponse',
  default: {
    name: '',
    price: 0,
    size: '',
    stock: 0,
    category: {
      id: 0,
      name: '',
    },
    id: 0,
  },
});
