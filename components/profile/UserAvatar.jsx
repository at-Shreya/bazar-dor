export default function UserAvatar({ user, className = "size-16 text-2xl" }) {
  if (user.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={user.image}
        alt={user.name}
        referrerPolicy="no-referrer"
        className={`${className} shrink-0 rounded-2xl object-cover`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} grid shrink-0 place-items-center rounded-2xl bg-primary/15 font-bold text-primary`}
    >
      {user.name?.charAt(0) ?? "?"}
    </span>
  );
}