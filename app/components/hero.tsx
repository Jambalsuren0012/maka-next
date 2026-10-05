export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
          <span className="pulse-badge inline-flex rounded-full border border-emerald-300/30 bg-violet-900/50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-300">✦ Багш, сурагчдад зориулсан сургалтын хэрэглэгдэхүүн</span>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Хичээлийг <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">харагдахаар заая.</span></h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-violet-200 sm:text-lg lg:mx-0">Математик, газар зүй, байгалийн ухааны хичээлд зориулсан соронзон самбар, үзүүлэн болон сургалтын хэрэгслийг нэг дороос.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start"><a href="#catalog" className="rounded-xl bg-gradient-to-r from-emerald-300 to-emerald-500 px-7 py-4 font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5">Дэлгүүр хэсэх <span className="ml-2">→</span></a><a href="#promotions" className="glass-panel rounded-xl px-6 py-4 font-semibold text-violet-100 transition hover:border-violet-300/40">🏷 Хямдралтай иж бүрдэл</a></div>
          <div className="mx-auto grid max-w-lg grid-cols-3 gap-3 border-t border-violet-400/15 pt-6 text-left lg:mx-0"><Metric value="15+" label="бүтээгдэхүүний ангилал" /><Metric value="100%" label="чанарын баталгаа" accent /><Metric value="24ц" label="шуурхай хүргэлт" /></div>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-emerald-400 via-purple-600 to-indigo-600 opacity-25 blur-2xl" />
          <div className="glass-panel relative rounded-3xl p-5 sm:p-6">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-violet-950 sm:h-72"><img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=85" alt="Математикийн сургалтын үзүүлэн" className="h-full w-full object-cover transition duration-500 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0813]/80 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full bg-rose-500/90 px-3 py-1.5 text-xs font-extrabold text-white">🔥 Эрэлттэй бүтээгдэхүүн</span></div>
            <div className="flex items-start justify-between gap-3 pt-5"><div><p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Онцлох бүтээгдэхүүн</p><h2 className="mt-2 text-lg font-bold text-white sm:text-xl">Математикийн үзүүлэн самбар</h2><p className="mt-2 text-sm text-violet-300">Хичээлийн агуулгыг ойлгомжтой, харагдахуйц болгоно.</p></div><span className="text-2xl text-amber-300">★★★★★</span></div>
            <div className="mt-4 flex items-center gap-3"><strong className="text-2xl font-black text-emerald-300">₮18,000</strong><del className="text-sm text-violet-400">₮22,000</del><a href="#catalog" className="ml-auto rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950">Үзэх →</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return <div><div className={`text-xl font-black sm:text-2xl ${accent ? "text-emerald-300" : "text-white"}`}>{value}</div><div className="mt-1 text-[11px] leading-4 text-violet-300 sm:text-xs">{label}</div></div>;
}
