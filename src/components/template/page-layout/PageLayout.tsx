import { ReactNode } from "react"
import { NavBar } from "../../molecules/navbar";
import { Banner } from "../../molecules/banner";
import { Footer } from "../../molecules/footer";
import './pageLayout.scss'

interface PageLayoutProps {
  children: ReactNode;
}
const imagesList = [
  "https://cdn0.bodas.net/article-real-wedding/578/3_2/960/jpg/4866844.webp",
  "https://www.clarin.com/img/2017/06/07/rJTLCCbXW_1256x620.jpg",
  "https://www.familyarttattoo.com/wp-content/uploads/2023/04/Lu-768x768.jpg",
  "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-3657563-1920w.jpeg",
  "https://miamicelebrities.com/wp-content/uploads/2022/11/306063231_751497419472784_3550204227281687983_n_11zon.jpg",
];

export const PageLayout:React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
    <NavBar/>
      <main>
        <Banner imagesList={imagesList}/>
        {children}
      </main>
      <Footer/>
    </>
  )
}
