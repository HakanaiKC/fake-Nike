export interface CartItem {
  id: number;
  quantity: number;
}

export interface ProductCartDetail {
  id: number;
  brand_name: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
  name: string;
  size: number;
  cartId: number;
}
