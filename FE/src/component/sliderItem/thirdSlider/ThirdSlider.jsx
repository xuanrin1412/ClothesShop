import "./thirdSlider.scss";

export default function ThirdSlider() {
    return (
        <div className="sliderItem3">
            <img
                className="thirdSlide"
                src="https://static.wixstatic.com/media/c837a6_0e26f573c1ef4150b7c54d43340b9ae7~mv2.jpg/v1/fill/w_545,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0e26f573c1ef4150b7c54d43340b9ae7~mv2.jpg"
                alt=""
            />
            <div className="notifyDiscount">
                <div className="textDiscount">
                    <div className="discountHeader">DISCOUNT!</div>
                    <div className="bg-discount"></div>
                    <span className="paragrapD">
                        GET 25% OFF MENS DENIM JACKETS. USE CODE: BTTRJCKTS
                    </span>
                    <div className="bg-paragrapD"></div>
                </div>
            </div>
            {/* <button className="btnShopSlide">Shop Now </button>
            <div className="dotContainer">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div> */}
        </div>
    );
}
