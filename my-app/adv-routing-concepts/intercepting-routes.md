# Intercepting Routes in Next.js

Intercepting routes is an advanced routing mechanism that allows you to load a route from another part of your application without navigating away from the current context. This is particularly useful when you want to display new content while keeping the user in the same context.

## Why Use Intercepting Routes?

Intercepting routes are powerful in scenarios where you want to show additional content without redirecting the user to a new page. For example:

- Instead of creating a new page for a login form, you can display it as a modal on the same page.
- Instead of navigating to a new page for an enlarged photo in a gallery, you can show the photo in a modal or overlay on the current page.

## How Intercepting Routes Work

When a user clicks on a link, the route is intercepted, and the content is displayed within the current page. However, if the user reloads the page or navigates directly to the URL, the full page will be loaded instead of the intercepted content.

### Example: Photo Gallery

Consider a photo gallery where clicking on a photo shows an enlarged version. With intercepting routes:

1. Clicking on a photo intercepts the route and displays the enlarged photo in a modal.
2. If the user reloads the page or navigates directly to the photo's URL, the full page with the photo details is displayed.

## Setting Up Intercepting Routes

To create an intercepting route, you need to use a special folder naming convention. The folder name starts with a dot (`.`) followed by the route name. The number of dots indicates the relative level of the route.

### Folder Structure

For example, if you have a route `f2` that is one level up from the current route, you would create a folder named `(.)f2`. If it is two levels up, you would name it `(..)f2`.
app/
(.)f2/ // Intercepting route for f2 (one level up)
page.tsx
f1/
page.tsx
f2/
page.tsx

Copy

### Key Points

- **Intercepting on Navigation**: When navigating through the UI, the route is intercepted, and the content is displayed within the current context.
- **Full Page Reload**: On a full page reload, the route is not intercepted, and the full page is loaded instead.
- **Multiple Levels**: Use `(.)` for one level up, `(..)` for two levels up, and so on.

## Example: Photo Feed

Let’s say you have a photo feed and want to intercept the route when a user clicks on a photo to show an enlarged version.

### Folder Structure
app/
(.)photo/ // Intercepting route for photo (one level up)
page.tsx
feed/
page.tsx
photo/
page.tsx

Copy

### How It Works

1. When a user clicks on a photo in the feed, the `(.)photo` route is intercepted, and the enlarged photo is displayed in a modal.
2. If the user reloads the page or navigates directly to the photo's URL, the full `photo` page is displayed.

## Combining Intercepting and Regular Routes

You can use both intercepting routes and regular routes in your application. For example:

- Use intercepting routes for modals or overlays.
- Use regular routes for full-page navigation.

### Example: Login Modal

```jsx
// app/(.)login/page.tsx
export default function LoginModal() {
  return (
    <div className="modal">
      <h1>Login</h1>
      {/* Login form */}
    </div>
  );
}

// app/login/page.tsx
export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Login form */}
    </div>
  );
}
In this example:

Clicking on a login link intercepts the route and shows the login form in a modal.

Navigating directly to /login loads the full login page.

Intercepting routes in Next.js provide a powerful way to enhance user experience by displaying content in context without full-page navigation. By using the (.) folder naming convention, you can easily set up intercepting routes for modals, overlays, and more.