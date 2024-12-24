import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/lyxanh_logo.jpg"
        alt="Ly xanh Logo"
        className="dark:invert lg:w-[100px] w-[80px] h-auto"
        width={100}
        height={28}
        priority
      />
    </Link>
  );
}
export default Logo;
