
# CureAyurvedic Frontend

A modern e-commerce frontend for CureAyurvedic, built with Next.js, React, and Tailwind CSS. This project provides a seamless shopping experience, including cart management, checkout, PayU payment integration, and admin dashboard.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Payment Integration](#payment-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (login/register/guest checkout)
- Product catalog and search
- Cart and Buy Now functionality
- Checkout with shipping and billing address forms
- PayU payment gateway integration
- Order summary and confirmation
- Admin dashboard (login protected)
- Responsive design with Tailwind CSS
- Form validation and error handling

---

## Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PayU Payment Gateway](https://www.payu.in/)
- [Lucide Icons](https://lucide.dev/)
- [Node.js](https://nodejs.org/) (for backend API, not included here)
- ShipRocket

---

## Project Structure

```
cureayurvedic-my-app/
├── public/
│   └── images/...
├── src/
│   ├── app/
│   │   ├── checkout/
│   │   │   └── page.js
│   │   ├── admin/
│   │   ├── blogs/
│   │   ├── cart/
│   │   ├── components/
│   │   ├── login/
│   │   ├── main-components/
│   │   ├── order-successful/
│   │   ├── payment/
│   │   ├── shop/
│   │   └── ...
│   ├── contexts/
│   └── lib/
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── ...
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Cure-my-knee/cureayurveda-nextjs.git
   cd cureayurvedic-my-app
   ```
2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**

   - Copy `.env.example` to `.env.local` and fill in the required values.
4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. **Open your browser:**

   - Visit [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3010
NEXT_PUBLIC_PAYU_MERCHANT_KEY=your_payu_merchant_key
NEXT_PUBLIC_PAYU_SALT=your_payu_salt
# Add other variables as needed
```

---

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

---

## API Endpoints

The frontend communicates with a backend API (not included in this repo). Key endpoints:

- `POST /api/orders/create` — Create a new order
- `POST /api/payu/initiate` — Initiate PayU payment
- `GET /api/products` — Fetch product list
- `POST /api/auth/login` — User login
- ...and others as required

Update `NEXT_PUBLIC_API_BASE_URL` in your environment variables to point to your backend.

---

## Payment Integration

- Integrated with [PayU Payment Gateway](https://www.payu.in/).
- Payment is initiated after order creation.
- Users are redirected to PayU for payment completion.
- Supports Cash on Delivery (COD) as an alternative.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

---

---

---
