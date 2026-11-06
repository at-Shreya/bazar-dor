import EmptyState from "@/components/EmptyState";

export const metadata = {
  title: "পেজ পাওয়া যায়নি — বাজার দর",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <EmptyState
        title="দুঃখিত, পেজটি পাওয়া যায়নি"
        message="আপনি যে লিংকে এসেছেন সেটি ভুল হতে পারে, অথবা পেজটি সরিয়ে ফেলা হয়েছে। হোম পেজ থেকে আজকের সব দাম দেখুন।"
      />
    </main>
  );
}