import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" aria-label="Cruip" className="inline-flex">
      <Image
        alt="logo"
        src="/images/BurritoLogo.png"
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
    </Link>
  );
}
