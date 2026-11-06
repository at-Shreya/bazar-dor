export default function ProductDetailsLoading() {
  return (
    <main
      className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8"
      aria-busy="true"
      aria-label="পণ্যের তথ্য লোড হচ্ছে"
    >
      <div className="skeleton h-4 w-48" />

      <div className="flex flex-col gap-5 rounded-3xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-4">
          <div className="skeleton size-16 shrink-0 rounded-2xl sm:size-20" />
          <div className="space-y-3">
            <div className="skeleton h-8 w-52" />
            <div className="skeleton h-5 w-32" />
            <div className="skeleton h-4 w-64" />
          </div>
        </div>
        <div className="skeleton h-28 w-full rounded-2xl sm:w-40" />
      </div>

      <div className="space-y-6 rounded-3xl border border-base-300 bg-base-100 p-5 sm:p-6">
        <div className="skeleton h-6 w-40" />
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="skeleton h-24 rounded-2xl" />
          <div className="skeleton h-24 rounded-2xl" />
          <div className="skeleton h-24 rounded-2xl" />
        </div>
        <div className="skeleton h-6 w-52" />
        <div className="skeleton h-72 rounded-2xl" />
      </div>
    </main>
  );
}