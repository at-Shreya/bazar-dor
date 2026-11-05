import { ProductGridSkeleton } from "@/components/product/ProductCardSkeleton";

function SectionSkeleton({ id, count }) {
  return (
    <section id={id} className="scroll-mt-6">
      <div className="skeleton mb-5 h-7 w-48" />
      <ProductGridSkeleton count={count} />
    </section>
  );
}

export default function HomeProductsSkeleton() {
  return (
    <>
      <SectionSkeleton count={6} />
      <SectionSkeleton count={6} />
      <SectionSkeleton id="সব-পণ্য" count={9} />
    </>
  );
}