export interface Testimonial {
  id: number;
  title: string;
  author: string;
  location: string;
  description: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Seamless booking experience",
    author: "Ananya Sharma",
    location: "Delhi",
    rating: 4,
    description:
      "Busly made booking my trip so easy! No more long queues at counters—just a few clicks and I was set to travel.",
  },
  {
    id: 2,
    title: "Affordable and reliable",
    author: "Rohit Mehta",
    location: "Bangalore",
    rating: 5,
    description:
      "I was pleasantly surprised by the ticket prices and how smooth the journey was. Busly really balances affordability with quality.",
  },
  {
    id: 3,
    title: "Perfect for last-minute plans",
    author: "Sneha Nair",
    location: "Kochi",
    rating: 4,
    description:
      "I had to book a bus just an hour before departure, and Busly made it possible. Quick, simple, and stress-free!",
  },
  {
    id: 4,
    title: "Safe journeys every time",
    author: "Arjun Verma",
    location: "Hyderabad",
    rating: 5,
    description:
      "Busly’s verified operators and transparent booking gave me peace of mind. I always feel safe traveling with them.",
  },
  {
    id: 5,
    title: "Travel made family-friendly",
    author: "Pooja Rathi",
    location: "Pune",
    rating: 5,
    description:
      "Booking for my family was so smooth. The seat selection and payment options made everything stress-free.",
  },
  {
    id: 6,
    title: "Bus travel made modern",
    author: "Vikram Singh",
    location: "Lucknow",
    rating: 4,
    description:
      "Busly has completely changed how I look at bus travel. From digital tickets to live tracking, it feels futuristic.",
  },
  {
    id: 7,
    title: "Always on time",
    author: "Meera Joshi",
    location: "Chandigarh",
    rating: 5,
    description:
      "With Busly, I never worry about missing my bus. The reminders and updates keep me perfectly on track.",
  },
];
