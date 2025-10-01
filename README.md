# Finance Tracker

A modern, full-stack personal finance management application built with Next.js 15, React 19, TypeScript, and Supabase. Track your income, expenses, investments, and savings with detailed analytics and trend analysis.

## 🚀 Live Demo

**Deployed URL:** https://finance-app-nextjs-ruddy.vercel.app

## ✨ Features

### Core Functionality

- **Multi-Type Transaction Tracking**: Record Income, Expenses, Investments, and Savings
- **Smart Categorization**: Organize expenses across predefined categories (Housing, Transport, Health, Food, Education, Other)
- **Advanced Analytics**: View financial trends with period-over-period comparisons
- **Time-Based Filtering**: Analyze data across 5 time ranges (Last 24 hours, 7 days, 30 days, 3 months, 12 months)
- **Transaction Management**: Full CRUD operations for all transactions

### User Experience

- **Passwordless Authentication**: Magic link login via Supabase Auth
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: System-aware theme switching with next-themes
- **Real-time Updates**: Instant data synchronization across sessions
- **Loading States & Skeletons**: Smooth user experience with proper loading indicators

### User Settings & Customization

- **Profile Management**: Update display name and default dashboard view
- **Avatar Upload**: Crop and upload profile pictures with file validation (JPEG, PNG, WebP support, max 2MB)
- **Personalized Defaults**: Set preferred time filter for dashboard analytics
- **Settings Persistence**: User preferences stored in Supabase user metadata

### Data Visualization

- **Trend Components**: Visual representation of financial data with percentage changes
- **Period Comparisons**: Compare current period against previous period with arrow indicators
- **Transaction Grouping**: Automatically group and sum transactions by date
- **Currency Formatting**: Proper USD currency formatting using Intl.NumberFormat

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Reusable component library built on Radix UI
- **React Hook Form** - Form state management with Zod validation
- **Sonner** - Toast notifications
- **React Easy Crop** - Image cropping functionality

### Backend & Database

- **Supabase** - PostgreSQL database with real-time subscriptions
- **Supabase Auth** - Authentication with magic links
- **Supabase Storage** - File storage for user avatars
- **Custom SQL Functions** - Optimized database queries for analytics

### Development Tools

- **ESLint 9** - Code linting
- **Faker.js** - Test data generation
- **JSON Server** - Mock API for development
- **TypeScript 5** - Latest TypeScript features

## 🗄️ Database Schema

### Transactions Table

```sql
- id: UUID (Primary Key)
- amount: NUMERIC (Non-negative)
- type: ENUM ('Income', 'Expense', 'Investment', 'Saving')
- description: TEXT (Optional)
- category: ENUM ('Housing', 'Transport', 'Health', 'Food', 'Education', 'Other')
- created_at: TIMESTAMP
- user_id: UUID (Foreign Key)
```

### Custom SQL Functions

- `calculate_total()` - Aggregates transaction amounts with period comparisons
- `fetch_transactions()` - Retrieves paginated transactions with time filtering

## 📁 Project Structure

```
├── app/                   # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   ├── dashboard/         # Main application pages
│   └── playground/        # Development testing
├── actions/               # Server Actions
├── components/            # React components
│   ├── ui/                # Shadcn/ui components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard-specific components
│   ├── filters/           # Time filter components
│   ├── settings/          # User settings components
│   ├── transaction/       # Transaction CRUD components
│   └── skeletons/         # Loading state components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── middlewares/           # Next.js middleware
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions and configurations
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 22+
- npm/yarn/pnpm/bun
- Supabase account

### 1. Clone the repository

```bash
git clone https://github.com/rohxn-rai/finance-app-nextjs.git
cd finance-app-nextjs
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key
```

### 4. Database Setup

1. Create a new Supabase project
2. Run the SQL functions from `utils/supabase/querys/` in your Supabase SQL editor
3. Set up Row Level Security (RLS) policies for the transactions table
4. Configure Supabase Storage bucket for avatars

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📊 Data Seeding

The project includes a comprehensive seeding script for development:

```bash
tsx seed.ts          # Seed Supabase database with test data
```

The seeder creates:

- 5 test users with email authentication
- 100 realistic transactions across all types
- Proper category distribution (80% expenses, 10% income, 10% investments/savings)
- Randomized amounts within realistic ranges

## 🔐 Authentication Flow

1. **Magic Link Login**: Users enter email address
2. **OTP Verification**: Supabase sends magic link to user's email
3. **Session Management**: Automatic session handling with middleware
4. **Route Protection**: Authenticated routes protected via middleware
5. **User Metadata**: Settings and preferences stored in Supabase auth

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices with touch-friendly interfaces
- **Tablet Support**: Intermediate layouts for tablet viewports
- **Desktop Enhanced**: Full-featured experience on larger screens
- **Dark Mode**: System-aware theme with manual override option

## 🔄 State Management

- **Server State**: Supabase real-time subscriptions
- **Form State**: React Hook Form with Zod validation
- **UI State**: React useState and useEffect hooks
- **Theme State**: next-themes provider
- **Toast State**: Sonner for user feedback

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. **Build Optimization**: Next.js optimized bundle
2. **Environment Variables**: Configured for production
3. **Database Connection**: Supabase production instance
4. **CDN Assets**: Static assets served via Vercel CDN

## 📈 Performance Features

- **Server-Side Rendering**: Next.js App Router with RSC
- **Database Optimization**: Custom SQL functions for efficient queries
- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Component-level code splitting
- **Caching Strategy**: Supabase query caching and revalidation

## 🧪 Development Features

- **Type Safety**: Full TypeScript coverage with strict mode
- **Form Validation**: Zod schema validation with error handling
- **Error Boundaries**: React Error Boundary for graceful error handling
- **Loading States**: Comprehensive skeleton components
- **Development Tools**: ESLint, Prettier, and debugging utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Supabase** for providing an excellent backend-as-a-service platform
- **Shadcn/ui** for the beautiful and accessible component library
- **Vercel** for seamless deployment and hosting
- **Next.js Team** for the powerful React framework
