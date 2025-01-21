import { Status } from './status';

export interface User {
  id: string;
  email: string;
  username: string;
  created_at: string;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
  userId: string;
  User?: User;
  categoryId: string;
  Category?: Category;
}
export enum PaymentMethod {
  COD = 'cod',
  Khalti = 'khalti',
}

export enum OrderStatus {
  Pending = 'pending',
  Delivered = 'delivered',
  Ontheway = 'ontheway',
  Cancelled = 'cancelled',
  Preparation = 'preparation',
  All = 'all',
}

interface Payment {
  paymentMethod: PaymentMethod;
}
export interface ItemDetails {
  productId: string;
  quantity: number;
}
export interface OrderData {
  phoneNumber: string;
  address: string;
  totalAmount: number;
  paymentDetails: Payment;
  items: ItemDetails[];
  id: string;
  orderStatus: OrderStatus;
}
export interface Category {
  id: string;
  name: string;
}

export interface SingleOrder {
  id: string;
  quantity: number;
  orderId: string;
  createdAt: string;
  Product: {
    id: string;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    categoryId: string;
    Category: {
      name?: string;
    };
  };
  Order: {
    id: string;
    phoneNumber: string;
    address: string;
    totalAmount: number;
    orderStatus: OrderStatus;
    userId: string;
    Payment: {
      paymentMethod: string;
      paymentStatus: string;
    };
  };
}

export interface InitialState {
  products: Product[];
  users: User[];
  orders: OrderData[];
  status: Status;
  categories: Category[];
  singleProduct: Product | null;
  singleOrder: SingleOrder[];
}
