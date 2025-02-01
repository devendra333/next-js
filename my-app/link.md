Client-Side Navigation in Next.js

Next.js provides the <Link> component for client-side navigation. It is a React component that extends the HTML <a> element and is the primary way to navigate between routes in Next.js.

<Link> Component

The <Link> component is used to navigate between pages in a Next.js application without reloading the page. It is imported from next/link.

Example:

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}

Active Links

To style or highlight the currently active link, you can use the usePathname hook from next/navigation. This hook returns the current URL pathname.

Example:

"use client"; // Mark this as a client component
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
        About
      </Link>
    </nav>
  );
}

Programmatic Navigation

1. Client Components

For client-side navigation, use the useRouter hook from next/navigation.

Example:

"use client"; // Mark this as a client component
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about'); // Navigate to the About page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}

2. Server Components

For server-side navigation, use the redirect function from next/navigation.

Example:

import { redirect } from 'next/navigation';

export default function ServerComponent() {
  redirect('/about'); // Redirect to the About page
}

Summary

<Link> Component: Used for client-side navigation between routes.

Active Links: Use the usePathname hook to determine the current route and apply styles.

Programmatic Navigation:

Use useRouter in client components.

Use redirect in server components.

