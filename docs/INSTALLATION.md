# Installation Guide

Follow these steps to set up the project locally.

## Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (or Local MongoDB)
- Cloudinary Account (for image hosting)

## Backend Setup
1. Open the `server` directory.
2. Run `npm install` to install dependencies.
3. Rename `.env.example` to `.env` and fill in your credentials.
4. Run `npm start` to start the backend server on `http://localhost:5000`.

## Frontend Setup
1. Open the `client` directory.
2. Run `npm install` to install dependencies.
3. Rename `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL=http://localhost:5000/api`.
4. Run `npm run dev` to start the Next.js development server on `http://localhost:3000`.
