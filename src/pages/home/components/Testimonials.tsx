import { testimonials, type Testimonial } from "@/data/testimonials";
import { IoLocationOutline } from "react-icons/io5";
import StarRating from "@/components/common/StarRating";

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="custom-container flex flex-col gap-12 py-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-heading">
            <span className="text-theme-700 italic">Our service</span> is at the
            heart of everything we do.
          </h2>
          <div className="text-center text-[#727272]">
            Hear from our Users !!
          </div>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-1">
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  review: Testimonial;
}

function TestimonialCard({ review }: Readonly<TestimonialCardProps>) {
  return (
    <div className="bg-theme-200 flex flex-[0_0_17rem] flex-col overflow-visible rounded-3xl p-4 shadow-[4px_4px_14px_0px_rgba(0,0,0,0.05)] sm:flex-[0_0_20rem] md:flex-[0_0_22.5rem] md:p-6">
      <StarRating value={review.rating} />
      <h3 className="text-dark mt-5 text-lg font-bold sm:text-xl md:text-2xl">{`"${review.title}"`}</h3>
      <p className="text-dark/80 mt-2.5 flex-1 text-sm sm:text-base md:text-lg">
        {review.description}
      </p>
      <hr className="mt-6 mb-4 text-[#ebebeb]" />
      <div className="flex items-center justify-between gap-4 text-xs sm:text-sm md:text-base">
        <span className="text-textSecondary/60">{review.author}</span>
        <div className="text-textSecondary/60 flex items-center gap-1">
          <IoLocationOutline />
          <span className="font-medium">{review.location}</span>
        </div>
      </div>
    </div>
  );
}
