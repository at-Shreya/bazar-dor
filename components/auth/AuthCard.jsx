import Link from "next/link";

export default function AuthCard({ title, subtitle, children }) {
  return (
    <main className="mx-auto w-full max-w-lg px-4 py-10 sm:py-14">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-base-content/65">{subtitle}</p>
      </div>

      <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
        {children}
      </div>

      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-base-content/60 hover:text-primary">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </main>
  );
}