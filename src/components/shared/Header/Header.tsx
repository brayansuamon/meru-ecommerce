'use client'
import { useLocalStorage } from "app/customhooks/LocalStorage";
import Image from "next/image";
import Link from "next/link";

export interface IHeaderProps {
  stateCart?: number
}

const Header = (props: IHeaderProps) => {

  const {state} = useLocalStorage('carrito')


  return (
    <header className="min-h-16 h-auto w-full py-6 bg-orangeMeru">
        <nav className="mx-auto max-w-[1280px] px-6 flex items-center justify-between">

          <div className="w-40 h-8 relative">
          <Link href={'/'}>
            <Image src="/images/Meru-svg.svg" alt="Logo" fill quality={100} className="object-contain"/>
            </Link>
          </div>
          <div>
            <Link href={'/cart'} className="relative">
              <span className="absolute rounded-[50%] w-4 h-4 bg-blackMeru text-whiteMeru flex items-center justify-center text-sm p-3 top-[-12px] right-[-14px] z-10">{state.length}</span>
              <div className="w-6 h-6 relative">
                <Image src="/images/Carrito.png" alt="Logo" fill quality={100} className="object-contain"/>
              </div>
            </Link>

          </div>

        </nav>
    </header>
  );
}
export { Header };

