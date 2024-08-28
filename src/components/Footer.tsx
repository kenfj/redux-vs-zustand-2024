"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: 'Redux Counter', path: '/redux-counter' },
  { label: 'Zustand Counter', path: '/zustand-counter' },
  { label: 'Zustand Context Counter', path: '/zustand-context-counter' },
];
const disabledClass = 'pointer-events-none no-underline';

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex gap-3">
        {links.map((link) => (
          <Link key={link.path} href={link.path}
            className={pathname === link.path ? disabledClass : ''}>
            {link.label}
          </Link>
        ))}
      </div>
      <Link href="/" className={pathname === '/' ? disabledClass : ''}>
        Home
      </Link>
    </>
  );
};

export default Footer;
