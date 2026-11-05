"use client";

import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { toBnNumber } from "@/lib/format";
import { SORT_OPTIONS, sortProducts } from "@/lib/products";

export default function SortableProductGrid({ products }) {
  const [sortKey, setSortKey] = useState("default");

  const sortedProducts = sortProducts(products, sortKey);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-base-content/70">
          মোট {toBnNumber(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-base-content/70">সাজান</span>
          <select
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value)}
            className="select select-sm w-auto min-w-44 border-base-300 bg-base-100"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}