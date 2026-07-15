import { CheckCircle2 } from "lucide-react";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const gallery = [
  { image: "fin-chantier.png", title: "Fin de chantier", text: "Sols, baies vitrées et poussières de finition." },
  { image: "desinfection-detail.png", title: "Nettoyage de précision", text: "Traitement soigné des surfaces et menuiseries." },
  { image: "administration-bureau.png", title: "Espaces professionnels", text: "Bureaux, zones d’accueil et circulations entretenus." },
];

export default function RealisationsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Notre niveau de finition" title="Des lieux propres, prêts à être utilisés." text="Zaki Cleaning s’adapte aux espaces résidentiels, administratifs, scolaires et professionnels avec une exigence constante sur les détails." image="administration-bureau.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="section-kicker">Galerie</p><h2 className="section-title">Le niveau de propreté que nous visons.</h2><p className="mt-6 text-base leading-7 text-slate-600">Un travail méthodique, des surfaces nettes et une présentation soignée de chaque espace.</p><div className="mt-8 space-y-3">{["Préparation du matériel", "Traitement par zones", "Vérification visuelle", "Validation avant départ"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-extrabold"><CheckCircle2 className="h-5 w-5 text-sky-600" />{item}</div>)}</div></div><div className="grid gap-5 sm:grid-cols-2">{gallery.map((item, index) => <article key={item.title} className={index === 0 ? "sm:col-span-2" : ""}><img src={imagePath(item.image)} alt={item.title} className={`w-full rounded-lg object-cover ${index === 0 ? "h-[420px]" : "h-[300px]"}`} /><h3 className="mt-4 text-lg font-extrabold">{item.title}</h3><p className="mt-1 text-sm text-slate-600">{item.text}</p></article>)}</div></div></div></section>
      <CtaBand />
    </SiteShell>
  );
}
