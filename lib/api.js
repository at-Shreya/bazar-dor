// মূল API কাজ না করলে পরের বিকল্প URL থেকে চেষ্টা করবে
const BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function fetchFromApi(path) {
  for (const baseUrl of BASE_URLS) {
    try {
      const res = await fetch(`${baseUrl}${path}`, {
        next: { revalidate: 3600 },
      });
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

export async function getProducts() {
  const data = await fetchFromApi("/products");
  return Array.isArray(data) ? data : [];
}