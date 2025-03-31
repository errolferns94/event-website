# Event Management App

## Overview
This is a full-stack event management application built using Next.js and Supabase. The app allows users to:
- Sign in using JWT Authentication (Supabase Auth)
- Create, view, and manage events
- Receive real-time event updates via WebSockets
- Deploy easily on Vercel

## Features
- **User Authentication**: Uses JWT-based authentication with Supabase.
- **Event CRUD**: Create, Read, Update, and Delete events.
- **Real-time Updates**: Uses Supabase Realtime and WebSockets for live event updates.
- **Responsive UI**: Built with Tailwind CSS for a modern design.

## Tech Stack
- **Frontend**: Next.js, React
- **Backend**: Supabase (PostgreSQL, Auth, Realtime, WebSockets)
- **Deployment**: Vercel

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/event-management-app.git
cd event-management-app
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env.local` file and add the following variables:
```sh
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_JWT_SECRET=your_supabase_jwt_secret
```

### 4. Run the development server
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints
- `GET /api/events`: Fetches all events
- `POST /api/events`: Creates a new event

## WebSocket Integration
This app uses Supabase Realtime and WebSockets to update events live. Clients automatically receive event updates when changes occur in the database.

## Deployment
1. Push your code to GitHub.
2. Deploy using Vercel (`vercel deploy`).
3. Add environment variables in Vercel settings.
4. Your app is live! 🎉

## License
This project is open-source under the MIT License.


