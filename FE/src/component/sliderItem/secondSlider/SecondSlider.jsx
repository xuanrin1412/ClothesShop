import "./secondSlider.scss";

export default function SecondSlider() {
    return (
        <div className="sliderItem2">
            <img
                className="secondSlide"
                src="https://static.wixstatic.com/media/c837a6_bca092033c314adb923582d1f700d814~mv2.jpg/v1/fill/w_545,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_bca092033c314adb923582d1f700d814~mv2.jpg"
                alt=""
            />
            <div className="notifyShipping">
                <div className="textShipping">
                    <div className="textSHeader">FREE SHIPPING</div>
                    <span className="text3Time">
                        WHEN BUYING 3 ITEMS OR MORE.
                    </span>
                </div>
            </div>
        </div>
    );
}
