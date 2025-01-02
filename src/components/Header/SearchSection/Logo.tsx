import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logos/lyxanh_logo.png"
        alt="Ly xanh Logo"
        width={100}
        height={28}
        className="dark:invert lg:w-[100px] w-[80px] h-auto"
      />
    </Link>
  );
}
export default Logo;
