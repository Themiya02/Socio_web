import { useState, useMemo } from "react";
import TopBanner from "../../components/layout/TopBanner";
import AuthNavbar from "../../components/layout/AuthNavbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/common/Container";
import FilterSidebar from "../../components/common/FilterSidebar";
import ShopHeader from "../../components/shop/ShopHeader";
import ProductGrid from "../../components/shop/ProductGrid";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchShopProducts } from "../../services/shopService";

const DEFAULT_FILTERS = {
  brand: "",
  category: "",
  maxPrice: 120000,
  onSale: false,
  inStockOnly: false,
};

export default function ShopPage() {
  const {
    data: allProducts = [],
    isLoading,
    error,
    refetch,
  } = useFetchData(fetchShopProducts);

  const [cartCount, setCartCount] = useState(3);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleRemoveFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: typeof prev[key] === "boolean" ? false : "",
    }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = allProducts.filter((product) => {
      if (filters.brand && product.brand !== filters.brand) return false;
      if (filters.category && product.category !== filters.category) return false;
      if (product.price > filters.maxPrice) return false;
      if (filters.onSale && !product.onSale) return false;
      if (filters.inStockOnly && !product.inStock) return false;

      if (query) {
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesSpecs = product.specs.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSpecs && !matchesBrand) return false;
      }

      return true;
    });

    if (sortBy === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "rating") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [allProducts, filters, searchQuery, sortBy]);

  const pageTitle = filters.category || "Accessories";

  return (
    <div id="top" className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col">
      <TopBanner />
      <AuthNavbar cartCount={cartCount} />

      <main className="flex-1 py-6 sm:py-10">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8">
            {/* Reusable Filter Sidebar (Desktop) & Drawer (Mobile) */}
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              mobileOpen={mobileFiltersOpen}
              onCloseMobile={() => setMobileFiltersOpen(false)}
            />

            {/* Main Shop Content */}
            <div className="flex-1 w-full min-w-0">
              <ShopHeader
                title={pageTitle}
                totalCount={filteredProducts.length}
                filters={filters}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onRemoveFilter={handleRemoveFilter}
                onOpenMobileFilters={() => setMobileFiltersOpen(true)}
              />

              <ProductGrid
                products={filteredProducts}
                isLoading={isLoading}
                error={error}
                onRetry={refetch}
                onResetFilters={handleResetFilters}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}