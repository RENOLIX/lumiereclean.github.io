import { ArrowRight, Building2, Check, ClipboardCheck, Construction, Home, Layers, Paintbrush, ShieldCheck, Sparkles, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const services = [
  { icon: Construction, title: "Après chantier", text: "Poussières fines, traces de peinture, résidus et remise à niveau avant livraison." },
  { icon: Paintbrush, title: "Après travaux", text: "Nettoyage complet après rénovation d’un appartement, d’une villa ou d’un local." },
  { icon: Building2, title: "Bureaux & locaux", text: "Entretien professionnel des sols, sanitaires, vitres et espaces de travail." },
  { icon: Home, title: "Maisons & appartements", text: "Grand nettoyage, remise en état, déménagement ou entretien ponctuel." },
  { icon: Store, title: "Commerces", text: "Une surface accueillante, des vitrines nettes et des zones clients impeccables." },
  { icon: Layers, title: "Nettoyage en profondeur", text: "Traitement minutieux des recoins, surfaces, menuiseries, sols et équipements." },
];

export default function Index() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Nettoyage professionnel à Alger"
        title="Après les travaux, place à la lumière."
        text="Lumière Clean remet vos espaces en état après chantier ou rénovation, avec une méthode précise et un contrôle final avant livraison."
        image="hero-chantier.png"
      />
      <TrustStrip />

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">Notre spécialité</p>
              <h2 className="section-title">La finition propre de votre chantier.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-gray-600">Nous intervenons quand les travaux se terminent: aspiration des poussières fines, dégraissage, vitres, sols, sanitaires et retrait des traces pour rendre le lieu immédiatement présentable.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card">
                <span className="service-icon"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
                <Link to={title === "Après chantier" ? "/nettoyage-apres-chantier" : "/services"} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[460px]">
            <img src={imagePath("nettoyage-detail.png")} alt="Nettoyage minutieux d'une fenêtre après travaux" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 lg:px-16 lg:py-20">
            <p className="section-kicker">Une méthode complète</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">Chaque détail compte avant la remise des clés.</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Protection", "Repérage des surfaces fragiles et organisation de l’intervention."],
                ["Nettoyage", "Travail du haut vers le bas avec matériel professionnel adapté."],
                ["Contrôle", "Vérification pièce par pièce avec corrections immédiates."],
              ].map(([title, text], index) => (
                <div key={title} className="flex gap-4 border-t border-white/15 pt-5">
                  <span className="text-sm font-extrabold text-emerald-400">0{index + 1}</span>
                  <div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-400">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Surfaces respectées", text: "Produits et outils choisis selon le verre, le bois, le métal, la pierre ou le carrelage." },
              { icon: ClipboardCheck, title: "Intervention organisée", text: "Périmètre, priorités et résultat attendu sont validés avant le démarrage." },
              { icon: Sparkles, title: "Résultat vérifié", text: "Une visite finale permet de contrôler les détails avant la fin de la prestation." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-emerald-400 pt-6">
                <Icon className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 overflow-hidden rounded-lg bg-gray-100">
            <img src={imagePath("bureaux.png")} alt="Équipe Lumière Clean en intervention dans des bureaux" className="h-[360px] w-full object-cover sm:h-[520px]" />
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
