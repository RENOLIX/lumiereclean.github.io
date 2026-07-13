import { CheckCircle2 } from "lucide-react";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const gallery = [
  { image: "hero-chantier.png", title: "Appartement après travaux", text: "Sols, baies vitrées et poussières de finition." },
  { image: "nettoyage-detail.png", title: "Finitions des menuiseries", text: "Retrait précis des résidus autour des vitrages." },
  { image: "bureaux.png", title: "Bureaux après aménagement", text: "Remise en état avant l’installation des équipes." },
  { image: "equipe.png", title: "Équipe & matériel", text: "Une intervention structurée avec l’équipement adapté." },
];

export default function RealisationsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Notre niveau de finition" title="Des espaces nets, prêts à vivre ou à travailler." text="Découvrez les types d’interventions prises en charge par Lumière Clean, du détail des menuiseries aux grandes surfaces professionnelles." image="equipe.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-kicker">Galerie</p>
              <h2 className="section-title">Le résultat attendu, jusque dans les détails.</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">Ces visuels présentent notre univers de service et les niveaux de finition proposés selon la nature du lieu.</p>
              <div className="mt-8 space-y-3">
                {["Préparation du matériel", "Traitement méthodique", "Vérification visuelle", "Validation avant départ"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-600" />{item}</div>)}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {gallery.map((item, index) => (
                <article key={item.title} className={index === 0 ? "sm:col-span-2" : ""}>
                  <img src={imagePath(item.image)} alt={item.title} className={`w-full rounded-lg object-cover ${index === 0 ? "h-[420px]" : "h-[300px]"}`} />
                  <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
