const DEFAULT_YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?si=nQf6xJ7yTR8oVGGQ";

export function YouTubeSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
        Mira como funciona
      </h2>
      <p className="max-w-2xl text-zinc-700">
        Un video corto para que tus prospectos entiendan tu propuesta antes de
        dejar sus datos.
      </p>
      <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
        <iframe
          className="aspect-video w-full"
          src={DEFAULT_YOUTUBE_EMBED_URL}
          title="Video principal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
