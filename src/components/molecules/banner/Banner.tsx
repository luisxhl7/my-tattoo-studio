import { useEffect, useState } from "react";
import "./banner.scss";
import images from "../../../assets";

interface BannerProps {
  imagesList: string[];
}

export const Banner: React.FC<BannerProps> = ({ imagesList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

return (
  <div className="banner__section-1">
    <div className="banner__section-image">
      {imagesList.map((image, idx) => (
        <div
          key={idx}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          className={`banner__content-image ${
            idx <= currentIndex ? "--show" : ""
          } ${hoveredImage !== null && (idx < hoveredImage) ? "--isFilter" : ""} ${hoveredImage !== null && (idx > hoveredImage) ? "--isFilter" : ""}`}
        >
          <img src={image} alt="" />
        </div>
      ))}
    </div>
    <div className="banner__divisor-section">
      <h1>my studio tattoo</h1>
      <img src={images.rasgado_con_negro} alt="" />
    </div>
  </div>
);

};
