import { FLASH_OFFERS } from "../../../data/mockData";
import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";
import ProductCard from "../../common/ProductCard";

export default function FlashOffers({ onAddToCart }) {
  return (
    <section id="flash-offers" className="mt-10 sm:mt-12">
      <Container>
        <SectionHeader title="Flash Offers" viewAllHref="#" />

        <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {FLASH_OFFERS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}