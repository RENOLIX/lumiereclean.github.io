import { ArrowUpRight, CalendarDays, Check, Cross, Droplets, Factory, GraduationCap, HardHat, Home, House, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const services = [
  { icon: HardHat, image: "end-of-construction.png", title: "Fin de chantier", text: "Remise en état complète avant livraison ou installation.", items: ["Poussières fines et résidus", "Sols, plinthes et menuiseries", "Vitres et encadrements"] },
  { icon: Home, image: "house-occupied.png", title: "Maisons habitées", text: "Un grand nettoyage précis qui respecte votre quotidien.", items: ["Cuisine et sanitaires", "Sols et surfaces de contact", "Intervention ponctuelle"] },
  { icon: House, image: "villa.png", title: "Maisons & villas", text: "Une prestation complète à l'intérieur comme à l'extérieur.", items: ["Grand nettoyage", "Baies vitrées", "Terrasses et balcons"] },
  { icon: Factory, image: "factory.png", title: "Usines & sites industriels", text: "Entretien organisé des zones de production et de circulation.", items: ["Sols résistants", "Zones de travail", "Espaces communs"] },
  { icon: Landmark, image: "administration.png", title: "Administrations", text: "Des bureaux, accueils et sanitaires soignés chaque jour.", items: ["Bureaux et couloirs", "Salles d'attente", "Surfaces vitrées"] },
  { icon: GraduationCap, image: "school.png", title: "Écoles", text: "Une propreté adaptée aux lieux d'apprentissage partagés.", items: ["Salles et couloirs", "Tables et contacts", "Sanitaires"] },
  { icon: Cross, image: "clinic.png", title: "Cliniques", text: "Nettoyage soigneux des espaces d'accueil et de consultation.", items: ["Salles d'attente", "Sols et sanitaires", "Zones de contact"] },
  { icon: Droplets, image: "disinfection.png", title: "Désinfection", text: "Traitement ciblé des surfaces qui demandent une hygiène renforcée.", items: ["Poignées et interrupteurs", "Sanitaires", "Espaces fréquentés"] },
  { icon: CalendarDays, image: "daily-cleaning.png", title: "Nettoyage quotidien", text: "Une fréquence planifiée pour des lieux nets au jour le jour.", items: ["Équipes organisées", "Horaires adaptés", "Qualité régulière"] },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Tous nos services" title="Une solution professionnelle pour chaque lieu." text="Particuliers, entreprises et collectivités : nous adaptons l'équipe, le matériel et la méthode à votre espace." image="daily-cleaning.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="section-kicker">Prestations</p><h2 className="section-title">Un service pensé dans le détail.</h2></div><p className="max-w-xl text-base leading-7 text-slate-600">Chaque intervention est préparée selon le lieu, l'état des surfaces et vos contraintes d'accès ou d'horaires.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, image, title, text, items }) => (
              <article key={title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_16px_42px_rgba(7,21,33,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(7,21,33,0.14)]">
                <div className="relative h-60 overflow-hidden"><img src={imagePath(image)} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center bg-sky-400 text-[#071521]"><Icon className="h-5 w-5" /></div></div>
                <div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-extrabold text-slate-950">{title}</h3><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-sky-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">{items.map((item) => <li key={item} className="flex gap-2 text-sm font-semibold text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />{item}</li>)}</ul></div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center"><Link to="/devis" className="inline-flex items-center gap-2 rounded-lg bg-[#071521] px-6 py-4 text-sm font-extrabold text-white hover:bg-slate-800">Demander un devis gratuit <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
