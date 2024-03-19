import { useEffect, useState } from "react";
import images from "../../../assets";
import "./banner.scss";

interface BannerProps {
  imagesList?: string[] | string;
  title: string | undefined;
}

export const Banner: React.FC<BannerProps> = ({ imagesList, title }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    if (imagesList) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < imagesList.length - 1) {
            return prevIndex + 1;
          } else {
            return prevIndex;
          }
        });
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, imagesList]);

  return (
    <div className="banner__section-1">
      
      <div className="banner__section-image">
        {imagesList && Array.isArray(imagesList) && imagesList.length > 0 ? (
          imagesList.map((image, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              className={`banner__content-image ${
                idx <= currentIndex ? "--show" : ""
              } ${
                hoveredImage !== null && idx < hoveredImage ? "--isFilter" : ""
              } ${
                hoveredImage !== null && idx > hoveredImage ? "--isFilter" : ""
              }`}
            >
              <img src={image} alt="" />
            </div>
          ))
        ) : (
          <img src={typeof imagesList === "string" ? imagesList : ""} alt="" />
        )}
      </div>
      
      <div className="banner__divisor-section">
        {title && 
          <h1>{title}</h1>
        }
        <img src={images.rasgado_con_negro} alt="" />
      </div>
    </div>
  );
};
