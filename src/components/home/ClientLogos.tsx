const clientLogos = [
  "Goldfields Hotel Group", "Kalgoorlie Resorts", "Boulder Mining Co",
  "Outback Hospitality", "Pilbara Camps", "WA Resources",
];

const ClientLogos = () => (
  <section className="py-16 overflow-hidden bg-secondary/30">
    <div className="container">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground font-sans">
          Trusted Across the Goldfields
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
      <div className="animate-marquee flex w-max gap-8">
        {[...clientLogos, ...clientLogos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="glass flex h-20 shrink-0 items-center rounded-xl px-10 text-sm font-semibold text-muted-foreground"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
