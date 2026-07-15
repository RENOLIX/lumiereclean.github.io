import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, Cross, Factory, HardHat, Home, Landmark, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand, imagePath, PageHero, SiteShell, TrustStrip } from "@/components/SiteShell";

const services = [
  { icon: HardHat, image: "fin-chantier.png", title: "Fin de chantier", text: "Remise en état complète après travaux, avant livraison ou installation." },
  { icon: Home, image: "desinfection-detail.png", title: "Maisons habitées", text: "Grand nettoyage et entretien précis de votre logement au quotidien." },
  { icon: Factory, image: "administration-bureau.png", title: "Usines & sites", text: "Nettoyage organisé des sols, zones de travail et espaces communs." },
  { icon: Landmark, image: "administration-bureau.png", title: "Administrations", text: "Des bureaux, accueils et sanitaires propres pour vos équipes et visiteurs." },
  { icon: Cross, image: "desinfection-detail.png", title: "Cliniques & désinfection", text: "Hygiène renforcée des lieux d’accueil, de consultation et des points de contact." },
  { icon: CalendarDays, image: "administration-bureau.png", title: "Nettoyage quotidien", text: "Une prestation planifiée pour conserver vos locaux nets jour après jour." },
];

export default function Index() {
  return (
    <SiteShell>
      <PageHero eyebrow="Nettoyage professionnel à Alger" title="La propreté, au niveau de vos exigences." text="Zaki Cleaning intervient pour les fins de chantier, maisons, villas, usines, administrations, écoles, cliniques et la désinfection." image="fin-chantier.png" />
      <TrustStrip />

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="section-kicker">Nos domaines d’intervention</p><h2 className="section-title">Un service de nettoyage qui s’adapte à vos lieux.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600">Qu’il s’agisse d’une maison occupée, d’un local administratif ou d’un site professionnel, nous organisons une prestation précise, avec le matériel et la fréquence adaptés.</p></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, image, title, text }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_14px_40px_rgba(7,21,33,0.08)]"><img src={imagePath(image)} alt={title} className="h-48 w-full object-cover" /><div className="p-6"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p><Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-sky-600 hover:text-sky-700">Voir le service <ArrowRight className="h-4 w-4" /></Link></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071521] text-white"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="min-h-[460px]"><img src={imagePath("desinfection-detail.png")} alt="Nettoyage de précision par Zaki Cleaning" className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center px-5 py-16 lg:px-16 lg:py-20"><p className="text-xs font-extrabold uppercase text-sky-300">Une méthode maîtrisée</p><h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">Un résultat visible dans chaque zone.</h2><div className="mt-8 space-y-5">{[["Préparer", "Repérage des surfaces, accès et priorités avant l’intervention."],["Nettoyer", "Matériel professionnel et méthode adaptée à chaque type de lieu."],["Vérifier", "Contrôle des finitions avant validation avec le client."]].map(([title, text], index) => <div key={title} className="flex gap-4 border-t border-white/15 pt-5"><span className="text-sm font-extrabold text-sky-300">0{index + 1}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{text}</p></div></div>)}</div></div></div></section>

      <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-3">{[{ icon: ShieldCheck, title: "Produits adaptés", text: "Les produits et outils sont choisis selon les surfaces et le niveau d’hygiène attendu." }, { icon: ClipboardCheck, title: "Intervention organisée", text: "Les zones, priorités et contraintes du lieu sont validées avant le démarrage." }, { icon: CheckCircle2, title: "Contrôle de qualité", text: "Chaque prestation est vérifiée pour garantir une finition nette et régulière." }].map(({ icon: Icon, title, text }) => <div key={title} className="border-t-2 border-sky-400 pt-6"><Icon className="h-7 w-7 text-sky-600" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div><div className="mt-16 overflow-hidden rounded-lg bg-slate-100"><img src={imagePath("administration-bureau.png")} alt="Intervention de nettoyage professionnel Zaki Cleaning" className="h-[360px] w-full object-cover sm:h-[520px]" /></div></div></section>
      <CtaBand />
    </SiteShell>
  );
}
