import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const gallery = [
  { image: "end-of-construction.png", title: "Fin de chantier", text: "Remise en état avant livraison." },
  { image: "house-occupied.png", title: "Maison habitée", text: "Nettoyage complet du logement." },
  { image: "villa.png", title: "Villa", text: "Intérieur, baies vitrées et extérieurs." },
  { image: "factory.png", title: "Site industriel", text: "Zones de production et circulations." },
  { image: "administration.png", title: "Administration", text: "Accueil et bureaux soignés." },
  { image: "school.png", title: "École", text: "Espaces de classe et parties communes." },
  { image: "clinic.png", title: "Clinique", text: "Accueil et zones de consultation." },
  { image: "disinfection.png", title: "Désinfection", text: "Points de contact ciblés." },
  { image: "daily-cleaning.png", title: "Entretien quotidien", text: "Des locaux prêts chaque matin." },
];

export default function RealisationsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Nos réalisations" title="Des interventions qui correspondent à vos espaces." text="Chaque image présente un type de nettoyage réalisé avec une méthode adaptée au lieu et à son usage." image="administration.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="section-kicker">Interventions</p><h2 className="section-title">Neuf environnements, une même exigence.</h2></div><div className="max-w-md space-y-3 text-sm leading-6 text-slate-600"><p className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />Des équipes et produits choisis selon les surfaces.</p><p className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />Une finition contrôlée avant la remise des lieux.</p></div></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((item) => <article key={item.title} className="group overflow-hidden rounded-lg bg-[#071521]"><div className="h-72 overflow-hidden"><img src={imagePath(item.image)} alt={`Intervention Zaki Cleaning : ${item.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="flex items-center justify-between gap-4 px-5 py-5 text-white"><div><h3 className="font-extrabold">{item.title}</h3><p className="mt-1 text-sm text-slate-300">{item.text}</p></div><ArrowUpRight className="h-5 w-5 shrink-0 text-sky-300" /></div></article>)}</div><div className="mt-12 text-center"><Link to="/devis" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-extrabold text-slate-900 hover:border-sky-500 hover:text-sky-700">Parler de votre projet <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
      <CtaBand />
    </SiteShell>
  );
}
