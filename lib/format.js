const bnNumber = new Intl.NumberFormat("bn-BD");

const bnDecimal = new Intl.NumberFormat("bn-BD", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const UNIT_BN = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export function toBnNumber(value) {
  return bnNumber.format(value);
}

export function unitBn(unit) {
  return UNIT_BN[unit] ?? unit;
}

export function formatPct(pct) {
  return `${bnDecimal.format(Math.abs(pct))}%`;
}

const CHANGE_STYLES = {
  up: { arrow: "▲", text: "text-error", badge: "bg-error/10 text-error" },
  down: { arrow: "▼", text: "text-success", badge: "bg-success/10 text-success" },
  flat: { arrow: "—", text: "text-neutral", badge: "bg-neutral/10 text-neutral" },
};

export function changeStyle(dir) {
  return CHANGE_STYLES[dir] ?? CHANGE_STYLES.flat;
}