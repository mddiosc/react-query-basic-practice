# React Query Basic Practice

A simple React application demonstrating the fundamentals of **TanStack Query** (formerly React Query) for server state management. This project showcases the difference between traditional state management with `useState` and `useEffect` versus the modern approach using React Query.

## 🎯 Purpose

This practice project illustrates how React Query simplifies data fetching, caching, and synchronization by comparing two implementations:

- **Traditional approach** with React hooks (`AppOld.tsx`)
- **React Query approach** with custom hooks (`App.tsx`)

## 🚀 Features

- **Random number generation** using the Random.org API
- **Automatic caching** and background refetching
- **Loading states** and error handling
- **Manual refetch** functionality
- **TypeScript** implementation for type safety

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **TanStack Query v4** - Server state management
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```text
src/
├── App.tsx           # React Query implementation
├── AppOld.tsx        # Traditional React hooks implementation
├── main.tsx          # App entry point with QueryClient setup
└── hooks/
    └── useRandom.tsx # Custom hook using React Query
```

## 🔧 Key Implementation Details

### Custom Hook (`useRandom`)

```tsx
export const useRandom = () => {
  const query = useQuery(["randomNumber"], getNumberFromApi);
  return query;
};
```

### React Query Benefits Demonstrated

- **Simplified state management** - No manual loading/error states
- **Automatic caching** - Prevents unnecessary API calls
- **Background updates** - Keeps data fresh automatically
- **Built-in error handling** - Consistent error state management

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd react-query-basic-practice

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 API Integration

The application integrates with the **Random.org API** to fetch random integers:

```text
https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
```

## 📚 Learning Outcomes

This project demonstrates:

1. **React Query setup** with QueryClient and QueryClientProvider
2. **Custom hook creation** for data fetching
3. **Comparison between traditional and modern approaches**
4. **TypeScript integration** with React Query
5. **Basic error handling** and loading states

## 🤝 Contributing

This is a practice project for learning purposes. Feel free to fork and experiment with additional React Query features like mutations, infinite queries, or optimistic updates.

## 📄 License

This project is for educational purposes.
