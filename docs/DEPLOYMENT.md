# Deployment Guide

This project is configured for automated deployment to Render and Vercel.

## Backend (Render)
1. Push your code to GitHub.
2. Log into [Render](https://dashboard.render.com).
3. Click "New +" and select "Web Service".
4. Connect your GitHub repository.
5. Render should automatically detect the `render.yaml` in the repository root and configure the service. If it doesn't, use these manual settings:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add your Environment Variables matching `.env.example` in the Render dashboard.

## Frontend (Vercel)
1. Log into [Vercel](https://vercel.com).
2. Click "Add New..." -> "Project".
3. Import your GitHub repository.
4. Set the Framework Preset to Next.js.
5. Set the **Root Directory** to `client`.
6. Add the environment variable: `NEXT_PUBLIC_API_URL` pointing to your deployed Render URL.
7. Click "Deploy".
