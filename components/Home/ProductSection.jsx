import ProductCard from "@/components/product/ProductCard";

export default function ProductSection({ id, title, icon, subtitle, products }) {
  return (
    <section id={id} className="scroll-mt-6">
      <div className="mb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
          {icon}
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-base-content/60">{subtitle}</p>
        )}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-base-300 bg-base-100 p-6 text-center text-base-content/60">
          এই মুহূর্তে কোনো পণ্যের তথ্য পাওয়া যাচ্ছে না। একটু পরে আবার চেষ্টা করুন।
        </p>
      )}
    </section>
  );
}