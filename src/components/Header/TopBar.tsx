import Link from 'next/link';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { SiZalo } from 'react-icons/si';
import { HiPhone } from 'react-icons/hi';

function TopBar() {
  return (
    <div className="bg-main py-2 text-white">
      <div className="container flex items-center justify-between text-base">
        <span className="uppercase flex items-center font-medium">SONPACK</span>{' '}
        <div className="flex items-center gap-4">
          <Link href="lien-he">
            <HiPhone
              className="text-green-1 opacity-100 hover:opacity-80"
              size={18}
            />
          </Link>
          <Link href="lien-he">
            <BiLogoGmail
              className="text-green-1 opacity-100 hover:opacity-80"
              size={18}
            />
          </Link>
          <Link href="lien-he">
            <FaFacebookF
              className="text-green-1 opacity-100 hover:opacity-80"
              size={17}
            />
          </Link>
          <Link href="lien-he">
            <FaTiktok
              className="text-green-1 opacity-100 hover:opacity-80"
              size={16}
            />
          </Link>
          <Link href="lien-he">
            <SiZalo
              className="text-green-1 opacity-100 hover:opacity-80"
              size={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
