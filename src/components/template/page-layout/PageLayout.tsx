import { ReactNode } from "react"
import { NavBar } from "../../molecules/navbar";
import './pageLayout.scss'

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout:React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
    <NavBar/>
      <main>
        {children}
      </main>
    </>
  )
}
