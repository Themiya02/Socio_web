import { SHOP_PRODUCTS } from "../data/mockData";

export const fetchShopProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SHOP_PRODUCTS);
    }, 500);
  });
};