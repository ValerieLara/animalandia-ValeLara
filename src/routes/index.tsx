import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-axolotl.jpg";
import pair from "@/assets/axolotl-pair.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajolotes | Animalandia" },
      { name: "description", content: "Qué son, qué comen, dónde viven y cómo se reproducen los ajolotes, el anfibio endémico de México." },
      { property: "og:title", content: "Ajolotes | Animalandia" },
      { property: "og:description", content: "Todo sobre el ajolote: alimentación, hábitat, reproducción y sus 33 especies." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["queson", "¿Qué son?"],
  ["quecomen", "¿Qué comen?"],
  ["dondeviven", "¿Dónde viven?"],
  ["reproduccion", "Reproducción"],
  ["tipos", "Tipos"],
] as const;

const species = ["mexicanum","rivulare","taylori","amblycephalum","altamirani","andersoni","annulatum","barbouri","bishopi","bombypellum","californiense","cingulatum","dumerilii","flavipiperatum","gracile","granulosum","jeffersonianum","laterale","leorae","lermaense","mabeei","macrodactylum","maculatum","mavortium","opacum","ordinarium","rosaceum","silvense","subsalsum","talpoideum","texanum","tigrinum","velasci"];

const stages = [
  ["Apareamiento", "Inicia con un cortejo: el macho y la hembra hacen movimientos circulares. El macho deja un espermatóforo que la hembra recoge con su cloaca. La temporada va de febrero a julio, aproximadamente."],
  ["Fecundación y puesta", "La fecundación es interna. La hembra deposita entre 100 y 300 huevos (de 60 a 600 según la especie) sobre rocas, sustrato o plantas."],
  ["Nacimiento", "Tras 10 a 15 días de incubación nacen totalmente independientes: buscan su alimento y se resguardan solos."],
  ["Desarrollo", "A la semana aparecen las patas delanteras y luego las traseras. Algunas especies conservan su aspecto larval (neotenia); otras hacen metamorfosis. Maduran entre los 12 y 18 meses y viven de 12 a 15 años."],
];

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-bold tracking-[0.2em] text-coral">{n}</p>
        <h2 className="mb-8 text-3xl font-black text-foreground sm:text-5xl md:text-6xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-3xl bg-muted shadow-xl ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
    </figure>
  );
}

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);
const socials = [
  ["Instagram", "https://instagram.com/conservemos_al_ajolote", "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm5.5-1.5h.01"],
  ["Instagram Animalandia", "https://instagram.com/aquatic.animol", "M12 21s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9z"],
  ["Facebook", "#", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],
  ["YouTube", "#", "M22 8s-.2-2-1-2.8c-1-1-2-1-2.5-1.1C15.6 4 12 4 12 4s-3.6 0-6.5.1C5 4.2 4 4.2 3 5.2 2.2 6 2 8 2 8v3.6c0 2 .2 3.9.2 3.9s.2 2 1 2.8c1 1 2.2 1 2.8 1.1C7.6 19.6 12 19.6 12 19.6s3.6 0 6.5-.2c.5-.1 1.5-.1 2.5-1.1.8-.8 1-2.8 1-2.8s.2-2 .2-3.9V8zM10 15V9l5 3z"],
] as const;

function Index() {
  const [showTop, setShowTop] = useState(false);
  const [cookies, setCookies] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!menu) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenu(false); toggleRef.current?.focus(); }
      if (e.key === "Tab" && menuRef.current) {
        const items: HTMLElement[] = [toggleRef.current!, ...Array.from(menuRef.current.querySelectorAll("a"))];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i === 0) { e.preventDefault(); items[items.length - 1]?.focus(); }
        else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0]?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menu]);
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", on);
    setCookies(localStorage.getItem("cookies-ok") !== "1");
    return () => window.removeEventListener("scroll", on);
  }, []);

  const focusRing = "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-deep";

  return (
    <div className="bg-background text-foreground">
      <a href="#queson" className="sr-only z-50 rounded-md bg-coral px-4 py-2 font-semibold text-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Saltar al contenido</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-on-image/15 bg-deep/80 text-on-image backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#inicio" className={`font-display text-xl font-black tracking-tight text-on-image ${focusRing}`}>Animalandia<span className="text-coral">.</span></a>
          <nav aria-label="Secciones" className="hidden gap-7 text-sm font-semibold md:flex">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className={`text-on-image transition-colors hover:text-coral ${focusRing}`}>{l}</a>)}
          </nav>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            aria-controls="menu-movil"
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-on-image md:hidden ${focusRing}`}
          >
            <Icon d={menu ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </button>
        </div>
        <nav
          id="menu-movil"
          ref={menuRef}
          aria-label="Menú principal"
          hidden={!menu}
          className="border-t border-on-image/15 bg-deep px-6 py-4 md:hidden"
        >
          <ul>
            {nav.map(([id, l]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenu(false)} className={`block px-2 py-3 font-semibold text-on-image hover:text-coral ${focusRing}`}>{l}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Ajolote rosa nadando" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-lagoon">GUÍA DE ESPECIES · MÉXICO</p>
          <h1 className="text-5xl font-black leading-[0.9] text-deep-foreground sm:text-7xl lg:text-[9rem]">Ajolotes</h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-deep-foreground/85">
            Anfibios del género <em>Ambystoma</em> que conservan rasgos larvarios en la edad adulta —un fenómeno llamado neotenia. Muchas especies están en riesgo por la alteración de su hábitat.
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-6 border-t border-deep-foreground/20 pt-6 text-deep-foreground">
            {[["33", "especies"], ["16", "endémicas de México"], ["15", "años de vida"]].map(([a, b]) => (
              <div key={b}><p className="font-display text-3xl font-black text-coral sm:text-4xl">{a}</p><p className="text-xs opacity-80 sm:text-sm">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <Section id="queson" n="01" title="¿Qué son?">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>El ajolote mexicano (<em>Ambystoma mexicanum</em>) es una salamandra que, incluso adulta, conserva sus rasgos larvales: prácticamente se mantiene joven siempre.</p>
            <p>Es un anfibio endémico de México y habitante del lago de Xochimilco. De apariencia lustrosa, tierna y sonriente, es muy representativo del país.</p>
            <p className="rounded-2xl border-l-4 border-coral bg-accent p-5 text-accent-foreground">Debido a la destrucción de su hábitat, se encuentra en grave peligro de extinción.</p>
          </div>
          <Photo src={pair} alt="Dos ajolotes entre plantas acuáticas" className="aspect-square" />
        </div>
      </Section>

      <div className="bg-secondary">
        <Section id="quecomen" n="02" title="¿Qué comen?">
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-secondary-foreground/80">Su dieta es carnívora. Sus dientes sirven para sujetar, no para masticar: abre su gran boca, succiona agua junto con la presa y la traga entera.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold text-primary">Alimento vivo</h3>
              <p className="text-muted-foreground">Pequeños crustáceos, gusanos, lombrices, babosas, caracoles, grillos, larvas de mosquito, renacuajos y, ocasionalmente, peces del lago de Xochimilco.</p>
            </article>
            <article className="rounded-3xl bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold text-primary">Alimento seco</h3>
              <p className="text-muted-foreground">En cautiverio: camarones disecados o alimento flotante. Evita hojuelas que se hunden: al comerlas puede succionar piedras del fondo y dañar gravemente su salud.</p>
            </article>
          </div>
        </Section>
      </div>

      <Section id="dondeviven" n="03" title="¿Dónde viven?">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
            <p>Las 33 especies son nativas exclusivamente de Norteamérica. Destacan en el centro y noroeste de México, aunque algunas viven en Estados Unidos, el suroeste de Alaska y el sur de Canadá.</p>
            <p>El ajolote mexicano solo se encuentra en el lago de Xochimilco, donde sobrevive en peligro crítico.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {[["17", "especies en México"], ["16", "endémicas"], ["1", "lago: Xochimilco"], ["CR", "peligro crítico"]].map(([a, b]) => (
              <div key={b} className="rounded-2xl border border-border p-5"><p className="font-display text-3xl font-black text-primary">{a}</p><p className="text-sm text-muted-foreground">{b}</p></div>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-muted">
        <Section id="reproduccion" n="04" title="¿Cómo se reproducen?">
          <p className="mb-12 max-w-3xl text-lg text-muted-foreground">Reproducción sexual con fecundación interna. Son ovíparos y maduran a partir del año de vida.</p>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map(([t, d], i) => (
              <li key={t} className="relative rounded-3xl bg-card p-7 shadow-sm">
                <span className="font-display text-5xl font-black text-lagoon">{i + 1}</span>
                <h3 className="mt-3 mb-2 text-xl font-bold">{t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Section id="tipos" n="05" title="Tipos de ajolotes">
        <p className="mb-8 text-lg text-muted-foreground">Existen 33 especies del género <em>Ambystoma</em>:</p>
        <ul className="flex flex-wrap gap-2">
          {species.map((s) => (
            <li key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm italic text-foreground transition-colors hover:border-primary hover:bg-secondary">A. {s}</li>
          ))}
        </ul>
      </Section>

      {/* Footer */}
      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto max-w-6xl px-6 pt-20">
          <blockquote className="mb-12 max-w-3xl font-display text-xl sm:text-2xl leading-snug md:text-3xl">
            “Los animales no son propiedades o cosas, sino organismos vivientes, sujetos a una vida, que merecen nuestra compasión, respeto, amistad y apoyo.”
            <cite className="mt-4 block font-sans text-sm not-italic text-lagoon">— Marc Bekoff</cite>
          </blockquote>
          <div className="grid gap-10 border-t border-deep-foreground/15 py-14 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2">
              <p className="font-display text-3xl font-black">Animalandia<span className="text-coral">.</span></p>
              <p className="mt-3 max-w-sm text-sm opacity-75">Divulgación sobre fauna mexicana para conocer, respetar y proteger a las especies en peligro.</p>
              <p className="mt-4 text-sm opacity-75">Escrito por <strong className="opacity-100">Valerie Cristel Lara Díaz</strong></p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map(([n, h, d]) => (
                  <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} className="grid h-11 w-11 place-items-center rounded-full border border-deep-foreground/20 transition-colors hover:border-coral hover:bg-coral hover:text-deep"><Icon d={d} /></a>
                ))}
              </div>
              <p className="mt-4 text-sm text-lagoon">#ajolote · #animalandia</p>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-xs font-bold tracking-[0.2em] text-lagoon">EXPLORA</h4>
              <ul className="space-y-2 text-sm opacity-80">{nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="hover:text-coral">{l}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-xs font-bold tracking-[0.2em] text-lagoon">LEGAL</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {[["aviso", "Aviso legal"], ["privacidad", "Política de privacidad"], ["terminos", "Términos y condiciones"], ["cookies", "Política de cookies"]].map(([id, l]) => (
                  <li key={id}><a href={`#${id}`} className="hover:text-coral">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-6 border-t border-deep-foreground/15 py-10 text-xs leading-relaxed opacity-70 sm:grid-cols-2 lg:grid-cols-4">
            <p id="aviso"><strong>Aviso legal.</strong> Sitio con fines educativos y sin ánimo de lucro. Las imágenes de terceros pertenecen a sus autores.</p>
            <p id="privacidad"><strong>Privacidad.</strong> No recopilamos datos personales. Los enlaces externos se rigen por sus propias políticas.</p>
            <p id="terminos"><strong>Términos.</strong> Puedes compartir el contenido citando la fuente. Prohibido su uso comercial sin autorización.</p>
            <p id="cookies"><strong>Cookies.</strong> Solo guardamos tu preferencia de cookies en tu navegador; no usamos rastreo.</p>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-deep-foreground/15 py-6 text-xs opacity-60 md:flex-row">
            <p>© {new Date().getFullYear()} Animalandia · Valerie Cristel Lara Díaz. Todos los derechos reservados.</p>
            <p>Hecho con respeto por los ajolotes de Xochimilco.</p>
          </div>
        </div>
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver arriba" className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-coral text-deep shadow-xl transition-transform hover:-translate-y-1">
          <Icon d="M12 19V5M5 12l7-7 7 7" />
        </button>
      )}

      {cookies && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl flex-col items-start gap-3 rounded-2xl bg-card p-5 text-sm text-card-foreground shadow-2xl sm:flex-row sm:items-center">
          <p className="flex-1">Usamos solo una cookie técnica para recordar tu elección. <a href="#cookies" className="font-semibold text-primary underline">Más información</a></p>
          <button onClick={() => { localStorage.setItem("cookies-ok", "1"); setCookies(false); }} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">Aceptar</button>
        </div>
      )}
    </div>
  );
}
