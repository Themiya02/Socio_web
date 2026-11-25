import { FLASH_OFFERS, TESTIMONIALS } from "../data/mockData";

const SIMULATED_DELAY_MS = 600;

function simulateApiRequest(data, delay = SIMULATED_DELAY_MS) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

export async function fetchFlashOffers() {
  // Replace with real API call when backend is ready:
  // const response = await fetch(`${import.meta.env.VITE_API_URL}/flash-offers`);
  // if (!response.ok) throw new Error("Failed to load flash offers");
  // return response.json();
  return simulateApiRequest(FLASH_OFFERS, 500);
}

export async function fetchTestimonials() {
  // Replace with real API call when backend is ready:
  // const response = await fetch(`${import.meta.env.VITE_API_URL}/testimonials`);
  // if (!response.ok) throw new Error("Failed to load testimonials");
  // return response.json();
  return simulateApiRequest(TESTIMONIALS, 650);
}