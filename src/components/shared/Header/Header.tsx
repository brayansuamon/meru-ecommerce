import Link from "next/link";

export interface HeaderProps {
}

export function Header (props: HeaderProps) {
  return (
    <header>
          <nav>
            <ul>
              <Link href={'/'}>
              <li>Home</li>
              </Link>
              <Link href={'/store'}>
              <li>Store</li>
              </Link>
            </ul>
          </nav>
        </header>
  );
}
