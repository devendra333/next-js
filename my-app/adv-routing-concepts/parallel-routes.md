# Parallel Routing in Next.js

Parallel routing is an advanced routing mechanism that allows us to render multiple pages simultaneously within the same layout. This approach offers several benefits over the traditional method of rendering components sequentially.

## Traditional Way

In the traditional approach, components are rendered sequentially within a layout:

```jsx
<Layout>
  <UserAnalytics />
  <RevenueMetrics />
  <Notifications />
</Layout>
While this method works, parallel routing can achieve the same result with additional benefits.

Setting Up Parallel Routes
Parallel routes in Next.js are defined using a feature known as slots. Slots help organize content in a modular way.

Creating Slots
To create a slot, use the @ folder naming convention. For example:

Copy
dashboard/
  @users/
  @analytics/
  @notifications/
Each defined slot automatically becomes a prop in its corresponding layout.tsx file.

Important Notes
Slots are not URL segments: They do not affect the URL structure. For example, /dashboard/users or /dashboard/@users will result in a 404 error.

Analogy: The children inside a layout is also a slot.

Use Cases for Parallel Routes
Dashboards with multiple sections

Split-view interfaces

Multiple pane layouts

Benefits of Parallel Routing
Great for splitting content into a layout: Allows for a more organized and modular structure.

Independent route handling:

Each route can function independently.

Loading states can be shown for individual components.

Sub-navigation: Each slot can function as a mini-application with its own sub-navigation (e.g., navigating between default notifications and archived notifications).

Handling Unmatched Routes
Navigation from the UI
When navigating through the UI, Next.js keeps showing whatever was in the unmatched slots before.

Page Reload
On page reload, Next.js looks for a default.tsx file in each unmatched slot. This file is critical as it serves as a fallback to render content when the framework cannot retrieve the slot's active state from the current URL.

Adding a default.tsx File
For each unmatched slot, add a default.tsx file. For example:

Copy
dashboard/
  @users/
    default.tsx
  @analytics/
    default.tsx
  @notifications/
    default.tsx
This file acts as a fallback for the respective slot.

Conditional Routes
You can conditionally render either {notifications} or {login} in the layout file based on certain conditions.

jsx
Copy
<Layout>
  {isLoggedIn ? <Notifications /> : <Login />}
</Layout>
This allows for dynamic content rendering based on user state or other conditions.

Parallel routing in Next.js offers a powerful way to manage complex layouts with multiple sections, providing flexibility and modularity in your application's structure.