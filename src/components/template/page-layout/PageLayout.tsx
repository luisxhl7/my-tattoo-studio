import { ReactNode } from "react"
import './pageLayout.scss'

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout:React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
