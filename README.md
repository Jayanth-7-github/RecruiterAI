# RecruiterAI

AI-powered recruiting platform landing page.

## Tech Stack

- **Frontend**: React (Vite) + TailwindCSS
- **Backend**: Node.js + Express + MongoDB
- **Database**: MongoDB (Local or Atlas)

## Prerequisites

- Node.js installed
- MongoDB installed and running locally on default port (27017) OR set `MONGO_URI` in `server/.env`

## Getting Started

### 1. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### 2. Configure Environment

**Server:**
Edit `server/.env` if needed. Default:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/recruiterai
```

### 3. Run Application

You can run the server and client in separate terminals.

**Start Backend (Terminal 1):**
```bash
cd server
npm start
```

**Start Frontend (Terminal 2):**
```bash
cd client
npm run dev
```

The frontend will act as the landing page running typically on `http://localhost:5173`.
The backend will listen for form submissions on `http://localhost:5000`.

## Features

- **Responsive Landing Page**: Modern SaaS design.
- **Contact Form**: Submits data to the backend API.
- **Components**: Hero, Flowcharts, Metrics, Logo Marquee, Testimonials, FAQ.

## Deployment

- **Frontend**: Ready for Vercel deployment.
- **Backend**: Ready for Render/Railway deployment. Ensure environment variables are set in production.