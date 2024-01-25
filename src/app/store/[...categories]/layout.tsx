
export interface  LayoutProps {
  children: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
  return (
    <main>
      <nav>Categories Navigation</nav>
      {children}
    </main>
  );
}
