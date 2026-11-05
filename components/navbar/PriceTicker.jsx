import { changeStyle, formatPct, toBnNumber, unitBn } from "@/lib/format";

export default function PriceTicker({ products }) {
  if (products.length === 0) return null;

  const items = [...products, ...products];

  return (
    <div
      className="ticker overflow-hidden border-b border-base-300 bg-primary/10"
      aria-label="আজকের দামের সংক্ষিপ্ত তালিকা"
    >
      <ul className="ticker-track flex">
        {items.map((product, index) => {
          const style = changeStyle(product.change.dir);
          const isCopy = index >= products.length;

          return (
            <li
              key={`${product.slug}-${index}`}
              aria-hidden={isCopy ? "true" : undefined}
              className="flex items-center gap-1.5 whitespace-nowrap px-5 py-2 text-sm"
            >
              <span aria-hidden="true">{product.image}</span>
              <span className="font-medium">{product.nameBn}</span>
              <span className="text-base-content/70">
                {toBnNumber(product.today)} টাকা/{unitBn(product.unit)}
              </span>
              <span className={`font-semibold ${style.text}`}>
                {style.arrow} {formatPct(product.change.pct)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}