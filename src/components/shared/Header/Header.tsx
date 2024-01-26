import Image from "next/image";
import Link from "next/link";

export interface IHeaderProps {
}

const Header = (props: IHeaderProps) => {
  return (
    <header className="p-8 flex items-center justify-between">
          <div className="w-40 h-8 relative">
            <Image src="/images/Meru-svg.svg" alt="Logo" fill quality={100} className="object-cover"/>
          </div>
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
export { Header };

