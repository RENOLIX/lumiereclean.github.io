import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Check, Menu, Phone, Sparkles, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/nettoyage-apres-chantier", label: "Après chantier" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/about", label: "À propos" },
];

export const phoneDisplay = "0779 30 66 08";
export const phoneHref = "tel:+213779306608";
export const whatsappHref = "https://wa.me/213779306608";
export const imagePath = (name: string) =>
  `${import.meta.env.BASE_URL}images/lumiere/${name}`;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Lumière Clean - Accueil">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-gray-950 shadow-sm">
        <Sparkles className="h-5 w-5" strokeWidth={2.3} />
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-300 ring-2 ring-white" />
      </span>
      <span className={`leading-none ${light ? "text-white" : "text-gray-950"}`}>
        <span className="block text-base font-extrabold uppercase">Lumière</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase text-emerald-500">Clean</span>
      </span>
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
    <div className="min-h-screen bg-white text-gray-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive ? "text-emerald-600" : "text-gray-600 hover:text-gray-950"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href={phoneHref} className="text-sm font-bold text-gray-800 hover:text-emerald-600">
              {phoneDisplay}
            </a>
            <Link to="/devis" className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-600">
              Devis gratuit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-3 lg:hidden">
            <nav className="flex flex-col" aria-label="Navigation mobile">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} className="border-b border-gray-100 py-3 text-lg font-bold text-gray-900">
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-bold">
                <Phone className="h-4 w-4" /> Appeler
              </a>
              <Link to="/devis" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-3 py-3 text-sm font-bold text-gray-950">
                Devis gratuit
              </Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <Footer />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-gray-950 shadow-xl transition-transform hover:scale-105"
        aria-label="Contacter Lumière Clean sur WhatsApp"
        title="WhatsApp"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {["Devis clair et gratuit", "Équipe équipée", "Protection des surfaces", "Contrôle final avec vous"].map((item) => (
          <div key={item} className="flex min-h-20 items-center gap-3 border-b border-gray-100 py-5 sm:px-4 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative min-h-[68vh] overflow-hidden bg-gray-950 pt-[72px]">
      <img src={imagePath(image)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/20" />
      <div className="relative mx-auto flex min-h-[calc(68vh-72px)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-extrabold uppercase text-emerald-400">{eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/devis" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-extrabold text-gray-950 hover:bg-emerald-300">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15">
              <Phone className="h-4 w-4" /> {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-emerald-400 px-5 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase text-gray-700">Un chantier à livrer ?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-gray-950 sm:text-4xl">Retrouvez un espace propre, prêt à être utilisé.</h2>
        </div>
        <Link to="/devis" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gray-950 px-6 py-4 text-sm font-extrabold text-white hover:bg-gray-800">
          Obtenir mon devis <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">Nettoyage professionnel après chantier, après travaux et entretien complet pour particuliers et entreprises.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold">Navigation</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <Link to="/services" className="hover:text-white">Tous les services</Link>
            <Link to="/nettoyage-apres-chantier" className="hover:text-white">Après chantier</Link>
            <Link to="/realisations" className="hover:text-white">Réalisations</Link>
            <Link to="/devis" className="hover:text-white">Devis gratuit</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold">Contact</h3>
          <a href={phoneHref} className="mt-4 block text-2xl font-extrabold text-emerald-400">{phoneDisplay}</a>
          <p className="mt-3 text-sm leading-6 text-gray-400">Interventions sur Alger et ses environs.<br />Particuliers, commerces et entreprises.</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Lumière Clean</span>
        <span>Nettoyage professionnel</span>
      </div>
    </footer>
  );
}
