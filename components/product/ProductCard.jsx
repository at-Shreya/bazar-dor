import Link from "next/link";
import { changeStyle, formatPct, toBnNumber, unitBn } from "@/lib/format";

export default function ProductCard({ product }) {
  const style = changeStyle(product.change.dir);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="card card-border border-base-300 bg-base-100 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="card-body gap-4 p-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
          >
            {product.image}
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-semibold">{product.nameBn}</h3>
            <p className="text-xs text-base-content/60">
              প্রতি {unitBn(product.unit)}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-xs text-base-content/60">আজকের দাম</p>
            <p className="text-xl font-bold">
              {toBnNumber(product.today)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
          </div>
          <span className={`badge badge-sm border-0 font-semibold ${style.badge}`}>
            {style.arrow} {formatPct(product.change.pct)}
          </span>
        </div>
      </div>
    </Link>
  );
}