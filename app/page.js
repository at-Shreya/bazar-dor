import { Suspense } from "react";
import Hero from "@/components/Home/Hero";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeProductsSkeleton from "@/components/Home/HomeProductsSkeleton";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-8 sm:py-10">
      <Hero />

      <Suspense fallback={<HomeProductsSkeleton />}>
        <HomeProducts />
      </Suspense>
    </main>
  );
}