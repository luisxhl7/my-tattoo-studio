import { useEffect, useState } from "react";
import rasgado from "../../../assets/rasgado-con-negro-svg.svg";
import './banner.scss'

interface BannerProps {
    images: string[];
}

export const Banner:React.FC<BannerProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentIndex((prevIndex) => {
            if (prevIndex < images.length - 1) {
                return prevIndex + 1;
            } else {
                return prevIndex
            }
            });
        }, 500); 
    
        return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <div className="banner__section-1">
            <div className="banner__section-image">
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className={`banner__content-image ${idx <= currentIndex ? "--show" : ""}`}
                    >
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className="banner__divisor-section">
                <h1>my studio tattoo</h1>
                <img src={rasgado} alt="" />
            </div>
        </div>
    )
}
