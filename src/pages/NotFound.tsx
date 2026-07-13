import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[75vh] items-center bg-gray-950 px-5 pt-20 text-white lg:px-8">
        <div className="mx-auto w-full max-w-7xl py-20">
          <p className="text-sm font-extrabold text-emerald-400">Erreur 404</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-7xl">Cette page n’existe pas.</h1>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-extrabold text-gray-950"><ArrowLeft className="h-4 w-4" />Retour à l’accueil</Link>
        </div>
      </section>
    </SiteShell>
  );
}
