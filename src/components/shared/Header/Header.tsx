import Link from "next/link";

export interface IHeaderProps {
}

const Header = (props: IHeaderProps) => {
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
export { Header };

