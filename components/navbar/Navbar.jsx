import Link from "next/link";
import { getCategories, getProducts } from "@/lib/api";
import AuthButtons from "./AuthButtons";
import BanglaDate from "./BanglaDate";
import CategoryLinks from "./CategoryLinks";
import PriceTicker from "./PriceTicker";

export default async function Navbar() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <header>
      <div className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-primary text-xl shadow-sm sm:size-11"
            >
              🛒
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold sm:text-xl">বাজার দর</span>
              <BanglaDate className="block text-xs text-base-content/60" />
            </span>
          </Link>

          <AuthButtons />
        </div>

        <CategoryLinks categories={categories} />
      </div>

      <PriceTicker products={products} />
    </header>
  );
}