import type { User } from "@/types/user";
export const users: User[] = [
  {
    id: 1,
    name: "Prashant Singh",
    img: "/users/avatar-1.png",
    location: "Uttar Pradesh",
    description:
      "Frequent traveler who enjoys exploring new cities and meeting people.",
  },
  {
    id: 2,
    name: "Nishita Bisht",
    img: "/users/avatar-2.png",
    location: "Maharashtra",
    description:
      "A daily commuter who values comfort and on-time travel with Busly.",
  },
  {
    id: 3,
    name: "Deeksha Singh",
    img: "/users/avatar-3.png",
    location: "Tamil Nadu",
    description:
      "Weekend traveler who loves road trips and discovering hidden gems.",
  },
];

export function getUserById(userId: number) {
  return users.find((user) => user.id === userId);
}
