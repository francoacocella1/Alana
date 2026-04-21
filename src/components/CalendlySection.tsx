const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/calendly/demo-meeting";

export function CalendlySection() {
  return (
    <section id="agenda" className="space-y-4 pb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
        Agenda una reunion
      </h2>
      <p className="max-w-2xl text-zinc-700">
        Si ya estas listo para avanzar, elegi un horario disponible y
        coordinamos una llamada.
      </p>
      <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
        <iframe
          src={calendlyUrl}
          title="Calendly agenda"
          className="h-[720px] w-full"
        />
      </div>
    </section>
  );
}
