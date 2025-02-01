Error Handling in Next.js
Next.js provides a powerful way to handle errors in your application using the error.tsx file. This file acts as an error boundary and wraps the page.tsx component to catch and display errors.

error.tsx File
The error.tsx file is used to show errors only for the concerned part of the application. It wraps the page.tsx component inside an error boundary.

Key Features:
Catches errors in the page.tsx component and its nested children.

Provides a way to recover from errors.

Can be placed in different folders to control the granularity of error handling.

Recovering from Errors
For errors that can be fixed with a simple retry, you can allow users to re-render the page.tsx component on the client side.

Example:
tsx
Copy
"use client"; // Mark this as a client component

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
The reset function re-renders the page.tsx component, allowing users to recover from the error.

Handling Server-Side Errors
For server-side errors, you can use the startTransition hook from React to handle recovery.

Example:
tsx
Copy
"use client"; // Mark this as a client component
import { startTransition } from 'react';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const handleRetry = () => {
    startTransition(() => {
      reset(); // Retry rendering the component
    });
  };

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleRetry}>Try again</button>
    </div>
  );
}
Error Boundary Behavior
Errors bubble up to the closest parent error boundary.

An error.tsx file handles errors not only for its own folder but also for all nested child segments below it.

You can place error.tsx files in different folders to control the granularity of error handling.

Handling Errors in layout.tsx
Errors in layout.tsx cannot be caught by an error.tsx file in the same segment.

To handle errors in the root layout, Next.js provides a special file called global-error.tsx.

global-error.tsx File
The global-error.tsx file is placed in the root directory and handles errors for the entire application.

Key Features:
Works only in production mode.

Requires html and body tags to be rendered.

Example:
tsx
Copy
"use client"; // Mark this as a client component

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Something went wrong globally!</h2>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
Folder Structure Example
Copy
app/
  global-error.tsx  <-- Handles global errors
  layout.tsx
  error.tsx         <-- Handles errors for the root segment
  dashboard/
    error.tsx       <-- Handles errors for the dashboard segment
    page.tsx
  settings/
    error.tsx       <-- Handles errors for the settings segment
    page.tsx
Summary
Use error.tsx to handle errors for specific segments of your application.

Allow users to recover from errors by re-rendering the page.tsx component.

Use global-error.tsx to handle errors in the root layout.

Place error.tsx files in different folders to control the granularity of error handling.