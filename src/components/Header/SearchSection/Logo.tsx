import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/lyxanh_logo.jpg"
        alt="Ly xanh Logo"
        className="dark:invert"
        width={150}
        height={28}
        priority
      />
    </Link>
  );
}
export default Logo;
