import Link from "next/link";
import {
  changeStyle,
  formatPct,
  formatTaka,
  toBnNumber,
  unitBn,
} from "@/lib/format";

// গতকালের সাথে তুলনা করে একটা বাক্য তৈরি
function TrendLine({ today, yesterday }) {
  const diff = today - yesterday;

  if (diff === 0) {
    return (
      <>
        গতকালের তুলনায় আজ দাম <strong className="text-neutral">অপরিবর্তিত</strong>
      </>
    );
  }

  const isUp = diff > 0;
  return (
    <>
      গতকালের তুলনায় আজ দাম{" "}
      <strong className={isUp ? "text-error" : "text-success"}>
        {isUp ? "বেড়েছে" : "কমেছে"}
      </strong>{" "}
      · {formatTaka(Math.abs(diff))}
    </>
  );
}

export default function ProductHeader({ product }) {
  const style = changeStyle(product.change.dir);
  const unit = unitBn(product.unit);

  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* বাম দিক: emoji + নাম + ট্যাগ + বর্ণনা */}
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid size-16 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl sm:size-20 sm:text-5xl"
          >
            {product.image}
          </span>

          <div className="min-w-0 space-y-2">
            <h1 className="text-2xl font-bold sm:text-3xl">{product.nameBn}</h1>

            {/* Category ট্যাগ + একক */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/category/${product.category}`}
                className="badge badge-outline border-primary/30 text-primary hover:bg-primary/10"
              >
                <span aria-hidden="true">{product.categoryIcon}</span>
                {product.categoryNameBn}
              </Link>
              <span className="badge border-0 bg-base-200">প্রতি {unit}</span>
            </div>

            {/* বাজারের সংক্ষিপ্ত বর্ণনা */}
            <p className="text-sm text-base-content/80">
              <TrendLine today={product.today} yesterday={product.yesterday} />
            </p>
            <p className="text-xs text-base-content/55">
              গত সপ্তাহে {formatTaka(product.lastWeek)} · গত মাসে{" "}
              {formatTaka(product.lastMonth)}
            </p>
          </div>
        </div>

        {/* ডান দিক: আজকের দামের বক্স */}
        <div className="rounded-2xl bg-base-200 px-6 py-4 text-center sm:min-w-40">
          <p className="text-xs text-base-content/60">আজকের দাম</p>
          <p className="text-4xl font-bold leading-tight">{toBnNumber(product.today)}</p>
          <p className="text-sm text-base-content/60">টাকা / {unit}</p>
          <p className={`mt-1 text-sm font-semibold ${style.text}`}>
            {style.arrow} {formatPct(product.change.pct)}
          </p>
        </div>
      </div>
    </section>
  );
}