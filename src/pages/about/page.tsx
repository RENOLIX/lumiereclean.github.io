import { Check, ClipboardCheck, Handshake, Target } from "lucide-react";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="À propos de Zaki Cleaning" title="Une exigence de propreté pour tous les espaces." text="Nous accompagnons les particuliers, entreprises et collectivités avec des prestations de nettoyage organisées, du ponctuel au quotidien." image="fin-chantier.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center"><img src={imagePath("administration-bureau.png")} alt="Nettoyage professionnel dans un espace administratif" className="h-[520px] w-full rounded-lg object-cover" /><div><p className="section-kicker">Notre métier</p><h2 className="section-title">Faire de chaque lieu un espace net et accueillant.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Zaki Cleaning propose le nettoyage professionnel de tout type de lieu: fin de chantier, maisons habitées, villas, usines, administrations, écoles, cliniques et espaces commerciaux.</p><p className="mt-5 text-base leading-7 text-slate-600">Notre approche est simple: comprendre vos besoins, organiser l’intervention, utiliser le matériel approprié et contrôler la qualité avant notre départ.</p><ul className="mt-8 space-y-4">{["Un devis défini selon votre lieu", "Une prestation ponctuelle ou régulière", "Des produits adaptés aux surfaces", "Un contrôle final de la qualité"].map((item) => <li key={item} className="flex gap-3 text-sm font-extrabold text-slate-800"><Check className="h-5 w-5 text-sky-600" />{item}</li>)}</ul></div></div></section>
      <section className="bg-[#071521] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">{[{ icon: Target, title: "Précision", text: "Nous avançons zone par zone pour garder une qualité régulière." }, { icon: Handshake, title: "Clarté", text: "Le périmètre et les priorités sont définis avant l’intervention." }, { icon: ClipboardCheck, title: "Contrôle", text: "Le résultat final est vérifié avant la fin de la prestation." }].map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-sky-400 pt-6"><Icon className="h-7 w-7 text-sky-300" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></div>)}</div></section>
      <CtaBand />
    </SiteShell>
  );
}
