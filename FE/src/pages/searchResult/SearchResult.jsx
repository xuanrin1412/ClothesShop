import React from "react";
import Navbar from "../../component/navbar/Navbar";
import ProductShop from "../productShop/ProductShop";

export default function SearchResult() {
    return (
        <div className="searchResult">
            <Navbar />
            <ProductShop />
        </div>
    );
}
