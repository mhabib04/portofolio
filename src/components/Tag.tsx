import clsx from "clsx";

export default function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full border-2 border-ink px-3 py-0.5 text-[13px] font-extrabold leading-6",
        className ?? "bg-paper",
      )}
    >
      {children}
    </span>
  );
}
