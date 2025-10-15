// src/components/DetailsSection.tsx
import SectionCard from "./SectionCard";
import Chip from "./Chip";
import { UserRound, Globe, Phone, Flag } from "lucide-react";

const details = [
  { text: "26 years",             icon: <UserRound size={18} /> },
  { text: "mi-sitio.com",         icon: <Globe size={18} />, href: "https://mi-sitio.com" },
  { text: "+57 3000000000",       icon: <Phone size={18} />, href: "tel:+573000000000" },
  { text: "Colombia",             icon: <Flag size={18} /> },
];

export default function DetailsSection() {
  return (
    <SectionCard title="Details">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {details.map((d) => (
          <div key={d.text} className="flex">
            <Chip text={d.text} icon={d.icon} href={d.href} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
