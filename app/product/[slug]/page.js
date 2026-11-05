import { notFound } from "next/navigation";
import MarketPriceTable from "@/components/product/MarketPriceTable";
import PriceSummary from "@/components/product/PriceSummary";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs";
import ProductHeader from "@/components/product/ProductHeader";
import { getProductBySlug } from "@/lib/api";
import { unitBn } from "@/lib/format";
import { getMarketStats } from "@/lib/products";

// ব্রাউজারের ট্যাবে পণ্যের নাম দেখাবে
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "পণ্য পাওয়া যায়নি — বাজার দর" };
  }

  return {
    title: `${product.nameBn} — বাজার দর`,
    description: `${product.nameBn}-এর আজকের দাম ও বিভিন্ন বাজারের দামের তুলনা`,
  };
}

export default async function ProductDetailsPage({ params }) {
  // Next.js 16-এ params একটা Promise, তাই await করতে হয়
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // ভুল slug হলে 404 পেজ দেখাবে
  if (!product) {
    notFound();
  }

  const stats = getMarketStats(product.markets);

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8">
      <ProductBreadcrumbs product={product} />

      <ProductHeader product={product} />

      {stats && (
        <section className="space-y-8 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
          <PriceSummary
            stats={stats}
            unit={unitBn(product.unit)}
            marketCount={product.markets.length}
          />
          <MarketPriceTable rows={stats.rows} />
        </section>
      )}
    </main>
  );
}