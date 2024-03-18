import { Banner } from "../../molecules/banner/Banner";
import rasgado from "../../../assets/rasgado-con-negro-svg.svg";
import "./home.scss";
import images from "../../../assets";

const imagesList = [
  "https://cdn0.bodas.net/article-real-wedding/578/3_2/960/jpg/4866844.webp",
  "https://tatuajes-barcelona.pro-arts.com/wp-content/uploads/2022/08/Ser-tatuador-profesional-368x400.jpg",
  "https://www.familyarttattoo.com/wp-content/uploads/2023/04/Lu-768x768.jpg",
  "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-3657563-1920w.jpeg",
  "https://miamicelebrities.com/wp-content/uploads/2022/11/306063231_751497419472784_3550204227281687983_n_11zon.jpg",
];

export const Home = () => {
  return (
    <section className="home">
      <Banner images={imagesList} />

      <div className="home__section-3">
        <div className="home__section-3__content-info">
          <h2>¡BIENVENIDOS AL MUNDO DE MY TATTOO STUDIO!</h2>
          <p>DONDE LA CREATIVIDAD FLUYE Y LA TINTA NO DESCANSA...</p>
          <p>
            ¿Estás listo para llevar tu arte corporal al siguiente nivel?
            ¡Estamos aquí para hacerlo realidad! Concertar una cita con nosotros
            es fácil, solo dirígete a nuestra página de contacto y elige la
            opción que más te convenga: teléfono, email o WhatsApp.
          </p>
          <p>
            Explora nuestras galerías llenas de inspiración en las secciones de
            tatuajes y piercings. Desde diseños clásicos hasta los más
            vanguardistas, ¡aquí encontrarás lo que necesitas para expresarte
            sin límites!
          </p>
          <p>
            Y por supuesto, no te pierdas nuestros invaluable consejos sobre
            cuidados higiénicos para mantener tus tatuajes y piercings en
            perfecto estado. En My Tattoo Studio, tu salud y satisfacción son
            nuestra prioridad.
          </p>
          <p>
            ¡Únete a nuestra comunidad de amantes del arte corporal y haz
            realidad tus sueños!
          </p>
        </div>
      </div>

      <div className="section-new">
        <img src={rasgado} alt="" className="section-new__image1" />
        <div className="section-new__content-info">
          <h2>"Transformando la piel en lienzos vivos, uno puntillado a la vez."</h2>
        </div>
        <img src={rasgado} alt="" className="section-new__image2" />
      </div>

      <div className="home__section-4">
        <div className="home__section-4__content-info">
          <h2>CONOCE A FIDO TATTOO Y SU EQUIPO</h2>
          <img src={images.icono_tattoo} alt="" width={100} height={100}/>
          <p>
            Fido Tattoo es un estudio artístico de tatuajes y piercing fundado
            en 2005 bajo el pseudónimo de su fundador, Alberto Ramírez «Fido».
            Desde sus comienzos como tatuador, y desde la fecha de la apertura
            de el estudio, Fido Tattoo se ha posicionado en la provincia de
            Málaga como un referente gracias a la calidad artística y técnica de
            sus tatuajes y piercings.
          </p>
          <p>
            CONOCE A FIDO TATTOO Y SU EQUIPO Fido Tattoo es un estudio artístico
            de tatuajes y piercing fundado en 2005 bajo el pseudónimo de su
            fundador, Alberto Ramírez «Fido». Desde sus comienzos como tatuador,
            y desde la fecha de la apertura de el estudio, Fido Tattoo se ha
            posicionado en la provincia de Málaga como un referente gracias a la
            calidad artística y técnica de sus tatuajes y piercings. El equipo
            humano de Fido Tattoo cuenta con artistas y profesionales con amplia
            experiencia en todo tipo de estilos, desde lo más vintage a lo más
            rompedor y contemporáneo. Desde nuestra web, y en nombre de todos
            los que formamos Fido Tattoo, esperamos que descubras la inspiración
            en nuestros trabajos y te animes a visitarnos para contarnos que te
            gustaría hacerte.
          </p>
          <p>
            El equipo humano de Fido Tattoo cuenta con artistas y profesionales
            con amplia experiencia en todo tipo de estilos, desde lo más vintage
            a lo más rompedor y contemporáneo. Desde nuestra web, y en nombre de
            todos los que formamos Fido Tattoo, esperamos que descubras la
            inspiración en nuestros trabajos y te animes a visitarnos para
            contarnos que te gustaría hacerte.
          </p>
        </div>
        <img src={rasgado} alt="" className="" />
      </div>
    </section>
  );
};
