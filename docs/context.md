# 🧩 Contexts in Busly

Busly uses **React Context API** to manage global state for user authentication and ticket booking.
This ensures that critical data such as login state, user details, and ticket information is available throughout the app without excessive prop drilling.

---

## 📦 Technologies Used

- **React Context API** → For global state management
- **Custom Hooks** (`useLocalStorage`) → Persistent state synced with local storage

---

## 🔑 Contexts Overview

### 1. `LoginInfoContext`

**File:** `src/context/login-details/LoginInfoContext.tsx`

This context manages **user authentication state**.

#### Provides

- `isLoggedIn`: `boolean` → Whether the user is logged in
- `userInfo`: `User | null` → Information of the logged-in user
- `login(userId: number)`: Function to log in a user by ID
- `logout()`: Function to log out the current user

#### Implementation

- Uses `useLocalStorage` with `LOGIN_STORAGE_KEY` to persist login sessions.
- Fetches user details using `getUserById`.

#### Usage Example

```tsx
const { isLoggedIn, userInfo, login, logout } = useLoginInfo();

if (isLoggedIn) {
  console.log("Welcome,", userInfo.name);
} else {
  login(1); // Logs in user with ID 1
}
```

---

### 2. `TicketInfoContext`

**File:** `src/context/ticket-details/TicketInfoContext.tsx`

This context manages **ticket booking and retrieval**.

#### Provides

- `userTickets`: List of tickets belonging to the logged-in user
- `getTicketByTicketId(ticketId: string)`: Find a specific ticket
- `bookTicket(ticket: Ticket)`: Book and persist a new ticket
- `getBookedSeats(busId, from, to, date)`: Retrieve already booked seats for a bus on a given route and date

#### Implementation

- Uses `useLocalStorage` with `TICKET_STORAGE_KEY` to store user tickets.
- Combines stored tickets with demo tickets (`demoTickets`).
- Validates overlapping journeys with `doJourneysOverlap`.
- Ensures seat conflicts are prevented using `getBookedSeats`.

#### Usage Example

```tsx
const { bookTicket, userTickets, getBookedSeats } = useTicketInfo();

bookTicket({
  ticketId: "T123",
  userId: 1,
  busId: "BUS101",
  routeId: "ROUTE1",
  from: "LKO",
  to: "DEL",
  date: "2025-09-22",
  bookedSeats: [{ seatNo: 5 }],
});

console.log(userTickets);
```

---

## 🔄 How They Work Together

1. **LoginInfoContext** authenticates a user and keeps track of their session.
2. **TicketInfoContext** uses the logged-in user’s info (`userInfo.id`) to filter tickets specific to them.
3. Together, they provide a seamless experience where a user can log in, search for buses, book tickets, and later view their personal bookings.

---

## 📜 Summary

- `LoginInfoContext` → Handles login, logout, and session persistence.
- `TicketInfoContext` → Handles booking, retrieving, and managing tickets.
- Both contexts are essential to **Busly’s authentication and booking system**.

---
