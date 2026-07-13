import { Building2, Check, Construction, Droplets, Home, Paintbrush, Sparkles, Store, Warehouse, Wind } from "lucide-react";
import { CtaBand, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const services = [
  { icon: Construction, title: "Nettoyage après chantier", text: "Remise en état complète avant livraison ou occupation.", items: ["Aspiration des poussières fines", "Retrait des traces et résidus", "Sols, plinthes et menuiseries", "Vitres et encadrements"] },
  { icon: Paintbrush, title: "Nettoyage après travaux", text: "Pour les appartements, villas et locaux fraîchement rénovés.", items: ["Dépoussiérage du haut vers le bas", "Dégraissage des surfaces", "Sanitaires et cuisine", "Finitions pièce par pièce"] },
  { icon: Building2, title: "Bureaux & entreprises", text: "Des espaces de travail propres et accueillants.", items: ["Postes et espaces communs", "Sols et surfaces vitrées", "Sanitaires", "Intervention ponctuelle ou régulière"] },
  { icon: Home, title: "Maisons & appartements", text: "Grand nettoyage adapté à votre logement.", items: ["Nettoyage en profondeur", "Avant ou après déménagement", "Cuisine et sanitaires", "Balcons et terrasses"] },
  { icon: Store, title: "Commerces & vitrines", text: "Une présentation nette pour vos clients.", items: ["Vitrines intérieures et extérieures", "Zones de vente", "Sols et comptoirs", "Remise en état avant ouverture"] },
  { icon: Warehouse, title: "Locaux & dépôts", text: "Nettoyage méthodique des grandes surfaces.", items: ["Aspiration industrielle", "Sols résistants", "Zones de circulation", "Évacuation des déchets légers"] },
  { icon: Wind, title: "Vitres & baies", text: "Une finition claire, sans traces visibles.", items: ["Fenêtres et baies vitrées", "Cadres et rails", "Vérandas", "Cloisons vitrées"] },
  { icon: Droplets, title: "Nettoyage en profondeur", text: "Pour retrouver une base propre et saine.", items: ["Recoins et surfaces difficiles", "Détartrage ciblé", "Dégraissage", "Désinfection des points de contact"] },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Toutes nos prestations" title="Un nettoyage adapté à chaque espace." text="Du logement au local professionnel, Lumière Clean construit l’intervention selon vos surfaces, vos délais et le niveau de finition attendu." image="bureaux.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Prestations</p>
            <h2 className="section-title">Du gros dépoussiérage aux finitions.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">Chaque devis précise les zones traitées et les priorités pour une prestation claire, sans zone oubliée.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text, items }) => (
              <article key={title} className="grid gap-6 rounded-lg border border-gray-200 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                <span className="service-icon"><Icon className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {items.map((item) => <li key={item} className="flex gap-2 text-sm text-gray-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4 rounded-lg bg-amber-50 p-6 text-sm text-gray-700">
            <Sparkles className="h-6 w-6 shrink-0 text-amber-500" />
            Une demande particulière ? Décrivez-la dans le formulaire de devis, nous adaptons la prestation au lieu.
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
