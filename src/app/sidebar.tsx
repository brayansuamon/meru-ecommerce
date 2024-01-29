import { createContext, useState } from "react";

interface SidebarContextProps {
  isOpen?: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)


interface SidebarProps {
  children: React.ReactNode;
}
export function Sidebar( {children} : SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
