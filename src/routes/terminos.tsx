import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Animalandia" },
      { name: "description", content: "Términos y condiciones del sitio web Animalandia: propósito, contenido, propiedad intelectual, enlaces a terceros, privacidad y responsabilidades." },
      { property: "og:title", content: "Términos y condiciones | Animalandia" },
      { property: "og:description", content: "Las reglas de uso del sitio Animalandia: contenido, propiedad intelectual, privacidad y responsabilidad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terminos,
});

const clauses = [
  ["Propósito del sitio web", "Nuestro sitio web tiene como objetivo proporcionar información sobre diversos temas relacionados con animales, promover la conciencia sobre el bienestar animal y ofrecer recursos útiles para dueños de mascotas y amantes de los animales."],
  ["Información y contenido", "Nos esforzamos por brindar información precisa y actualizada sobre temas relacionados con animales, pero no podemos garantizar la exactitud o exhaustividad de toda la información proporcionada. El contenido del sitio web está destinado únicamente para fines informativos y educativos."],
  ["Propiedad intelectual", "Todo el contenido, incluyendo textos, imágenes, videos y gráficos, publicado en nuestro sitio web está protegido por derechos de autor y otras leyes de propiedad intelectual. No se permite la reproducción, distribución o uso no autorizado del contenido sin nuestro consentimiento."],
  ["Comentarios y contenido generado por usuarios", "Agradecemos los comentarios y contribuciones de los usuarios, pero nos reservamos el derecho de moderar, editar o eliminar cualquier contenido generado por usuarios que consideremos inapropiado, ofensivo o que viole nuestros términos de uso."],
  ["Enlaces a terceros", "Nuestro sitio web puede contener enlaces a sitios web de terceros para proporcionar información adicional o recursos útiles. Sin embargo, no somos responsables del contenido o las prácticas de privacidad de estos sitios web externos."],
  ["Privacidad", "Respetamos la privacidad de nuestros usuarios y nos comprometemos a proteger la información personal que recopilamos. Consulta nuestra política de privacidad para obtener más información sobre cómo recopilamos, utilizamos y protegemos tu información."],
  ["Responsabilidad", "Nos esforzamos por mantener nuestro sitio web seguro y libre de errores, pero no podemos garantizar la disponibilidad ininterrumpida o libre de errores del sitio. No seremos responsables por cualquier daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso o la imposibilidad de usar nuestro sitio web."],
  ["Modificaciones", "Nos reservamos el derecho de modificar, actualizar o eliminar estos términos y condiciones en cualquier momento sin previo aviso. Se alienta a los usuarios a revisar periódicamente esta página para estar al tanto de cualquier cambio."],
] as const;

const focusRing = "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-deep";

function Terminos() {
  return (
    <div className="bg-background text-foreground">
      <a href="#contenido" className={`sr-only z-50 rounded-md bg-coral px-4 py-2 font-semibold text-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4`}>Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-on-image/15 bg-deep/80 text-on-image backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className={`font-display text-xl font-black tracking-tight text-on-image ${focusRing}`}>Animalandia<span className="text-coral">.</span></Link>
          <Link to="/" className={`rounded-full border border-deep-foreground/25 px-4 py-2 text-sm font-semibold text-on-image transition-colors hover:border-coral hover:text-coral ${focusRing}`}>← Volver al inicio</Link>
        </div>
      </header>

      <div className="bg-deep text-deep-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-20 sm:pb-20 sm:pt-28">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-lagoon">DOCUMENTO LEGAL</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[0.95] sm:text-6xl md:text-7xl">Términos y condiciones</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
            Al utilizar nuestro sitio web aceptas estos términos y condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices el sitio.
          </p>
        </div>
      </div>

      <main id="contenido" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <ol className="space-y-10 sm:space-y-12">
          {clauses.map(([title, body], i) => (
            <li key={title}>
              <h2 className="mb-3 flex items-baseline gap-3 text-xl font-bold text-foreground sm:text-2xl">
                <span className="font-display text-2xl font-black text-coral sm:text-3xl">{String(i + 1).padStart(2, "0")}</span>
                {title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 rounded-3xl border-l-4 border-coral bg-accent p-6 leading-relaxed text-accent-foreground">
          Si tienes alguna pregunta o inquietud sobre estos términos y condiciones, no dudes en ponerte en contacto con nosotros.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
          <a href="/#privacidad" className="rounded-full bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background">Política de privacidad</a>
          <Link to="/" className="rounded-full border border-border px-5 py-3 text-foreground transition-colors hover:border-primary hover:bg-secondary outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background">Ir a los ajolotes</Link>
        </div>
      </main>

      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-black">Animalandia<span className="text-coral">.</span></p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-85">Divulgación sobre fauna mexicana para conocer, respetar y proteger a las especies en peligro.</p>
              <p className="mt-4 text-sm opacity-85">Escrito por <strong className="opacity-100">Valerie Cristel Lara Díaz</strong></p>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-xs font-bold tracking-[0.2em] text-lagoon">EXPLORA</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="/#queson" className="hover:text-coral">¿Qué son?</a></li>
                <li><a href="/#quecomen" className="hover:text-coral">¿Qué comen?</a></li>
                <li><a href="/#dondeviven" className="hover:text-coral">¿Dónde viven?</a></li>
                <li><a href="/#reproduccion" className="hover:text-coral">Reproducción</a></li>
                <li><a href="/#tipos" className="hover:text-coral">Tipos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-xs font-bold tracking-[0.2em] text-lagoon">LEGAL</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="/#aviso" className="hover:text-coral">Aviso legal</a></li>
                <li><a href="/#privacidad" className="hover:text-coral">Política de privacidad</a></li>
                <li><span className="font-semibold text-lagoon">Términos y condiciones</span></li>
                <li><a href="/#cookies" className="hover:text-coral">Política de cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-deep-foreground/15 pt-6 text-xs leading-relaxed opacity-80 md:flex-row">
            <p>© {new Date().getFullYear()} Animalandia · Valerie Cristel Lara Díaz. Todos los derechos reservados.</p>
            <p>Hecho con respeto por los ajolotes de Xochimilco.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
