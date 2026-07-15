import { Building2, CalendarDays, Check, Construction, Cross, Droplets, Factory, GraduationCap, HardHat, Home, House, Landmark } from "lucide-react";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const services = [
  { icon: HardHat, image: "fin-chantier.png", title: "Fin de chantier", text: "Remise en état complète avant livraison ou installation.", items: ["Poussières fines et gravats légers", "Traces de peinture et résidus", "Sols, plinthes et menuiseries", "Vitres et encadrements"] },
  { icon: Home, image: "desinfection-detail.png", title: "Maisons habitées", text: "Nettoyage en profondeur sans perturber votre quotidien.", items: ["Cuisine et sanitaires", "Sols et surfaces de contact", "Recoins et rangements", "Intervention ponctuelle"] },
  { icon: House, image: "fin-chantier.png", title: "Maisons & villas", text: "Un nettoyage complet, intérieur comme extérieur selon vos besoins.", items: ["Grand nettoyage", "Baies vitrées", "Terrasses et balcons", "Avant ou après déménagement"] },
  { icon: Factory, image: "administration-bureau.png", title: "Usines & sites industriels", text: "Entretien organisé des zones de production et de circulation.", items: ["Sols résistants", "Zones de travail", "Dépoussiérage ciblé", "Espaces communs"] },
  { icon: Landmark, image: "administration-bureau.png", title: "Administrations", text: "Des espaces d’accueil et de travail propres chaque jour.", items: ["Bureaux et couloirs", "Accueil et salles d’attente", "Sanitaires", "Surfaces vitrées"] },
  { icon: GraduationCap, image: "administration-bureau.png", title: "Écoles", text: "Une propreté adaptée aux salles de classe et espaces partagés.", items: ["Salles et couloirs", "Tables et points de contact", "Sanitaires", "Espaces administratifs"] },
  { icon: Cross, image: "desinfection-detail.png", title: "Cliniques", text: "Nettoyage soigneux des espaces d’accueil et de consultation.", items: ["Salles d’attente", "Bureaux médicaux", "Sols et sanitaires", "Zones de contact"] },
  { icon: Droplets, image: "desinfection-detail.png", title: "Désinfection", text: "Traitement ciblé des zones qui demandent une hygiène renforcée.", items: ["Poignées et interrupteurs", "Sanitaires", "Plans de travail", "Espaces très fréquentés"] },
  { icon: CalendarDays, image: "administration-bureau.png", title: "Nettoyage quotidien", text: "Une prestation planifiée pour conserver des lieux nets au jour le jour.", items: ["Fréquence adaptée", "Équipes organisées", "Suivi des priorités", "Qualité régulière"] },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Tous nos services" title="Une solution de nettoyage pour chaque type de lieu." text="Zaki Cleaning intervient auprès des particuliers, entreprises, écoles, administrations, usines et cliniques avec une prestation définie selon vos besoins." image="administration-bureau.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="section-kicker">Prestations</p><h2 className="section-title">Un entretien professionnel, du ponctuel au quotidien.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Chaque prestation est préparée selon le type de lieu, le niveau d’intervention attendu et les contraintes de votre activité.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, image, title, text, items }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_14px_40px_rgba(7,21,33,0.08)] transition-transform hover:-translate-y-1">
                <img src={imagePath(image)} alt={title} className="h-52 w-full object-cover" />
                <div className="p-6"><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-600"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-xl font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p><ul className="mt-5 space-y-2.5">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />{item}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
