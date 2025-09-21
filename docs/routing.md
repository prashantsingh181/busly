# 🌐 Routing in Busly

Busly uses **React Router v7** with the `createBrowserRouter` API to handle routing.
Routes are configured with **lazy loading** for better performance and a **ScreenLoader fallback** for smooth hydration.
Some routes are protected using a **PrivateRoute wrapper** to ensure authentication before access.

---

## ⚙️ Router Configuration

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import("./pages/home/Home")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "buses",
        lazy: {
          Component: async () => (await import("./pages/buses/Buses")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "cities",
        lazy: {
          Component: async () =>
            (await import("./pages/cities/Cities")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "search",
        lazy: {
          Component: async () =>
            (await import("./pages/search/Search")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "book",
        lazy: {
          Component: async () => (await import("./pages/book/Book")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "/ticket",
        lazy: {
          Component: async () => {
            const TicketList = (await import("./pages/ticket/TicketList"))
              .default;
            return () => (
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            );
          },
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "ticket/:ticketId",
        lazy: {
          Component: async () => {
            const TicketInfo = (await import("./pages/ticket/TicketInfo"))
              .default;
            return () => (
              <PrivateRoute>
                <TicketInfo />
              </PrivateRoute>
            );
          },
        },
        HydrateFallback: ScreenLoader,
      },
    ],
  },
  {
    path: "/login",
    lazy: {
      Component: async () => (await import("./pages/auth/Login")).default,
    },
    HydrateFallback: ScreenLoader,
  },
  { path: "*", element: <NotFound /> },
]);
```

---

## 📦 Technologies Used

* **React Router v7** → For declarative routing
* **Lazy Loading** → Code-splitting with `lazy` imports
* **HydrateFallback** → Displays `ScreenLoader` while hydrating lazy-loaded components
* **PrivateRoute** → Restricts access to certain pages (like Tickets)
* **Error Handling** → Custom `Error` component for failed routes
* **NotFound Page** → Graceful fallback for unmatched routes

---

## 🗂 Pages Overview

### `/` (Home)

Landing page that introduces the application and provides entry points to search, cities and buses.

### `/buses`

Displays the list of all buses and their types.

### `/cities`

Shows all cities that busly covers.

### `/search`

Search interface for finding buses between selected cities and dates.

### `/book`

Page to select bus seats, and proceed with booking.

### `/ticket`

Protected route showing the list of tickets booked by the user (requires login).

### `/ticket/:ticketId`

Protected route that displays detailed ticket information such as passenger details and bus info.

### `/login`

Authentication page for users to log into their account.

### `*` (Not Found)

Fallback page when no matching route is found.

---

## 🔑 Route Protection

* **Ticket List** (`/ticket`) and **Ticket Info** (`/ticket/:ticketId`)

  * Wrapped in `<PrivateRoute>`
  * Ensures that only authenticated users can access ticket information.

---

## 🚦 Navigation Flow

1. Users land on `/` (Home).
2. They can explore buses (`/buses`), cities (`/cities`), or search (`/search`).
3. Booking a bus redirects to `/book`.
4. Ticket details require authentication (`/ticket`, `/ticket/:ticketId`).
5. Non-logged-in users trying to access protected routes are redirected to `/login`.
6. Any invalid URL falls back to `NotFound`.

---
