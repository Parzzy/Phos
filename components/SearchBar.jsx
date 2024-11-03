export default function SearchBar() {
  return (
      <input
        type="text"
        placeholder="Search"
        className="w-[70%] md:w-[15%] p-1 bg-zinc-800 rounded-xl text-center text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:transition-all focus:ease-in-out focus:text-xl focus:font-bold"
      />
  );
}
