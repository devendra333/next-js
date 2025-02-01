Next.js Layouts and Metadata

What is a Layout?

A layout is a UI component that is shared between multiple pages in your Next.js app.

Example Structure:

     -------- HEADER ----
      
      CONTENT

    ------ FOOTER --------

By default, you should export a React component from a layout.tsx or layout.jsx file. The layout component takes a children prop, which represents the page.tsx components.

Root Layout in Next.js

Every Next.js app should have a root layout. If you delete the root layout, Next.js will recreate it automatically.

Nested Layouts

Some pages might require a special layout. For example, a product details page at localhost:3000/products/1 may have its own layout while still being wrapped by the root layout.

Rendering Order:

The root layout (layout.tsx) is rendered.

The page.tsx for productId is rendered inside it.

If productId has its own layout, it wraps the page.tsx.

Final structure:

- Root Layout
    - Product ID Layout
        - Product ID Page.tsx
    - Product ID Layout closes
- Root Layout closes

Excluding Header and Footer from Certain Pages

To exclude the header and footer from specific pages, you can use multiple root layouts and manage different layouts for different pages.

Routing Metadata in Next.js

Metadata is used for SEO and search engine indexing and applies only to server components.

How Metadata Works:

Metadata can be defined in layout.tsx (applies to all pages) or page.tsx (applies only to that page).

Metadata follows a top-down approach starting from the root layout.

When metadata exists in multiple places along a route, they merge, with page metadata overriding layout metadata for matching properties.

Dynamic Metadata

For dynamic metadata, use the generateMetadata function inside layout.tsx or page.tsx (e.g., productId).

In any given file, use either metadata or generateMetadata, but not both.