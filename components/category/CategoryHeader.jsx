import { toBnNumber } from "@/lib/format";

export default function CategoryHeader({ category, count }) {
  return (
    <section className="flex items-center gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
      <span
        aria-hidden="true"
        className="grid size-14 shrink-0 place-items-center rounded-2xl bg-base-200 text-3xl sm:size-16 sm:text-4xl"
      >
        {category.icon}
      </span>
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{category.nameBn}</h1>
        <p className="mt-1 text-sm text-base-content/60">
          {toBnNumber(count)}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </section>
  );
}