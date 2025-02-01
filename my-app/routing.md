# Next.js File-Based Routing System

Next.js uses a file-based routing system where the URLs you can directly access in your browser are determined by how you organize your files and folders in your code.

## Conventions for Next.js Routing

- **All routes must live inside the `app` folder.**
- **Route files should be named as `page.tsx` or `page.jsx`.**
- **Each folder represents a segment of the URL path.**

If all these conventions are followed, the file automatically becomes available as a route.

## Layouts in Next.js

Next.js automatically creates the `layout.tsx` file if you access it.

- A `page.tsx` searches for the `layout.tsx` in its hierarchy.
- If its own `layout.tsx` is not present, the root layout is shown.

## Dynamic Routes (Denoted by `[]` Square Brackets)

Example:

- `/products` - Lists products 1, 2, 3.
- `/product/1` - Details about product 1.

## Catch-All Segments

For example, this URL won't work: http://localhost:3000/products/product1/reviews/review1/dhwjshdjwshdswd



Because we have only handled up to `reviewsId`.

If you want to handle anything that starts with `docs` or `products`, you need to create a folder named `[...slugs]` (slugs is commonly used for URLs).

## Custom 404 Page

- Create a `not-found.tsx` file.
- You can also programmatically render it using the `notFound` function.
- You can create specific `notFound` pages for specific sections of the site, e.g., a `notFound` inside the `review` directory.

## File Colocation

- A route becomes accessible only when the file is named `page.tsx` or `page.jsx` and should be a default export.
- You can place any file inside the folder without the names `page.tsx` or `page.jsx` to avoid accidental rendering in the router.
- You can also have folders to keep these files outside the `app` folder, like a `components` folder. Shadcn lib does this.

## Private Folders

A way to tell Next.js not to include a folder in routing. This is just an internal folder.

- Any folder and subfolders are excluded from routing.
- Add `_` (underscore or `%5F`) at the start of the folder name.

## Route Groups

Route groups let you logically organize your project files without impacting the URL structure.

For example, if you have `register`, `login`, and `forgot-pass` routes present inside the `app` folder, and you want to group them inside an `app/auth` folder, the routing will be `/auth/login`, etc.

You can organize and remove the `auth` path by wrapping the `auth` folder name in parentheses:

(auth)
- login
- page.tsx
- forgot-pass
- page.tsx

