import * as React from "react";

export default function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="
        w-full rounded-xl border-2 border-black dark:border-neutral-800
        bg-neutral-100 dark:bg-neutral-900
        shadow-[0_10px_0_#000] dark:shadow-[0_10px_0_#111]
        px-4 sm:px-6 py-4 sm:py-5
      "
    >
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-sm sm:text-base font-extrabold">{title}</h3>
      </div>
      {children}
    </section>
  );
}
