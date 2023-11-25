import "./firstSlider.scss";

export default function FirstSlider() {
    return (
        <div className="sliderItem1">
            <img
                className="firstSlide"
                src="https://static.wixstatic.com/media/c837a6_01b68c877d39426683b3c883fb254188~mv2.jpg/v1/fill/w_545,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_01b68c877d39426683b3c883fb254188~mv2.jpg"
                alt=""
            />
            <div className="notifySell">
                <div className="percentSell">50% OFF</div>
                <div className="bg-percen"></div>
                <span className="textSell">
                    GET HALF OFF IN OUR BIGGEST CLEARANCE YET
                </span>
                <div className="bg-text"></div>
            </div>
        </div>
    );
}
