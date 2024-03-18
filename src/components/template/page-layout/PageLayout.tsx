import { ReactNode } from "react"
import { NavBar } from "../../molecules/navbar";
import './pageLayout.scss'
import { Footer } from "../../molecules/footer";

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
      <Footer/>
    </>
  )
}
