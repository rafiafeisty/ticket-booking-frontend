# 🎬 QuickShow – Ticket Booking Frontend

QuickShow is a modern movie ticket booking web application built with **Vite + React + Tailwind CSS**.  
It provides a smooth, animated user experience for browsing movies and booking tickets securely.

---

## 🚀 Features

### 🔐 Authentication (Clerk)
- User authentication is handled using **Clerk**
- Secure login and session management
- Booking-related actions require authentication

---

### 🏠 Public Access (No Login Required)
- Users can access the **homepage without logging in**
- View:
  - Currently available movies
  - Movie details (overview, cast, etc.)
- Interactive UI enhanced with **animation libraries** for better engagement

---

### 🎟️ Ticket Booking (Login Required)
- Users must log in to:
  - Select a movie
  - Choose show timing / seats
  - Proceed with ticket booking

---

### 💳 Secure Payments (Stripe)
- Integrated **Stripe Checkout** for payment processing
- Ensures safe and reliable transactions
- Booking is confirmed only after successful payment

---

### 📄 Booked Tickets
- Logged-in users can:
  - View their previously booked tickets
  - Check booking details anytime from their account

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Payments:** Stripe
- **Animations:** Modern animation libraries (for smooth UI/UX)

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rafiafeisty/ticket-booking-frontend.git
