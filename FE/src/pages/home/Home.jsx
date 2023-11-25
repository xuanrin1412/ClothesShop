import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Intro from "../../component/intro/Intro";
// import BestSeller from "../../component/bestSeller/BestSeller";
import ManyStyle from "../../component/manyStyle/ManyStyle";
import ManyStyleLast from "../../component/manyStyleLast/ManyStyleLast";
import FavouritePart from "../../component/favouritePart/FavouritePart";
import Blank from "../../component/blank/Blank";
import BannerSocial from "../../component/bannerSocial/BannerSocial";
import Footer from "../../component/footer/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Intro />
            {/* <BestSeller /> */}
            <ManyStyle />
            <ManyStyleLast />
            <FavouritePart />
            <Blank />
            <BannerSocial />
            <Footer />
        </div>
    );
}
