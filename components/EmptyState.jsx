import Link from "next/link";

export default function EmptyState({
  title = "কিছু খুঁজে পাওয়া যায়নি",
  message = "আপনি যা খুঁজছেন তা এখানে নেই।",
  icon = "🧺",
}) {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 px-6 py-12 text-center shadow-sm sm:py-16">
      <p
        aria-hidden="true"
        className="text-6xl font-bold tracking-wider text-primary/25 sm:text-7xl"
      >
        ৪০৪
      </p>
      <p aria-hidden="true" className="mt-2 text-5xl">
        {icon}
      </p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{title}</h1>
      <p className="mx-auto mt-2 max-w-md text-base-content/70">{message}</p>
      <Link href="/" className="btn btn-primary mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </section>
  );
}