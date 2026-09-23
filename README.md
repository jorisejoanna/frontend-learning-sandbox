# Frontend Learning Sandbox
A frontend project built while learning React and TypeScript. It includes an inventory management dashboard, type-safe API integration with generic fetch wrappers, user authentication with JWT tokens, client-side protected routes, and interactive UI feedback with Tailwind CSS.

## Live Demo
The frontend is deployed live on Vercel:
-Web Application: https://frontend-learning-sandbox.vercel.app

## System Architecture

![System Architecture Diagram](frontend-learning-sandbox_system_architecture.drawio.png)

## Tech Stack
- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons & Feedback:** Lucide React, React Hot Toast
- **Hosting:** Vercel

## Features
- Inventory management (view list, create new item, delete item)
- Type-safe generic API client (`apiFetch<T>`) for outgoing requests
- User authentication with JWT token storage in `localStorage`
- Client-side protected routes with lock screen when unauthenticated
- Interactive toast notifications for user feedback on actions
- Responsive layout built with TailwindCSS

## Project Structure
- `frontend/src/App.tsx`: Main dashboard and application layout
- `frontend/src/components/`: Reusable UI components (`ItemCard`, `ItemForm`, `Header`, `LoginForm`, `ProtectedRoute`)
- `frontend/src/services/`: API client (`api.ts`) and authentication helper (`auth.ts`)
- `frontend/src/types`: TypeScript definitions (`inventory.ts`, `auth.ts`)

## Local Development Setup

### Prerequisites

- Node.js 18+
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jorisejoanna/frontend-learning-sandbox.git
   cd frontend-learning-sandbox
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## License
This project is licensed under the MIT License