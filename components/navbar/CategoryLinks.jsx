"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryLinks({ categories }) {
  const pathname = usePathname();

  if (categories.length === 0) return null;

  return (
    <nav aria-label="পণ্যের ক্যাটাগরি" className="border-t border-base-300">
      <ul className="no-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {categories.map((category) => {
          const href = `/category/${category.slug}`;
          const isActive = pathname === href;

          return (
            <li key={category.slug} className="shrink-0">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-primary font-semibold text-primary-content shadow-sm"
                    : "text-base-content/80 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.nameBn}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}