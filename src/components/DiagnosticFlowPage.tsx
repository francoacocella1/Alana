import { abrilFatface, playfairDisplay } from "@/lib/fonts";

const defaultEmbedUrl = "https://www.youtube.com/embed/O_D295lOusE";

export function DiagnosticFlowPage() {
  const videoSrc =
    process.env.NEXT_PUBLIC_YOUTUBE_EMBED_URL ?? defaultEmbedUrl;

  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
      >
        Ir al contenido
      </a>

      <div className="h-14 w-full bg-red-600 text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-full w-full max-w-2xl items-center px-4 md:px-8">
          <p className="truncate text-2xl font-semibold tracking-tight">
            Paso 1 de 2: te queda solo el último 50%
          </p>
        </div>
      </div>

      <main
        id="contenido-principal"
        className="mx-auto w-full max-w-2xl flex-1 px-5 py-10 md:px-8 md:py-14"
      >
        <section>
          <h2
            className={`${playfairDisplay.className} text-center text-2xl font-semibold tracking-tight text-white md:text-3xl`}
          >
            Paso 1 de 2
          </h2>
          <p
            className={`${playfairDisplay.className} mt-4 text-center text-base font-medium text-zinc-200 md:text-lg`}
          >
            Te queda solo el último 50%
          </p>

          <div
            className="mt-8 rounded-xl border-2 border-red-600 bg-red-950/40 px-4 py-4 text-center md:px-6"
            role="status"
          >
            <p className="text-lg font-bold tracking-tight text-red-300 md:text-xl">
              🚨 ¡Aún no has terminado! 🚨
            </p>
          </div>

          <h1
            className={`${abrilFatface.className} mt-10 text-balance text-center text-xl font-normal leading-snug tracking-tight text-white md:text-2xl md:leading-tight`}
          >
            Para confirmar tu reunión de diagnóstico, es necesario que veas este
            corto video y termines los pasos a seguir.
          </h1>

          <p className="mt-6 text-center text-base font-medium text-zinc-200 md:text-lg">
            Si no completas los pasos, tu reunión se cancela automáticamente.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-md">
            <iframe
              className="aspect-video w-full"
              src={videoSrc}
              title="Video — confirmación de reunión de diagnóstico"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-700 pt-12">
          <h2
            className={`${playfairDisplay.className} text-center text-2xl font-semibold tracking-tight text-white md:text-3xl`}
          >
            Paso 2 de 2
          </h2>
          <p
            className={`${playfairDisplay.className} mt-4 text-center text-base font-medium text-zinc-200 md:text-lg`}
          >
            Para finalizar tu reserva debes:
          </p>
          <ol className="mt-8 list-decimal space-y-5 pl-6 text-base leading-relaxed text-zinc-100 marker:font-semibold marker:text-red-400 md:pl-8">
            <li className="pl-2">
              Agendar el día y hora en tu calendario.
            </li>
            <li className="pl-2">
              Para confirmarte tu reunión te enviaremos mensaje por WhatsApp;
              debes responder.
            </li>
            <li className="pl-2">Avisar por INSTAGRAM que agendaste.</li>
            <li className="pl-2">
              Recuerda tomarte el tiempo y el espacio para tu reunión de
              diagnóstico en un lugar tranquilo.
            </li>
            <li className="pl-2">
              Si no tomas decisiones financieras por ti misma, asiste con tu
              pareja.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
