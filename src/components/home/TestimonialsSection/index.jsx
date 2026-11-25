import { TESTIMONIALS } from "../../../data/mockData";
import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";
import TestimonialCard from "../../common/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="mt-10 sm:mt-12">
      <Container>
        <SectionHeader title="What Our Customer Says" />

        <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}