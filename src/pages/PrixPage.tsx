import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Headphones, Pause, Phone, Play, ShieldCheck, Sparkles, Square, Users } from "lucide-react";
import "./prix.css";

const base = import.meta.env.BASE_URL;
const phone = "0779 30 66 08";
const phoneHref = "tel:+213779306608";
const whatsapp = "https://wa.me/213779306608";
const logo = `${base}images/zaki/zaki-cleaning-logo.png`;

const audioReviews = [
  { file: "voix-01.ogg", label: "Témoignage client 01", type: "audio/ogg" },
  { file: "voix-02.ogg", label: "Témoignage client 02", type: "audio/ogg" },
  { file: "voix-03.ogg", label: "Témoignage client 03", type: "audio/ogg" },
  { file: "voix-04.mp4", label: "Témoignage client 04", type: "audio/mp4" },
  { file: "voix-05.ogg", label: "Témoignage client 05", type: "audio/ogg" },
  { file: "voix-06.ogg", label: "Témoignage client 06", type: "audio/ogg" },
];

const faq = [
  { question: "Dans quelles zones intervenez-vous ?", answer: "Zaki Cleaning intervient à Alger et ses environs, pour les particuliers, entreprises et établissements professionnels." },
  { question: "Quels types de nettoyage proposez-vous ?", answer: "Nous réalisons le nettoyage après travaux, le nettoyage profond d'appartements et villas, les interventions de déménagement, les restaurants, bureaux, écoles, cliniques et l'entretien quotidien." },
  { question: "Comment se passe une intervention ?", answer: "Nous échangeons d'abord sur votre besoin, puis nous organisons les zones, les produits et le matériel. Une vérification finale est réalisée avant la fin de la prestation." },
  { question: "Puis-je vous contacter directement ?", answer: "Oui. Appelez le 0779 30 66 08 ou écrivez-nous sur WhatsApp. Nous vous répondrons pour comprendre votre besoin." },
];

export default function PrixPage() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reviewImage = (name: string) => `${base}images/avis/${name}`;

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };
  const toggleVideo = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) await videoRef.current.play();
    else videoRef.current.pause();
  };
  const stopVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setCurrentTime(0);
  };
  const seekVideo = (value: number) => {
    if (!videoRef.current || !duration) return;
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return <div className="lp-page"><main>
    <section className="lp-video-first" id="presentation"><img className="lp-first-logo" src={logo} alt="Zaki Cleaning Service" /><div className="lp-video-player"><video ref={videoRef} src={`${base}video/zaki-presentation.mp4`} playsInline preload="metadata" onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} /><div className="lp-video-controls"><div className="lp-video-actions"><button type="button" onClick={toggleVideo} aria-label={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"}>{isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><button type="button" onClick={stopVideo} aria-label="Arrêter la vidéo"><Square size={16} fill="currentColor" /></button><span>{formatTime(currentTime)} <small>/</small> {formatTime(duration)}</span></div><input className="lp-progress" type="range" min="0" max={duration || 0} step="0.1" value={currentTime} onChange={(event) => seekVideo(Number(event.target.value))} aria-label="Progression de la vidéo" /></div></div><div className="lp-video-context"><p className="lp-eyebrow lp-blue">Nettoyage professionnel à Alger</p><h1>La propreté qui se voit.<br /><em>La confiance qui reste.</em></h1><p>Une équipe sérieuse, un travail soigné et une vraie attention portée à chaque détail de votre espace.</p></div></section>
    <section className="lp-features"><div className="lp-section-intro"><p className="lp-eyebrow lp-blue">Pourquoi nous choisir</p><h2>Tout ce qu'il faut pour un résultat impeccable.</h2></div><div className="lp-feature-grid"><article><ShieldCheck /><h3>Professionnalisme</h3><p>Une équipe organisée et ponctuelle, présente avec le bon matériel pour chaque type de lieu.</p></article><article><Sparkles /><h3>Le souci du détail</h3><p>Nous avançons zone par zone afin de traiter les surfaces, les recoins et les finitions avec soin.</p></article><article><Users /><h3>La confiance</h3><p>Une communication claire, un travail contrôlé et une équipe qui respecte votre espace.</p></article></div></section>
    <section className="lp-audio-section"><div className="lp-section-intro"><p className="lp-eyebrow">Ils parlent de leur expérience</p><h2>Écoutez les retours de nos clients.</h2><p>Des témoignages reçus après des interventions de nettoyage chez nos clients.</p></div><div className="lp-audio-grid">{audioReviews.map((review) => <article className="lp-audio-card" key={review.file}><span><Headphones size={17} />{review.label}</span><audio controls preload="metadata"><source src={`${base}audio/avis/${review.file}`} type={review.type} />Votre navigateur ne prend pas en charge cet audio.</audio></article>)}</div></section>
    <section className="lp-screens-section"><div className="lp-section-intro"><p className="lp-eyebrow lp-blue">Retours clients</p><h2>Des messages qui nous font avancer.</h2><p>La satisfaction de nos clients reste notre plus belle recommandation.</p></div><div className="lp-screenshot-carousel"><button type="button" aria-label="Capture précédente" onClick={() => setReviewIndex((reviewIndex + 3) % 4)}><ChevronLeft /></button><img src={reviewImage(`avis-0${reviewIndex + 1}.jpeg`)} alt={`Capture d'un avis client ${reviewIndex + 1}`} /><button type="button" aria-label="Capture suivante" onClick={() => setReviewIndex((reviewIndex + 1) % 4)}><ChevronRight /></button></div><div className="lp-dots">{[0, 1, 2, 3].map((index) => <button type="button" key={index} onClick={() => setReviewIndex(index)} className={index === reviewIndex ? "active" : ""} aria-label={`Voir la capture ${index + 1}`} />)}</div></section>
    <section className="lp-faq"><div className="lp-section-intro"><p className="lp-eyebrow lp-blue">Questions fréquentes</p><h2>Vous voulez en savoir plus ?</h2></div><div className="lp-faq-list">{faq.map((item, index) => <article key={item.question} className={openFaq === index ? "open" : ""}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{item.question}</span><ChevronDown /></button><div className="lp-faq-answer"><p>{item.answer}</p></div></article>)}</div></section>
    <section className="lp-final"><p className="lp-eyebrow">Un espace à nettoyer ?</p><h2>Parlons de votre besoin.</h2><p>Appelez Zaki Cleaning pour une réponse claire et une intervention adaptée.</p><div><a className="lp-primary" href={whatsapp} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowRight size={17} /></a><a className="lp-secondary" href={phoneHref}><Phone size={17} /> {phone}</a></div></section>
  </main><footer className="lp-footer"><img src={logo} alt="Zaki Cleaning Service" /><span>© {new Date().getFullYear()} Zaki Cleaning Service</span></footer></div>;
}
