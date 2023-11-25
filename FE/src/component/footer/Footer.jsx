import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <hr className="hr"></hr>
            <div className="wrapper">
                <div className="top">
                    <div className="section">
                        <div className="headerSection">HEADQUARTER</div>
                        <p className="info">
                            HEADQUARTERS 500 Terry Francine Street San
                            Francisco, CA 94158
                        </p>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="mailto:xuanrin1412@gmail.com">
                            xuanrin1412@gmail.com
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="tel:+84967016129">
                            0967016129
                        </a>
                    </div>
                    <div className="section">
                        <div className="headerSection">MENU</div>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Shop All
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Women
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Men
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Accessories
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Discover
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Clearance
                        </a>
                    </div>
                    <div className="section">
                        <div className="headerSection">POLICY</div>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Shipping & Returns
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Store Policy
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Payment Methods
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            FAQ
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Contact
                        </a>
                    </div>
                    <div className="section">
                        <div className="headerSectionNone">
                            Join Our Mailing List
                        </div>
                        <div className="enjoysales">
                            GET 15% OFF AND ENJOY SALES PERKS ON YOUR FIRST
                            ORDER.
                        </div>
                        <label className="connectemail" for="connectemail">
                            Email Address *
                        </label>
                        <form className="emailForm">
                            <input
                                className="inputEmail"
                                type="text"
                                id="connectemail"
                                required
                            />
                            <input
                                className="submit"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                    <div className="section ">
                        <div className="headerSection">SOCIAL</div>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Twitter
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Instagram
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Facebook
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            Pinterest
                        </a>
                        {/*eslint-disable-next-line */}
                        <a className="info" href="">
                            TikTok
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="payment">
                        <div className="infopayment">
                            WE ACCEPT THE FOLLOWING PAYMENT METHODS
                        </div>
                        <div className="pays">
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_b4fcf701005245968d84419ae770bab6~mv2.png/v1/fill/w_75,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_5c1569bf11c346d7ad76130e6a030d66~mv2.png/v1/fill/w_75,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MasterCard.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_b4fcf701005245968d84419ae770bab6~mv2.png/v1/fill/w_75,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_4916fdd751714951b56685e77c4ce22d~mv2.png/v1/fill/w_72,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UnionPay.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_e3867e3965fb439aa597381ebf0738c2~mv2.png/v1/fill/w_63,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/JCB.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_ce03f4ec60f94f7fa08cb31f4721450d~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                {/*eslint-disable-next-line */}
                                <img src="https://static.wixstatic.com/media/84770f_b4fcf701005245968d84419ae770bab6~mv2.png/v1/fill/w_75,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.pnghttps://static.wixstatic.com/media/84770f_5295e75cdadc4382a3315cfe2397c0b5~mv2.png/v1/fill/w_74,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png" />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_a967a677a62f43cf8d0089e767a2efa5~mv2.png/v1/fill/w_77,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
                                    alt=""
                                />
                            </div>
                            <div className="containPays">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_b4fcf701005245968d84419ae770bab6~mv2.png/v1/fill/w_75,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="infoWebClone">
                        Clone Template from Deni - web
                        <a href="https://vi.wix.com/">Wix</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
