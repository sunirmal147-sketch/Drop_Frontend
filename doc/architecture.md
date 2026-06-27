# Architecture

The Drop Frontend is built with a focus on performance, scalability, and maintainability.

## Core Technologies

- **Framework**: Next.js 16 using the new App Router. This allows us to take full advantage of React Server Components (RSCs) and improved routing capabilities.
- **Language**: TypeScript ensures type safety across the application, reducing runtime errors and improving developer experience.
- **Styling**: Tailwind CSS v4 provides utility-first styling for building responsive and customized designs rapidly without writing custom CSS files.
- **Animations**: Framer Motion is used for complex page transitions and micro-interactions, providing a premium feel to the application.
- **Icons**: Lucide React provides a clean and modern icon set.

## Project Structure

- `src/app`: Contains the routing structure. Each folder represents a route segment, and `page.tsx` defines the UI for that segment.
- `src/components`: Reusable UI components. (Recommended to be created and structured as the project grows).
- `src/lib`: Utility functions, helpers, and shared logic.
- `public`: Static assets like images and fonts.

## Data Fetching

We use Axios for making HTTP requests to the backend. API calls are typically organized in a separate service layer (e.g., `src/services` or `src/api`) to keep the components clean and focused on UI logic.
