// import "./bestSeller.scss";
// import ProductShow from "../productShow/ProductShow";
// import { useEffect, useState } from "react";

// export default function BestSeller() {
//     const [showText, setShowText] = useState(false);

//     const handleScroll = () => {
//         const element = document.querySelector(".scroll-in");
//         if (element) {
//             const elementTop = element.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
//             if (elementTop < windowHeight) {
//                 setShowText(true);
//             }
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//     return (
//         <div className="bestSeller">
//             <div className="wrapper">
//                 <div className="textContainer">
//                     <div className={`scroll-in ${showText ? "show" : ""}`}>
//                         BEST SELLING DENIM
//                     </div>
//                 </div>
//                 <ProductShow />
//             </div>
//         </div>
//     );
// }
