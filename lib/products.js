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