export default function BandWebsite() {
  const members = [
    { name: "Alina Roșca", role: "Voce" },
    { name: "Dragoș Paraschiv", role: "Voce" },
    { name: "Iulian Roșca", role: "Clape" },
    { name: "Rareș Florescu", role: "Vioară" },
    { name: "Florinel Caraivan", role: "Acordeon" },
    { name: "Alexandru Sârbușcă", role: "Clarinet" },
  ];

  const events = [
    { date: "Nunți", place: "București & țară", type: "Atmosferă completă" },
    { date: "Botezuri", place: "Program personalizat", type: "Momente elegante" },
    { date: "Evenimente private", place: "Corporate & petreceri", type: "Show live" },
  ];

  const repertoire = [
    "Muzică de petrecere",
    "Muzică live pentru nunți și botezuri",
    "Sârbe, hore și muzică de joc",
    "Cover-uri românești și internaționale pentru atmosferă",
  ];

  const highlights = [
    "Repertoriu adaptat fiecărui eveniment",
    "Prezență scenică elegantă și energie live",
    "Soliști și instrumentiști profesioniști",
    "Booking rapid pentru București și deplasări",
  ];

  const testimonials = [
    {
      text: "O atmosferă extraordinară de la început până la final. Invitații au dansat toată seara.",
      name: "Eveniment privat",
    },
    {
      text: "Profesionalism, eleganță și un repertoriu foarte bine ales pentru toate gusturile.",
      name: "Petrecere de nuntă",
    },
    {
      text: "Voce, orchestră, energie și organizare excelentă. Recomandăm cu toată încrederea.",
      name: "Client booking",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white/85 uppercase">
            Alina Roșca & Profesional Orchestra
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#despre" className="hover:text-white">Despre</a>
            <a href="#membri" className="hover:text-white">Membri</a>
            <a href="#repertoriu" className="hover:text-white">Repertoriu</a>
            <a href="#evenimente" className="hover:text-white">Evenimente</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="https://wa.me/40723829791"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-transparent to-cyan-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
              Muzică de petrecere pentru nunți, botezuri și evenimente private
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Alina Roșca & Profesional Orchestra
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Eleganță, voce, orchestră live și energie autentică pentru evenimente care trebuie să rămână memorabile.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-[1.02]"
              >
                Rezervă formația
              </a>
              <a
                href="https://www.youtube.com/@AlinaRoscaOfficial/videos"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Vezi videoclipuri
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <div className="flex aspect-[4/5] items-end bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.45))] p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/55">București</p>
                  <h2 className="mt-3 text-3xl font-semibold">Show live pentru momente speciale</h2>
                  <p className="mt-3 max-w-md text-white/70">
                    Repertoriu variat, program dinamic și o formulă muzicală profesionistă pentru o atmosferă completă.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3 md:px-10">
        {[
          ["Live", "Voce și orchestră profesionistă"],
          ["București", "Disponibili și pentru deplasări"],
          ["Premium", "Imagine elegantă pentru evenimente"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="text-3xl font-bold">{value}</div>
            <div className="mt-2 text-white/70">{label}</div>
          </div>
        ))}
      </section>

      <section id="despre" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Despre noi</h2>
            <p className="mt-5 text-white/75 leading-8">
              Alina Roșca & Profesional Orchestra este o formație dedicată evenimentelor care au nevoie de atmosferă adevărată, muzică live și energie de petrecere de la început până la final. Oferim un repertoriu variat, interpretare live și o prezență scenică elegantă, potrivită pentru nunți, botezuri, aniversări și petreceri private.
            </p>
            <p className="mt-4 text-white/75 leading-8">
              Adaptăm programul în funcție de public, de tipul evenimentului și de preferințele organizatorilor, astfel încât fiecare apariție să fie memorabilă, dinamică și potrivită momentului.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold">Ce oferim</h3>
            <ul className="mt-5 space-y-3 text-white/75">
              <li>• Program live personalizat pentru tipul evenimentului</li>
              <li>• Repertoriu variat pentru toate vârstele</li>
              <li>• Imagine elegantă și atmosferă de petrecere</li>
              <li>• Comunicare rapidă pentru booking și organizare</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-white/80 leading-7">“{item.text}”</p>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/45">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membri" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">Membrii formației</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <div key={member.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 aspect-square rounded-2xl bg-white/10" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-white/65">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="repertoriu" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Repertoriu</h2>
            <div className="mt-6 grid gap-3">
              {repertoire.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="video" className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Video promo</h2>
            <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl shadow-black/20">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=AlinaRoscaOfficial"
                title="Alina Roșca & Profesional Orchestra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@AlinaRoscaOfficial/videos"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Canal YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="evenimente" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">Evenimente</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div key={event.date + event.place} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-wide text-white/50">{event.type}</p>
                <h3 className="mt-3 text-2xl font-semibold">{event.date}</h3>
                <p className="mt-2 text-white/70">{event.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Contact & Booking</h2>
            <p className="mt-5 max-w-xl text-white/75 leading-8">
              Pentru rezervări, ofertă personalizată sau verificarea disponibilității,
              contactează-ne direct. Răspundem rapid pentru nunți, botezuri,
              petreceri private și evenimente corporate.
            </p>
            <div className="mt-6 space-y-3 text-white/80">
              <p>📞 Telefon: 0723829791</p>
              <p>✉️ Email: contact@alinarosca-profesionalorchestra.ro</p>
              <p>📍 București și deplasări pentru evenimente în toată țara</p>
              <p>📘 Facebook: Alina Roșca Artist</p>
              <p>🎵 TikTok: @profesionalorchestra</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/AlinaRoscaArtist/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Facebook</a>
              <a href="https://www.tiktok.com/@profesionalorchestra" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">TikTok</a>
              <a href="https://www.youtube.com/@AlinaRoscaOfficial/videos" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">YouTube</a>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Numele tău" />
              <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Telefon" />
              <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Data evenimentului" />
              <textarea className="min-h-[140px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Spune-ne câteva detalii despre eveniment" />
              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.01]">
                Trimite cererea
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50 md:px-10">
        <div>© 2026 Alina Roșca & Profesional Orchestra • București</div>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a href="https://www.facebook.com/AlinaRoscaArtist/" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Facebook
          </a>
          <a href="https://www.tiktok.com/@profesionalorchestra" target="_blank" rel="noreferrer" className="transition hover:text-white">
            TikTok
          </a>
        </div>
      </footer>
    </div>
  );
}
