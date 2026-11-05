import { toBnNumber } from "@/lib/format";

export default function PriceSummary({ stats, unit, marketCount }) {
  const items = [
    {
      label: "সর্বনিম্ন দাম",
      value: stats.cheapest.min,
      color: "text-success",
      note: `সবচেয়ে কম: ${stats.cheapest.market}, ${stats.cheapest.division}`,
    },
    {
      label: "সর্বাধিক দাম",
      value: stats.costliest.max,
      color: "text-error",
      note: `সবচেয়ে বেশি: ${stats.costliest.market}, ${stats.costliest.division}`,
    },
    {
      label: "গড় দাম",
      value: stats.average,
      color: "text-primary",
      note: `${toBnNumber(marketCount)}টি বাজারের গড়, প্রতি ${unit}-এর হিসাবে`,
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold sm:text-xl">দামের সারসংক্ষেপ</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-base-300 bg-base-200/50 p-4"
          >
            <p className="text-xs text-base-content/60">{item.label}</p>
            <p className={`mt-1 text-2xl font-bold ${item.color}`}>
              {toBnNumber(item.value)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-base-content/60">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}