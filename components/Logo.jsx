export default function Logo({ textSize }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`p-2 bg-indigo-500 rounded-xl rounded-r-none font-bold ${textSize}`}>
        <h1 className="leading-none">PHOS</h1>
      </div>
      <div className={`p-2 bg-zinc-800 rounded-xl rounded-l-none text-zinc-200 ${textSize}`}>
        <h1 className="leading-none">TECH</h1>
      </div>
    </div>
  );
}
