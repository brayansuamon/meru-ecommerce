
export interface  ILayoutProps {
  children: React.ReactNode
}

 const Layout = ({children}: ILayoutProps) => {
  return (
    <main>
      <nav>Categories Navigation</nav>
      {children}
    </main>
  );
}

export default Layout
