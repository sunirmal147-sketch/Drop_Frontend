# State Management

## Local State

For component-level state, standard React hooks (`useState`, `useReducer`) are sufficient. This should be the default choice for state that doesn't need to be shared across multiple, unrelated components.

## Server State

Since we are using Next.js App Router, much of the data fetching and rendering can be handled via React Server Components (RSCs). This naturally manages the "server state" by allowing direct data fetching on the server and passing it down as props.

For client-side data fetching and caching (if required in the future), we might consider integrating tools like React Query or SWR, but initially, Next.js built-in caching mechanisms should be leveraged as much as possible.

## Global Client State

Currently, the application relies on React Context for simple global state (like theme preferences or basic user session data). Avoid introducing heavy global state management libraries (like Redux) unless the state complexity grows significantly. Context + Custom Hooks is the preferred pattern for lightweight global state.
