import { redirect } from 'next/navigation';

/**
 * Catch-all route for product category and detail pages
 * Redirects all sub-routes to main products page
 */
export default function ProductCatchAll() {
  redirect('/products');
}
