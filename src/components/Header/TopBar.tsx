import Link from 'next/link';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { SiZalo } from 'react-icons/si';
import { HiPhone } from 'react-icons/hi';
import { information } from '@/config/data/information';

function TopBar() {
  return (
    <div className="bg-main py-2 text-white">
      <div className="container flex items-center justify-between text-base">
        <span className="uppercase flex items-center font-medium">
          {information.shopName}
        </span>{' '}
        <div className="flex items-center gap-4">
          <Link href={`tel:${information.phones[0]}`}>
            <HiPhone
              className="text-green-400 opacity-100 hover:opacity-80"
              size={22}
            />
          </Link>
          <Link href={`mailto:${information.emails[0]}`}>
            <BiLogoGmail
              className="text-green-400 opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.facebook} target="_blank">
            <FaFacebookF
              className="text-green-400 opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.tiktok} target="_blank">
            <FaTiktok
              className="text-green-400 opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.zalo} target="_blank">
            <SiZalo
              className="text-green-400 opacity-100 hover:opacity-80"
              size={33}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
