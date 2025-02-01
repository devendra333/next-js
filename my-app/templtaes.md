Templates in Next.js
Templates are similar to layouts in that they are also UI shared between multiple pages in your app. However, there are key differences in behavior when a user navigates to a different route.

Key Differences Between Templates and Layouts
Feature	Layout	Template
Mounting Behavior	Mounted only once and persists.	A new instance is mounted on navigation.
DOM Elements	Reused across routes.	Recreated on navigation.
State	Preserved across routes.	Cleared on navigation.
Effects	Not re-synced.	Re-synced on navigation.



Use templates when you want:

A fresh UI instance on every navigation.

DOM elements to be recreated.

State and effects to reset on navigation.

Creating a Template
To create a template, create a template.js or template.tsx file. The file structure is almost the same as layout.tsx.

Example:
tsx
Copy
// app/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Template Header</h1>
      {children}
      <h1>Template Footer</h1>
    </div>
  );
}
How Templates Work
When a user navigates to a different route:

A new instance of the template component is mounted.

DOM elements are recreated.

State is cleared.

Effects are re-synced.

Example Folder Structure
Copy
app/
  dashboard/
    template.tsx  <-- Template for dashboard pages
    page.tsx
  settings/
    template.tsx  <-- Template for settings pages
    page.tsx
Summary
Templates are UI shared between multiple pages, but they behave differently from layouts.

On navigation, templates:

Create a new instance.

Recreate DOM elements.

Clear state.

Re-sync effects.

Use templates when you need a fresh UI instance on every navigation.