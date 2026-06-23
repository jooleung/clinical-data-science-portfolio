export function LumonMark() {
  const cells = [
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true
  ];

  return (
    <span className="pixel-logo" aria-hidden="true">
      {cells.map((filled, index) => (
        <span key={index} className={filled ? "bg-current" : "bg-transparent"} />
      ))}
    </span>
  );
}
