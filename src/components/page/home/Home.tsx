import rasgado from "../../../assets/rasgado-con-negro-svg.svg";
import images from "../../../assets";
import "./home.scss";


export const Home = () => {
  return (
    <section className="home">

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
          <h2>
            "Transformando la piel en lienzos vivos, uno puntillado a la vez."
          </h2>
        </div>
        <img src={rasgado} alt="" className="section-new__image2" />
      </div>

      <div className="home__section-4">
        <div className="home__section-4__content-info">
          <h2>CONOCE A MY STUDIO TATTOO Y SU EQUIPO</h2>
          <img src={images.icono_tattoo} alt="" width={100} height={100} />
          <p>
            En el corazón del bullicioso distrito artístico de la ciudad, se
            encuentra MY Studio Tatto, un santuario para los amantes del arte
            corporal. Desarrollado por Luis Lopez, este estudio se ha convertido
            rápidamente en un punto de referencia para quienes buscan expresar
            su individualidad a través de la tinta.
          </p>
          <p>
            En MY Studio Tatto, el arte del tatuaje se eleva a nuevas alturas.
            Nuestro equipo de artistas altamente talentosos y apasionados está
            dedicado a transformar las ideas de nuestros clientes en
            impresionantes obras de arte viviente. Desde el realismo meticuloso
            hasta los diseños abstractos y geométricos, cada tatuaje es una
            expresión única de la visión del cliente y la habilidad del artista.
          </p>
          <p>
            En MY Studio Tatto, ofrecemos una amplia gama de servicios para
            satisfacer todas las necesidades de arte corporal. Desde el diseño y
            la creación de tatuajes personalizados hasta la cobertura de
            tatuajes existentes y la eliminación láser, estamos aquí para
            ayudarte a hacer realidad tus visiones.
          </p>
        </div>
        <img src={rasgado} alt="" className="" />
      </div>
    </section>
  );
};
