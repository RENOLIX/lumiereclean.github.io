import { Check, ClipboardCheck, Handshake, Target } from "lucide-react";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="À propos de Lumière Clean" title="Une équipe engagée dans la qualité de finition." text="Nous aidons particuliers et professionnels à récupérer un espace propre, ordonné et prêt à être utilisé après des travaux ou pour un grand nettoyage." image="equipe.png" />
      <TrustStrip />
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <img src={imagePath("equipe.png")} alt="L'équipe professionnelle Lumière Clean" className="h-[520px] w-full rounded-lg object-cover" />
          <div>
            <p className="section-kicker">Notre métier</p>
            <h2 className="section-title">Rendre le propre visible.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Lumière Clean est une entreprise de nettoyage professionnel spécialisée dans les remises en état après chantier et après travaux. Nous intervenons aussi pour les logements, commerces, bureaux et autres espaces qui demandent un nettoyage complet.</p>
            <p className="mt-5 text-base leading-7 text-gray-600">Notre approche est simple: comprendre le résultat attendu, organiser l’intervention, utiliser le matériel adapté puis contrôler les finitions avant de partir.</p>
            <ul className="mt-8 space-y-4">
              {["Un devis défini selon le lieu", "Un interlocuteur clair", "Une méthode adaptée aux surfaces", "Un contrôle final de la prestation"].map((item) => <li key={item} className="flex gap-3 text-sm font-bold text-gray-800"><Check className="h-5 w-5 text-emerald-600" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-950 px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            { icon: Target, title: "Précision", text: "Nous avançons zone par zone pour garder une qualité régulière." },
            { icon: Handshake, title: "Clarté", text: "Le périmètre et les priorités sont définis avant l’intervention." },
            { icon: ClipboardCheck, title: "Contrôle", text: "Le résultat final est vérifié, pas simplement supposé." },
          ].map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-emerald-400 pt-6"><Icon className="h-7 w-7 text-emerald-400" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{text}</p></div>)}
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
