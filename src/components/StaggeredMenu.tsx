import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

type MenuItem = { label: string; ariaLabel: string; to: string };

export function StaggeredMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const layers = layerRef.current?.querySelectorAll(".zaki-menu-layer");
    if (!panel || !layers) return;
    gsap.set([panel, ...layers], { xPercent: 100 });
  }, []);

  const setMenu = useCallback((next: boolean) => {
    const panel = panelRef.current;
    const layers = layerRef.current?.querySelectorAll(".zaki-menu-layer");
    const labels = panel?.querySelectorAll(".zaki-menu-label");
    if (!panel || !layers || !labels) return;
    gsap.killTweensOf([panel, ...layers, ...labels, iconRef.current]);
    if (next) {
      gsap.set(labels, { yPercent: 130, rotate: 8 });
      const timeline = gsap.timeline();
      timeline.to(layers, { xPercent: 0, duration: 0.52, ease: "power4.out", stagger: 0.08 }).to(panel, { xPercent: 0, duration: 0.62, ease: "power4.out" }, "<0.08").to(labels, { yPercent: 0, rotate: 0, duration: 0.8, ease: "power4.out", stagger: 0.09 }, "<0.14");
      gsap.to(iconRef.current, { rotate: 225, duration: 0.7, ease: "power4.out" });
    } else {
      gsap.to([panel, ...layers], { xPercent: 100, duration: 0.34, ease: "power3.in", stagger: 0.04 });
      gsap.to(iconRef.current, { rotate: 0, duration: 0.3, ease: "power3.inOut" });
    }
    setOpen(next);
  }, []);

  return <div className="zaki-staggered-menu" data-open={open || undefined}><button type="button" className="zaki-menu-toggle" onClick={() => setMenu(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}><span className="zaki-menu-toggle-text">{open ? "Fermer" : "Menu"}</span><span ref={iconRef} className="zaki-menu-icon" aria-hidden="true"><i /><i /></span></button><div ref={layerRef} className="zaki-menu-layers" aria-hidden="true"><div className="zaki-menu-layer zaki-menu-layer-one" /><div className="zaki-menu-layer zaki-menu-layer-two" /></div><aside ref={panelRef} className="zaki-menu-panel" aria-hidden={!open}><div className="zaki-menu-panel-inner"><p className="zaki-menu-eyebrow">Navigation</p><nav aria-label="Navigation mobile"><ul>{items.map((item) => <li key={item.to}><Link to={item.to} aria-label={item.ariaLabel} onClick={() => setMenu(false)}><span className="zaki-menu-label">{item.label}</span></Link></li>)}</ul></nav><a className="zaki-menu-call" href="tel:+213779306608">0779 30 66 08</a></div></aside></div>;
}
