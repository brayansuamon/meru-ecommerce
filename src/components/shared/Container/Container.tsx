

export interface  IContainerProps {
  children: React.ReactNode
}

 const ContainerMeru = ({children}: IContainerProps) => {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-[1280px] px-6">
      {children}
      </div>
    </main>
  );
}

export { ContainerMeru };

