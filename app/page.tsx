export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Front-Running Detection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Are registrars stealing your{" "}
          <span className="text-[#58a6ff]">domain searches?</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Domain Parking Detector monitors every domain you search for and alerts you the moment it gets registered or parked — exposing front-running behavior in real time.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Search domains", desc: "Paste the domains you've searched across any registrar." },
          { step: "2", title: "We watch them", desc: "Our monitors check WHOIS & DNS every few minutes for changes." },
          { step: "3", title: "Get alerted", desc: "Receive instant email alerts if a domain gets registered or parked." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 500 domains",
              "WHOIS + DNS change detection",
              "Instant email alerts",
              "Front-running timeline report",
              "Multi-registrar comparison",
              "30-day history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is domain front-running?",
              a: "Domain front-running is when a registrar or third party registers a domain shortly after you search for it, then tries to sell it back to you at a higher price."
            },
            {
              q: "How does the monitoring work?",
              a: "After you add domains to your watchlist, our system queries WHOIS databases and DNS records every few minutes. Any change in registration status triggers an immediate alert."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, you can cancel anytime from your billing portal. You'll retain access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Domain Parking Detector. All rights reserved.
      </footer>
    </main>
  );
}
