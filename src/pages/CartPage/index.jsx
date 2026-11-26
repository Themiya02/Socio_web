import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, ShoppingBag } from "lucide-react";
import TopBanner from "../../components/layout/TopBanner";
import AuthNavbar from "../../components/layout/AuthNavbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/common/Container";
import FilterSidebar from "../../components/common/FilterSidebar";
import FreeDeliveryBanner from "../../components/cart/FreeDeliveryBanner";
import CartItemCard from "../../components/cart/CartItemCard";
import OrderNotesDiscount from "../../components/cart/OrderNotesDiscount";
import OrderSummary from "../../components/cart/OrderSummary";
import FrequentlyBoughtTogether from "../../components/cart/FrequentlyBoughtTogether";
import {
  INITIAL_CART_ITEMS,
  FREQUENTLY_BOUGHT_ITEMS,
} from "../../data/mockData";

const DEFAULT_FILTERS = {
  brand: "",
  category: "",
  maxPrice: 120000,
  onSale: false,
  inStockOnly: false,
};

const FREE_DELIVERY_THRESHOLD = 15000;
const STANDARD_SHIPPING_FEE = 350;

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [orderNote, setOrderNote] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddUpsellItem = (upsellItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === upsellItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === upsellItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          ...upsellItem,
          quantity: 1,
          brand: "Apple",
          category: "Accessories",
          onSale: false,
          inStock: true,
        },
      ];
    });
  };

  const handleApplyPromo = (code) => {
    if (code === "SOCIO10") {
      setAppliedPromo({ code, rate: 0.1 });
      return true;
    }
    setAppliedPromo(null);
    return false;
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const totalItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const shipping =
    subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD
      ? 0
      : STANDARD_SHIPPING_FEE;

  const discount = appliedPromo
    ? Math.round(subtotal * appliedPromo.rate)
    : 0;

  const total = Math.max(0, subtotal + shipping - discount);

  const handleCheckout = () => {
    console.log("Proceeding to checkout:", {
      cartItems,
      orderNote,
      appliedPromo,
      total,
    });
    alert(`Order ready! Total: Rs. ${total.toLocaleString()}`);
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col">
      <TopBanner />
      <AuthNavbar cartCount={totalItemsCount} />

      <main className="flex-1 py-6 sm:py-10">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8">
            {/* Left Filter Sidebar (Desktop) & Mobile Slide-Over Drawer */}
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              mobileOpen={mobileFiltersOpen}
              onCloseMobile={() => setMobileFiltersOpen(false)}
            />

            {/* Main Cart Content */}
            <div className="flex-1 w-full min-w-0">
              {/* Mobile Filter Trigger + Page Title */}
              <div className="flex items-center justify-between lg:justify-center mb-5 sm:mb-6">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-xs cursor-pointer"
                >
                  <SlidersHorizontal size={15} className="text-blue-600" />
                  Filters
                </button>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
                  Your Cart
                </h1>

                <div className="w-20 lg:hidden" />
              </div>

              {/* Cart Items & Free Delivery Banner */}
              <div className="space-y-4">
                <FreeDeliveryBanner
                  subtotal={subtotal}
                  threshold={FREE_DELIVERY_THRESHOLD}
                />

                {cartItems.length === 0 ? (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-sm">
                    <ShoppingBag
                      size={40}
                      className="mx-auto text-slate-300 mb-3"
                    />
                    <h2 className="text-base sm:text-lg font-bold text-slate-800">
                      Your cart is empty
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-5">
                      Looks like you haven&apos;t added anything yet.
                    </p>
                    <Link
                      to="/home"
                      className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))
                )}
              </div>

              {/* Order Instructions + Summary */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                <div className="md:col-span-7">
                  <OrderNotesDiscount
                    orderNote={orderNote}
                    onOrderNoteChange={setOrderNote}
                    onApplyPromo={handleApplyPromo}
                    appliedPromo={appliedPromo}
                  />
                </div>
                <div className="md:col-span-5">
                  <OrderSummary
                    subtotal={subtotal}
                    shipping={shipping}
                    discount={discount}
                    total={total}
                    itemCount={cartItems.length}
                    onCheckout={handleCheckout}
                  />
                </div>
              </div>

              {/* Frequently Bought Together */}
              <FrequentlyBoughtTogether
                items={FREQUENTLY_BOUGHT_ITEMS}
                onAddItem={handleAddUpsellItem}
              />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}