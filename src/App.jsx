const loveMoments = [
  {
    title: 'The first spark',
    note: 'The day you smiled at me, my world quietly became warmer.',
  },
  {
    title: 'Endless laughter',
    note: 'Every little joke with you became a memory I keep replaying.',
  },
  {
    title: 'Safe in your heart',
    note: 'With you, even silence feels beautiful and full of love.',
  },
]

const birthdayWishes = [
  'May your year be filled with soft mornings and magical sunsets.',
  'May every dream you whisper to the stars come true.',
  'May your smile stay forever bright and forever mine to admire.',
]

const floaters = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 7}s`,
  duration: `${12 + Math.random() * 14}s`,
  size: `${0.8 + Math.random() * 1.2}rem`,
  symbol: index % 4 === 0 ? '🎈' : '💗',
}))

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a1024] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f8c6ff40,transparent_42%),radial-gradient(circle_at_85%_10%,#fca5a544,transparent_40%),radial-gradient(circle_at_10%_20%,#c4b5fd44,transparent_35%),linear-gradient(140deg,#1a1024_5%,#29143d_48%,#4a1f47_95%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08),transparent)] opacity-30" />

      {floaters.map((floater) => (
        <span
          key={floater.id}
          className="floating-element"
          style={{
            left: floater.left,
            animationDelay: floater.delay,
            animationDuration: floater.duration,
            fontSize: floater.size,
          }}
        >
          {floater.symbol}
        </span>
      ))}

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:px-10 md:pt-20">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10">
          <p className="mb-3 inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs tracking-[0.24em] text-pink-100 uppercase sm:text-sm">
            Happy Birthday, My Love
          </p>
          <h1 className="bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100 bg-clip-text text-4xl leading-tight font-semibold text-transparent sm:text-5xl md:text-6xl">
            Ammu, you make every heartbeat feel like poetry.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-purple-100/90 sm:text-lg">
            This little universe is for you, my beautiful girl. On your special day,
            I celebrate your laughter, your kindness, your strength, and the love
            that turns ordinary moments into forever memories.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {loveMoments.map((moment) => (
              <article
                key={moment.title}
                className="glass-panel rounded-2xl p-4 sm:p-5"
              >
                <p className="text-sm font-semibold text-pink-100">{moment.title}</p>
                <p className="mt-2 text-sm text-purple-100/90">{moment.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <section className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-pink-100 sm:text-3xl">
              A promise for your new year
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-purple-100/90 sm:text-base">
              I promise to keep choosing you. Through every season, I will hold your
              hand, cheer your dreams, and remind you every single day how deeply you
              are loved. You are my softest place and my brightest adventure.
            </p>

            <div className="mt-6 rounded-2xl border border-pink-100/35 bg-pink-200/10 p-4 shadow-[0_0_35px_rgba(251,113,133,0.18)] sm:p-5">
              <p className="text-sm tracking-wide text-pink-50/95 italic sm:text-base">
                "In a world full of stars, you are the moon I always look for."
              </p>
            </div>
          </section>

          <section className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-pink-100 sm:text-3xl">
              Birthday wishes for Ammu
            </h2>
            <ul className="mt-4 space-y-3">
              {birthdayWishes.map((wish) => (
                <li
                  key={wish}
                  className="rounded-xl border border-white/25 bg-white/12 p-3 text-sm text-purple-50 shadow-[0_10px_40px_rgba(244,114,182,0.12)] sm:text-base"
                >
                  {wish}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="glass-card rounded-3xl px-6 py-5 text-center sm:px-8 sm:py-6">
          <p className="text-base text-pink-100 sm:text-lg">
            With all my love, today and always.
          </p>
          <p className="mt-1 bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Happy Birthday, Ammu ✨
          </p>
        </footer>
      </section>
    </main>
  )
}

export default App
