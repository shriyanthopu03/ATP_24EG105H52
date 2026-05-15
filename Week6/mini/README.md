# Mini Project

This folder contains a full-stack employee management application built with Express, MongoDB, React, and React Router.

## Project Structure

- `backend/` - Express API with MongoDB and CORS
- `frontend/` - React + Vite client
- `req.http` - sample REST requests

## Features

- Create, read, update, and delete employees
- React routing for employee pages
- Context-based client state management
- MongoDB-backed persistence

## Backend

The backend exposes employee routes under `/emp-api`.

### Run

```bash
cd Week6/mini/backend
npm install
```

Set the required environment variables:

- `PORT`
- `DB_URL`
- `FRONTEND_URL`

Then start the server:

```bash
node server.js
```

### API

- `POST /emp-api/employees`
- `GET /emp-api/employees`
- `PUT /emp-api/employees/:id`
- `DELETE /emp-api/employees/:id`

## Frontend

The frontend is a Vite app with routes for home, create employee, list view, employee detail, and edit employee pages.

### Run

```bash
cd Week6/mini/frontend
npm install
npm run dev
```

## Notes

- Employee data is stored in MongoDB.
- The backend allows only the configured frontend origin through CORS.
