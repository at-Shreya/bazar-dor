export function getTopRisers(products, count = 6) {
  return products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, count);
}

export function getTopFallers(products, count = 6) {
  return products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, count);
}

export function getMarketStats(markets = []) {
  if (markets.length === 0) return null;

  const rows = markets
    .map((market) => ({ ...market, avg: (market.min + market.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const cheapest = markets.reduce((best, market) =>
    market.min < best.min ? market : best
  );
  const costliest = markets.reduce((best, market) =>
    market.max > best.max ? market : best
  );

  const totalAvg = rows.reduce((sum, row) => sum + row.avg, 0);
  const average = Math.round(totalAvg / rows.length);

  return { rows, cheapest, costliest, average };
}

export const SORT_OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-asc", label: "দাম: কম থেকে বেশি" },
  { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

export function sortProducts(products, sortKey) {
  const list = [...products];

  if (sortKey === "price-asc") {
    return list.sort((a, b) => a.today - b.today);
  }
  if (sortKey === "price-desc") {
    return list.sort((a, b) => b.today - a.today);
  }
  return list;
}