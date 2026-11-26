import { NEW_ARRIVALS } from "../data/mockData";

export const fetchNewArrivals = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NEW_ARRIVALS);
    }, 600);
  });
};