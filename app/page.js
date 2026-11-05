import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-8 sm:py-10">
      <Hero />

      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
      </section>
    </main>
  );
}