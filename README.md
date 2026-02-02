# 💰 FinTrack

A personal finance tracker built with React to help you manage your income and expenses.

![FinTrack Screenshot](./public/light-logo.png)

## ✨ Features

- **📊 Dashboard** - View your balance, income, expenses, and spending charts
- **💳 Transactions** - Add, edit, delete, filter, and sort transactions
- **🏷️ Categories** - Create custom categories with icons and colors
- **🔐 Authentication** - Secure signup/login with Supabase Auth
- **🌙 Dark Mode** - Toggle between light and dark themes
- **📱 Responsive** - Works on desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Styled Components
- **State Management**: React Query (TanStack Query)
- **Backend**: Supabase (Auth + Database)
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Routing**: React Router

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/fin-track.git
   cd fin-track
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Create `transactions` and `categories` tables
   - Enable Row Level Security (RLS)
   - Copy your project URL and anon key

4. Update `src/services/supabase.js` with your credentials:

   ```js
   const supabaseUrl = "YOUR_SUPABASE_URL";
   const supabaseKey = "YOUR_ANON_KEY";
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:5173 in your browser

## 📁 Project Structure

```
src/
├── context/        # React Context (Dark Mode)
├── features/       # Feature-based components
│   ├── authentication/
│   ├── categories/
│   ├── dashboard/
│   └── transactions/
├── hooks/          # Custom hooks
├── pages/          # Page components
├── services/       # API functions
├── styles/         # Global styles
└── ui/             # Reusable UI components
```

## 📝 Database Schema

### transactions

| Column      | Type    | Description               |
| ----------- | ------- | ------------------------- |
| id          | uuid    | Primary key               |
| user_id     | uuid    | Foreign key to auth.users |
| type        | text    | "income" or "expense"     |
| amount      | numeric | Transaction amount        |
| category    | text    | Category name             |
| description | text    | Optional description      |
| date        | date    | Transaction date          |

### categories

| Column | Type | Description           |
| ------ | ---- | --------------------- |
| id     | uuid | Primary key           |
| name   | text | Category name         |
| type   | text | "income" or "expense" |
| icon   | text | Emoji icon            |
| color  | text | Hex color code        |

## 👤 Author

**Atabek** - [GitHub](https://github.com/itisatashi)

## 📄 License

This project is open source and available under the MIT License.
