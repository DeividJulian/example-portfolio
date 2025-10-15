// src/components/Chip.tsx
import Image from "next/image";
import * as React from "react";

export default function Chip({
  text,
  icon,       // ← NUEVO: componente React de icono
  iconSrc,    // ← opcional: ruta de imagen
  alt,
  href,
}: {
  text: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  alt?: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black dark:border-neutral-800 bg-background px-3 py-2 text-sm shadow-[0_6px_0_#000] dark:shadow-[0_6px_0_#111]">
      {icon
        ? <span className="grid place-items-center">{icon}</span>
        : iconSrc
          ? <Image src={iconSrc} alt={alt ?? ""} width={18} height={18} className="rounded-sm" />
          : null}
      {text}
    </span>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="hover:translate-y-[1px] transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}
