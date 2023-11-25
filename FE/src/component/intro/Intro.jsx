import "./intro.scss";
export default function Intro() {
    return (
        <div className="intro">
            <div className="wrapper">
                <div className="contain2pic">
                    <div className="left">
                        <img
                            className="imgleft"
                            src="https://static.wixstatic.com/media/c837a6_0fd0bfc2bc654de9852fc15cb80744a8~mv2.jpg/v1/fill/w_601,h_1050,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0fd0bfc2bc654de9852fc15cb80744a8~mv2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <img
                            className="imgright"
                            src="https://static.wixstatic.com/media/c837a6_d82be91226cb41899912a80e214f0e34~mv2.jpg/v1/fill/w_601,h_1050,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d82be91226cb41899912a80e214f0e34~mv2.jpg"
                            alt=""
                        />
                    </div>
                </div>
                {/* BANNER */}
                <div className="banner-container">
                    <div className="banner">
                        <div className="btnshop">Shop Women</div>
                        <div className="textBContainer">
                            <div className="textHeader">
                                GOODBYE SWEATS, HELLO DENIM
                            </div>
                            <div className="textSecond">
                                Better days are coming, take them on in style
                            </div>
                        </div>
                        <div className="btnshop">Shop Men</div>
                    </div>
                    <div className="icon-banner">
                        <img
                            style={{ height: "90px" }}
                            src="https://static.wixstatic.com/media/c837a6_36f2502bb4ef4ad98135b0bdcf2748d6~mv2.png/v1/fill/w_135,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1266822667%20copy.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
