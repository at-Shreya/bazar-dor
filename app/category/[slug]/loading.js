import { ProductGridSkeleton } from "@/components/product/ProductCardSkeleton";

export default function CategoryLoading() {
  return (
    <main
      className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8"
      aria-busy="true"
      aria-label="ক্যাটাগরির তথ্য লোড হচ্ছে"
    >
      {/* Header skeleton */}
      <div className="flex items-center gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 sm:p-6">
        <div className="skeleton size-14 shrink-0 rounded-2xl sm:size-16" />
        <div className="space-y-2">
          <div className="skeleton h-7 w-28" />
          <div className="skeleton h-4 w-52" />
        </div>
      </div>

      {/* Toolbar skeleton */}
      <div className="flex items-center justify-between rounded-2xl border border-base-300 bg-base-100 px-4 py-3">
        <div className="skeleton h-4 w-40" />
        <div className="skeleton h-8 w-48" />
      </div>

      <ProductGridSkeleton count={6} />
    </main>
  );
}