# Week 3

This folder contains a second backend project that uses Express, MongoDB, JWT authentication, and cookie-based login.

## Contents

- `backend2/` - Express + MongoDB API

## Backend 2

The backend provides user and product APIs with validation, authentication, and cart handling.

### Main Features

- User registration with hashed passwords
- Login with JWT token stored in an HTTP-only cookie
- Protected user routes using token verification
- CRUD operations for users and products
- Cart support for adding products to a user account

### Run

```bash
cd Week3/backend2
npm install
```

Set the required environment variables before starting the server:

- `PORT`
- `DB_URL`
- `SECRET_KEY`

Then run:

```bash
node server.js
```

### API Overview

- `/user-api/auth`
- `/user-api/users`
- `/user-api/users/:id`
- `/user-api/cart/product-id/:pid`
- `/product-api/product`
- `/product-api/product/:id`

## Notes

- MongoDB is required for this project.
- The user model includes a cart array that references products.