import Image from "next/image";
import Link from "next/link";
export default function UserAvatar() {
  return (
    <div>
      <Link href="/profile" className="flex items-center gap-1">
        <Image
          src="/avatarbg.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-sm hidden lg:inline font-medium text-zinc-700">Parzzy</span>
      </Link>
    </div>
  );
}
