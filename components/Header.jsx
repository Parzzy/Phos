import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";
export default function Header() {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-12 sticky top-0 w-full p-2 bg-zinc-950 min-w-screen max-h-12 z-20">
      <Logo />
      <Navbar />
      <SearchBar />
      <UserAvatar />
    </div>
  );
}
