export interface Testimonial {
  id: number;
  title: string;
  author: string;
  location: string;
  description: string;
  tag: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Incredible journey of learning",
    author: "Karthik Srinivasan",
    location: "Tamil Nadu",
    description:
      "Joining this community gave me the confidence to lead and the support to grow. Every step felt guided.",
    tag: "Growth",
  },
  {
    id: 2,
    title: "Rediscovering my cultural roots",
    author: "Priya Ramesh",
    location: "Singapore",
    description:
      "Living abroad, I had lost touch with my Tamil heritage. This community helped me reconnect with my roots and share them with my children.",
    tag: "Heritage",
  },
  {
    id: 3,
    title: "Building bridges across generations",
    author: "Venkat Krishnamurthy",
    location: "Chennai",
    description:
      "The mentorship programs here created meaningful connections between young professionals and experienced leaders. Truly transformative experience.",
    tag: "Mentorship",
  },
  {
    id: 4,
    title: "Finding my voice through community service",
    author: "Deepika Nair",
    location: "Kerala",
    description:
      "Volunteering with this organization taught me that small actions can create ripple effects. I discovered my passion for social impact.",
    tag: "Service",
  },
  {
    id: 5,
    title: "From stranger to family",
    author: "Arjun Patel",
    location: "Mumbai",
    description:
      "Moving to a new city was daunting, but this community welcomed me with open arms. I found not just friends, but a second family.",
    tag: "Community",
  },
  {
    id: 6,
    title: "Empowering the next generation",
    author: "Lakshmi Iyer",
    location: "Bangalore",
    description:
      "Teaching Tamil language to young children through this platform has been incredibly rewarding. Seeing their enthusiasm gives me hope for our culture's future.",
    tag: "Education",
  },
  {
    id: 7,
    title: "Leadership through collaboration",
    author: "Rajesh Kumar",
    location: "Coimbatore",
    description:
      "Leading a project here taught me that the best leaders listen more than they speak. The collaborative spirit is infectious and inspiring.",
    tag: "Leadership",
  },
];
