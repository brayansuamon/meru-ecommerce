import Image from "next/image";
import Link from "next/link";

export interface IHeaderProps {
}

const Header = (props: IHeaderProps) => {
  return (
    <header className="min-h-16 h-auto w-full py-6 bg-orangeMeru">
        <nav className="mx-auto max-w-[1280px] px-6 flex items-center justify-between">

          <div className="w-40 h-8 relative">
          <Link href={'/'}>
            <Image src="/images/Meru-svg.svg" alt="Logo" fill quality={100} className="object-contain"/>
            </Link>
          </div>
          <div className="w-6 h-6 relative">
            <Link href={'/cart'}>
            <Image src="/images/Carrito.png" alt="Logo" fill quality={100} className="object-contain"/>
            </Link>

          </div>

        </nav>
    </header>
  );
}
export { Header };

