export default function ProfileLoading() {
  return (
    <main
      className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 sm:py-10"
      aria-busy="true"
      aria-label="প্রোফাইল লোড হচ্ছে"
    >
      <div className="space-y-2">
        <div className="skeleton h-8 w-44" />
        <div className="skeleton h-4 w-60" />
      </div>

      <div className="flex items-center gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 sm:p-6">
        <div className="skeleton size-16 shrink-0 rounded-2xl" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-5 w-40" />
          <div className="skeleton h-4 w-56" />
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-base-300 bg-base-100 p-5 sm:p-6">
        <div className="skeleton h-6 w-16" />
        <div className="skeleton h-36 rounded-2xl" />
        <div className="skeleton h-10 rounded-xl" />
      </div>
    </main>
  );
}