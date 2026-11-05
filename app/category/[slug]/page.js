import { connection } from "next/server";
import CategoryHeader from "@/components/category/CategoryHeader";
import SortableProductGrid from "@/components/category/SortableProductGrid";
import EmptyState from "@/components/EmptyState";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return {
    title: category
      ? `${category.nameBn}-এর দাম — বাজার দর`
      : "ক্যাটাগরি পাওয়া যায়নি — বাজার দর",
  };
}

export default async function CategoryPage({ params }) {
  await connection();

  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <EmptyState
          title="এই ক্যাটাগরি পাওয়া যায়নি"
          message="লিংকটি ভুল হতে পারে, অথবা ক্যাটাগরিটি আর নেই। উপরের তালিকা থেকে অন্য ক্যাটাগরি বেছে নিন।"
        />
      </main>
    );
  }

  const products = await getProductsByCategory(slug, { cache: "no-store" });

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8">
      <CategoryHeader category={category} count={products.length} />

      {products.length > 0 ? (
        <SortableProductGrid products={products} />
      ) : (
        <EmptyState
          icon={category.icon}
          title="এই ক্যাটাগরিতে এখন কোনো পণ্য নেই"
          message="কিছুক্ষণ পর আবার দেখুন, অথবা অন্য ক্যাটাগরির দাম দেখুন।"
        />
      )}
    </main>
  );
}