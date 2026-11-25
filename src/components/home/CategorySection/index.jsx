import { CATEGORIES } from "../../../data/mockData";
import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";
import CategoryCard from "../../common/CategoryCard";

export default function CategorySection() {
  return (
    <section className="mt-8 sm:mt-10 mb-14 sm:mb-16">
      <Container>
        <SectionHeader title="Shop by Category" viewAllHref="#" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}