import { useEffect, useState } from "react";
import FirstSlider from "../sliderItem/firstSlider/FirstSlider";
import SecondSlider from "../sliderItem/secondSlider/SecondSlider";
import ThirdSlider from "../sliderItem/thirdSlider/ThirdSlider";
import "./slide.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Slide() {
    const slides = [<FirstSlider />, <SecondSlider />, <ThirdSlider />];
    const [currentIndex, setCurrentIndex] = useState(0);
    const len = slides.length - 1;
    const nextSlide = () => {
        // setCurrentIndex((currentIndex + 1) % 3); // Có 3 slide
        setCurrentIndex(currentIndex === len ? 0 : currentIndex + 1);
    };

    const previousSlide = () => {
        // setCurrentIndex((currentIndex - 1 + 3) % 3);
        setCurrentIndex(currentIndex < 1 ? len : currentIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex === len ? 0 : currentIndex + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, [currentIndex, len]);

    const onclick = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

    return (
        <div className="slider">
            {slides[currentIndex]}
            <div className="containbtn">
                <div className="prevBtn" onClick={previousSlide}>
                    <ArrowBackIos className="iconArrow" />
                </div>
                <div className="nextBtn" onClick={nextSlide}>
                    <ArrowForwardIos className="iconArrow" />
                </div>
            </div>
            <div className="btnShopSlide">Shop Now</div>
            <div className="containDot">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`dot ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => onclick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
