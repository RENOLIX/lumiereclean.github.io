import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Check, Menu, Phone, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/nettoyage-apres-chantier", label: "Fin de chantier" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/about", label: "À propos" },
];

export const phoneDisplay = "0779 30 66 08";
export const phoneHref = "tel:+213779306608";
export const whatsappHref = "https://wa.me/213779306608";
export const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/zaki/${name}`;

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className={`inline-flex items-center ${footer ? "rounded-lg bg-white p-2" : ""}`} aria-label="Zaki Cleaning - Accueil">
      <img
        src={imagePath("zaki-cleaning-logo.png")}
        alt="Zaki Cleaning Service"
        className={footer ? "h-20 w-auto max-w-[280px] object-contain" : "h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[250px]"}
      />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? "text-sky-600" : "text-slate-600 hover:text-slate-950"}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href={phoneHref} className="text-sm font-extrabold text-slate-800 hover:text-sky-600">{phoneDisplay}</a>
            <Link to="/devis" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-600">Devis gratuit <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-sky-100 bg-white px-5 pb-6 pt-3 lg:hidden">
            <nav className="flex flex-col" aria-label="Navigation mobile">
              {links.map((link) => <NavLink key={link.to} to={link.to} className="border-b border-slate-100 py-3 text-lg font-extrabold text-slate-900">{link.label}</NavLink>)}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-sm font-extrabold"><Phone className="h-4 w-4" /> Appeler</a>
              <Link to="/devis" className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-3 py-3 text-sm font-extrabold text-white">Devis gratuit</Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <Footer />
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-xl transition-transform hover:scale-105" aria-label="Contacter Zaki Cleaning sur WhatsApp" title="WhatsApp"><Phone className="h-5 w-5" /></a>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-sky-100 bg-sky-50">
      <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {["Devis gratuit et clair", "Matériel professionnel", "Produits adaptés aux lieux", "Contrôle qualité final"].map((item) => (
          <div key={item} className="flex min-h-20 items-center gap-3 border-b border-sky-100 py-5 sm:px-4 lg:border-b-0 lg:border-r lg:border-sky-100 lg:last:border-r-0">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm"><Check className="h-4 w-4" /></span>
            <span className="text-sm font-extrabold text-slate-800">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative min-h-[68vh] overflow-hidden bg-[#071521] pt-[82px]">
      <img src={imagePath(image)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#071521]/80" />
      <div className="relative mx-auto flex min-h-[calc(68vh-82px)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-extrabold uppercase text-sky-300">{eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/devis" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-extrabold text-white hover:bg-sky-400">Demander un devis <ArrowRight className="h-4 w-4" /></Link>
            <a href={phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15"><Phone className="h-4 w-4" /> {phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-sky-500 px-5 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div><p className="text-xs font-extrabold uppercase text-sky-950">Un lieu à nettoyer ?</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">Zaki Cleaning organise une intervention adaptée à votre espace.</h2></div>
        <Link to="/devis" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#071521] px-6 py-4 text-sm font-extrabold text-white hover:bg-slate-900">Obtenir mon devis <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071521] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><Logo footer /><p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">Nettoyage professionnel pour fin de chantier, maisons, villas, usines, administrations, écoles, cliniques et désinfection.</p></div>
        <div><h3 className="text-sm font-extrabold">Navigation</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-300"><Link to="/services" className="hover:text-sky-300">Tous les services</Link><Link to="/nettoyage-apres-chantier" className="hover:text-sky-300">Fin de chantier</Link><Link to="/realisations" className="hover:text-sky-300">Réalisations</Link><Link to="/devis" className="hover:text-sky-300">Devis gratuit</Link></div></div>
        <div><h3 className="text-sm font-extrabold">Contact</h3><a href={phoneHref} className="mt-4 block text-2xl font-extrabold text-sky-300">{phoneDisplay}</a><p className="mt-3 text-sm leading-6 text-slate-300">Interventions sur Alger et ses environs.<br />Particuliers, entreprises et collectivités.</p></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Zaki Cleaning</span><span>Cleaning Service</span></div>
    </footer>
  );
}
