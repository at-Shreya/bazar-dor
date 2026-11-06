import { formatTaka } from "@/lib/format";

export default function MarketPriceTable({ rows }) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold sm:text-xl">বাজারভিত্তিক আজকের দাম</h2>
        <p className="mt-1 text-xs text-base-content/60">
          কম গড় দাম থেকে বেশি গড় দাম অনুযায়ী সাজানো
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-base-300">
        <table className="table table-zebra table-sm sm:table-md">
          <thead className="bg-base-200/60 text-base-content/70">
            <tr>
              <th>বাজার</th>
              <th className="hidden sm:table-cell">বিভাগ</th>
              <th className="text-right">সর্বনিম্ন</th>
              <th className="text-right">সর্বাধিক</th>
              <th className="text-right">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.market}>
                <td>
                  <span className="font-medium">{row.market}</span>
                  <span className="block text-xs text-base-content/55 sm:hidden">
                    {row.division}
                  </span>
                </td>
                <td className="hidden sm:table-cell">{row.division}</td>
                <td className="whitespace-nowrap text-right">{formatTaka(row.min)}</td>
                <td className="whitespace-nowrap text-right">{formatTaka(row.max)}</td>
                <td className="whitespace-nowrap text-right font-bold">
                  {formatTaka(row.avg)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}