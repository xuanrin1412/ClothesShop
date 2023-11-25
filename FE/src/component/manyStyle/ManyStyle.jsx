import React, { useEffect, useState } from "react";
import "./manyStyle.scss";
import Slide from "../slide/Slide";

export default function ManyStyle() {
    const [showText, setShowText] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector(".firstComponent");
        if (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight) {
                setShowText(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="manyStyle">
            <div className="wrapper">
                <div className="left">
                    <div className={`firstComponent ${showText ? "show" : ""}`}>
                        <div className="textfirst">
                            Comfort Comes in Many Styles
                        </div>
                        <div className="textHeader">
                            OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE
                            WORKING FROM HOME.
                        </div>
                        <p className="textParagrapt">
                            I'm a paragraph. Click here to add your own text and
                            edit me. I’m a great place for you to tell a story
                            and let your users know a little more about you.
                        </p>
                        <button className="btnShop">Shop All Denim</button>
                    </div>
                    <div className="img2Container">
                        <img
                            className="img2"
                            src="https://static.wixstatic.com/media/c837a6_023dfbbb4ceb41899c3d07e0d5f1423c~mv2.jpg/v1/fill/w_792,h_1190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-polina-tankilevitch-4723532.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="img-Containner">
                        <img
                            className="img1"
                            src="https://static.wixstatic.com/media/c837a6_dbf7f4f8883d4feeb943a7e98c2426c3~mv2.jpg/v1/fill/w_406,h_950,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_dbf7f4f8883d4feeb943a7e98c2426c3~mv2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="sliderContainer">
                        <Slide />
                    </div>
                </div>
            </div>
            <div className="bg"></div>
        </div>
    );
}
