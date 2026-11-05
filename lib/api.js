const BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

// Default refresh data after every 1 hour
const DEFAULT_FETCH_OPTIONS = { next: { revalidate: 3600 } };

async function fetchFromApi(path, fetchOptions = DEFAULT_FETCH_OPTIONS) {
  for (const baseUrl of BASE_URLS) {
    try {
      const res = await fetch(`${baseUrl}${path}`, fetchOptions);
      if (res.ok) {
        return await res.json();
      }
    } catch (error) {
      console.error(`API error (${baseUrl}${path}):`, error.message);
    }
  }
  return null;
}

export async function getCategories() {
  const data = await fetchFromApi("/categories");
  return Array.isArray(data) ? data : [];
}

export async function getProducts(fetchOptions) {
  const data = await fetchFromApi("/products", fetchOptions);
  return Array.isArray(data) ? data : [];
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((product) => product.slug === slug) ?? null;
}