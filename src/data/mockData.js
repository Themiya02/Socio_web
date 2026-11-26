import ankerImg from "../assets/images/product-anker-charger.webp";
import catPhonesImg from "../assets/images/cat-smartphones.webp";
import catHeadphonesImg from "../assets/images/cat-headphones.webp";
import catAccessoriesImg from "../assets/images/cat-accessories.webp";
import avatarKasun from "../assets/images/avatar-kasun.webp";
import avatarDilshan from "../assets/images/avatar-dilshan.webp";
import avatarShenali from "../assets/images/avatar-shenali.webp";

export const FLASH_OFFERS = [
  {
    id: 1,
    title: "Anker 735 Nano II 65W GaN Charger",
    specs: "3-Port Fast Charger (2x USB-C + 1x USB-A)",
    rating: 4.8,
    reviews: 120,
    price: 12500,
    originalPrice: 16500,
    saveAmount: 4000,
    installment: "4,166",
    image: ankerImg,
    badge: "SALE",
  },
  {
    id: 2,
    title: "Anker 735 Nano II 65W GaN Charger",
    specs: "3-Port Fast Charger (2x USB-C + 1x USB-A)",
    rating: 4.8,
    reviews: 120,
    price: 12500,
    originalPrice: 16500,
    saveAmount: 4000,
    installment: "4,166",
    image: ankerImg,
    badge: "SALE",
  },
  {
    id: 3,
    title: "Anker 735 Nano II 65W GaN Charger",
    specs: "3-Port Fast Charger (2x USB-C + 1x USB-A)",
    rating: 4.8,
    reviews: 120,
    price: 12500,
    originalPrice: 16500,
    saveAmount: 4000,
    installment: "4,166",
    image: ankerImg,
    badge: "SALE",
  },
  {
    id: 4,
    title: "Anker 735 Nano II 65W GaN Charger",
    specs: "3-Port Fast Charger (2x USB-C + 1x USB-A)",
    rating: 4.8,
    reviews: 120,
    price: 12500,
    originalPrice: 16500,
    saveAmount: 4000,
    installment: "4,166",
    image: ankerImg,
    badge: "SALE",
  },
  {
    id: 5,
    title: "Anker 735 Nano II 65W GaN Charger",
    specs: "3-Port Fast Charger (2x USB-C + 1x USB-A)",
    rating: 4.8,
    reviews: 120,
    price: 12500,
    originalPrice: 16500,
    saveAmount: 4000,
    installment: "4,166",
    image: ankerImg,
    badge: "SALE",
  },
];

export const CATEGORIES = [
  {
    id: "smartphones",
    title: "Smartphones",
    image: catPhonesImg,
    bgClass: "bg-[#EFF5FF]",
    accentClass: "text-blue-600",
  },
  {
    id: "headphones",
    title: "Headphones",
    image: catHeadphonesImg,
    bgClass: "bg-[#FDF0F3]",
    accentClass: "text-rose-500",
  },
  {
    id: "accessories",
    title: "Accessories",
    image: catAccessoriesImg,
    bgClass: "bg-[#ECF9F0]",
    accentClass: "text-emerald-600",
  },
];

export const FOOTER_LINKS = {
  shop: ["Smartphones", "Accessories", "Audio", "Wearables"],
  company: ["About Us", "Careers", "Press", "Blog", "Contact us"],
  support: ["Help Center", "Warranty", "Returns", "Track Order", "Trade-In"],
};

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5.0,
    comment:
      "Authentic products with super fast delivery to Ratnapura! I registered the serial on Anker's site and it verified instantly. Best tech store in SL without a doubt.",
    purchasedItem: "Anker 735 Nano II 65W GaN",
    name: "Kasun D.",
    location: "Colombo",
    avatar: avatarKasun,
  },
  {
    id: 2,
    rating: 5.0,
    comment:
      "Mintpay 3× installment made buying high-end tech so painless. Arrived neatly with an official warranty card stamped.",
    purchasedItem: "UGREEN Nexode 100W 4-Port GaN",
    name: "Dilshan Perera",
    location: "Kandy",
    avatar: avatarDilshan,
  },
  {
    id: 3,
    rating: 5.0,
    comment:
      "Finally a legit Apple & Anker retailer in Sri Lanka who honors replacement warranties without excuses. WhatsApp customer support is top tier and super responsive!",
    purchasedItem: "Apple MagSafe Case + Anker MagGo",
    name: "Shenali Fernando",
    location: "Galle",
    avatar: avatarShenali,
  },
  {
    id: 4,
    rating: 5.0,
    comment:
      "Super reliable service and genuine accessories. Got my charger within 24 hours with official Socio.lk warranty support.",
    purchasedItem: "Anker 735 Nano II 65W GaN",
    name: "Kasun D.",
    location: "Colombo",
    avatar: avatarKasun,
  },
];

export const NEW_ARRIVALS = FLASH_OFFERS.map((item, index) => ({
  ...item,
  id: `new-arrival-${index + 1}`,
}));

export const INITIAL_CART_ITEMS = [
  {
    id: "cart-anker-735",
    name: "Anker 735 Nano II Charger",
    variant: "Power & Charging • Space Gray, 100W",
    price: 12500,
    quantity: 1,
    image: ankerImg,
    brand: "Anker",
    category: "GaN Chargers",
    onSale: true,
    inStock: true,
  },
  {
    id: "cart-sony-xm5",
    name: "Sony WH-1000XM5",
    variant: "Audio • Black",
    price: 95000,
    quantity: 1,
    image: catHeadphonesImg,
    brand: "Sony",
    category: "Earbuds",
    onSale: false,
    inStock: true,
  },
];

export const FREQUENTLY_BOUGHT_ITEMS = [
  {
    id: "upsell-magsafe-case",
    name: "Clear MagSafe Case",
    variant: "Accessories • Clear",
    price: 3200,
    image: catPhonesImg,
  },
  {
    id: "upsell-tempered-glass",
    name: "Tempered Glass",
    variant: "Screen Protectors • 9H",
    price: 1500,
    image: catPhonesImg,
  },
  {
    id: "upsell-usbc-cable",
    name: "USB-C Cable (2m)",
    variant: "Cables • Braided 100W",
    price: 2800,
    image: catAccessoriesImg,
  },
  {
    id: "upsell-airtag",
    name: "Apple AirTag",
    variant: "Accessories • Single Pack",
    price: 10500,
    image: catAccessoriesImg,
  },
];