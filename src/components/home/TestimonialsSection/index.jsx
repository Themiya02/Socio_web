import { fetchTestimonials } from "../../../services/landingService";
import { useFetchData } from "../../../hooks/useFetchData";
import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";
import TestimonialCard from "../../common/TestimonialCard";
import CardSkeleton from "../../common/CardSkeleton";

export default function TestimonialsSection() {
  const {
    data: testimonials,
    isLoading,
    error,
    refetch,
  } = useFetchData(fetchTestimonials);

  return (
    <section className="mt-10 sm:mt-12">
      <Container>
        <SectionHeader title="What Our Customer Says" />

        {isLoading && (
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={index} variant="testimonial" />
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-sm text-red-600 font-medium">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !error && testimonials.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No customer reviews yet.
          </div>
        )}

        {!isLoading && !error && testimonials.length > 0 && (
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}