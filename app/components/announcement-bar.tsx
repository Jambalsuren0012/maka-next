export function AnnouncementBar() {
  return (
    <div className="relative z-30 border-b border-violet-400/15 bg-gradient-to-r from-violet-950 via-violet-900 to-indigo-950 px-4 py-2 text-xs">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-violet-100">
          <span className="mr-2 rounded-full bg-emerald-400 px-2 py-1 text-[10px] font-extrabold uppercase text-slate-950">
            Шинэ
          </span>
          🎓 200,000₮-с дээш захиалгад <b>хүргэлт үнэгүй!</b>
        </p>
        <p className="text-emerald-300">
          ☎ Тусламж: 7711-8899 <span className="mx-2 text-violet-500">|</span>{" "}
          🚚 24 цагийн шуурхай хүргэлт
        </p>
      </div>
    </div>
  );
}
