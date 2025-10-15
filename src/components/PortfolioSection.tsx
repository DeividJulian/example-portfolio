import SectionCard from "./SectionCard";
import Chip from "./Chip";

/* Marcas (Simple Icons) */
import { SiBehance, SiInstagram, SiYoutube, SiDribbble } from "react-icons/si";
/* Icono genérico para Bento (Lucide) */
import { Box } from "lucide-react";

const links = [
  { text: "Bento",     href: "https://bento.me/usuario",     icon: <Box size={18} /> },
  { text: "Behance",   href: "https://behance.net/usuario",  icon: <SiBehance size={18} /> },
  { text: "Instagram", href: "https://instagram.com/usuario",icon: <SiInstagram size={18} /> },
  { text: "Youtube",   href: "https://youtube.com/@usuario", icon: <SiYoutube size={18} /> },
  { text: "Dribbble",  href: "https://dribbble.com/usuario", icon: <SiDribbble size={18} /> },
];

export default function PortfolioSection() {
  return (
    <SectionCard title="Portfolio">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {links.map((l) => (
          <div key={l.text} className="flex">
            <Chip text={l.text} href={l.href} icon={l.icon} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
