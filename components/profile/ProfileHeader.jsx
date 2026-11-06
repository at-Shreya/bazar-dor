export default function ProfileHeader({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      <p className="mt-1 text-sm text-base-content/65">{subtitle}</p>
    </div>
  );
}