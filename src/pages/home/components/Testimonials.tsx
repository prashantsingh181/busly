import { testimonials, type Testimonial } from "@/data/testimonials";
import { IoLocationOutline } from "react-icons/io5";
import StarRating from "@/components/common/StarRating";

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="custom-container flex flex-col gap-12 py-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-textPrimary max-w-[35rem] text-center text-[2.5rem] font-semibold">
            <span className="text-[#03732D] italic">Our service</span> is at the
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
    <div className="bg-theme-200 flex flex-[0_0_22.5rem] flex-col overflow-visible rounded-3xl p-6 shadow-[4px_4px_14px_0px_rgba(0,0,0,0.05)]">
      <StarRating value={4} />
      <h3 className="text-dark mt-5 text-2xl font-bold">{`"${review.title}"`}</h3>
      <p className="text-dark/80 mt-2.5 flex-1 text-lg">{review.description}</p>
      <hr className="mt-6 mb-4 text-[#ebebeb]" />
      <div className="flex items-center justify-between gap-4">
        <span className="text-textSecondary/60">{review.author}</span>
        <div className="text-textSecondary/60 flex items-center gap-1">
          <IoLocationOutline />
          <span className="font-medium">{review.location}</span>
        </div>
      </div>
    </div>
  );
}
