import { useParams } from "react-router-dom"
import { tattooArtist } from "../../../data/tattoo-artist";
import { useEffect, useState } from "react";
import './tatuador-page.scss'
import { Banner } from "../../molecules/banner";

interface TatuadorPageProps {
  name: string;
  photo: string;
  url: string;
  description: string;
  portafolio: string[];
  redesSociales: string[];
  logros: string[];
}

export const TatuadorPage = () => {
  const [tatuador, setTatuador] = useState<TatuadorPageProps | null>(null);
  
  const params = useParams()
  
  useEffect(() => {
    const filterTatuador = tattooArtist.find((tatuador) => tatuador.name === params.id);
    if (filterTatuador !== undefined) {
      setTatuador(filterTatuador);
    } else {
      setTatuador(null);
    }
  }, [params.id]);
  

  return (
    <div className="tatuadorPage">
      <Banner imagesList={tatuador?.photo} title={tatuador?.name}/>

      <p className="tatuadorPage__description">{tatuador?.description}</p>

      <section className="tatuadorPage__content-images">
        {tatuador?.portafolio.map((item, idx) => (
          <img key={idx} src={item} alt="" className="tatuadorPage__images"/>
        ))}
      </section>

      {tatuador?.logros.map( (item, idx) => (
        <p key={idx} className="tatuadorPage__logros">{item}</p>
      ))}
    </div>
  )
}
