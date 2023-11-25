import React, { useEffect, useState } from "react";
import "./productShop.scss";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import ProductShow from "../../component/productShow/ProductShow";
import axios from "axios";

// FILTER AND PRODUCT SHOW
export default function ProductShop() {
    //
    //============HANDLE COLOR ACTIVE OF CATEGORY ====================
    const [isButton1Active, setIsButton1Active] = useState(false);
    const [isButton2Active, setIsButton2Active] = useState(false);
    const [isButton3Active, setIsButton3Active] = useState(false);

    const handleButtonColor = (buttonNumber) => {
        if (buttonNumber === 1) {
            setIsButton1Active(true);
            setIsButton2Active(false);
            setIsButton3Active(false);
        } else if (buttonNumber === 2) {
            setIsButton1Active(false);
            setIsButton2Active(true);
            setIsButton3Active(false);
        } else {
            setIsButton1Active(false);
            setIsButton2Active(false);
            setIsButton3Active(true);
        }
    };

    //================FILTER SIZE , COLOR PRODUCTS========================
    const [selectedColor, setSelectedColor] = useState("all");
    const [selectedSize, setSelectedSize] = useState("all");
    const [sortOption, setSortOption] = useState("newest");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleSortChange = (sort) => {
        setSortOption(sort);
    };

    //=========GET CATEGORY ==============================================
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filterCategory = () => {
        if (!allProduct || allProduct.length === 0) {
            return [];
        }
        const filteredProducts = allProduct.filter((product) => {
            // Các điều kiện lọc
            const isCategoryMatch =
                selectedCategory === "all" ||
                product.category.some((cat) => cat === selectedCategory);
            const isColorMatch =
                selectedColor === "all" ||
                product.color.some((col) => col === selectedColor);
            const isSizeMatch =
                selectedSize === "all" ||
                product.size.some((sz) => sz === selectedSize);

            return isCategoryMatch && isColorMatch && isSizeMatch;
        });

        // Sắp xếp sản phẩm theo giá
        if (sortOption === "asc") {
            filteredProducts.sort((product1, product2) => {
                return product1.price - product2.price;
            });
        } else if (sortOption === "desc") {
            // Sắp xếp giảm dần
            filteredProducts.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }

        return filteredProducts;
    };
    //========GET API ALL PRODUCT=============================================
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/clothes/")
            .then((response) => {
                setAllProduct(response.data.result);
            })
            .catch((error) => {
                console.error("Error fetching AllProduct products:", error);
            });
    }, [
        allProduct.length,
        selectedCategory,
        selectedColor,
        selectedSize,
        sortOption,
    ]);

    return (
        <div className="productShop">
            <Navbar />
            <div className="productShopContain">
                <div className="productBanner">
                    <div className="ShopAll">
                        <div className="headerShop">SHOP ALL</div>
                        <div className="para">
                            I'm a paragraph. Click here to add your own text and
                            edit me. I’m a great place for you to tell a story
                            and let your users know a little more about you.
                        </div>
                    </div>
                    <div className="imgContain">
                        <img
                            src="https://static.wixstatic.com/media/c837a6_da404da96d014729bce9c2653025d96c~mv2.jpg/v1/fill/w_1129,h_600,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_da404da96d014729bce9c2653025d96c~mv2.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="filterContainer">
                    {/* Filter product */}
                    <div className="filter">
                        <div className="filterText">Filter Products:</div>
                        <select
                            onChange={(e) => handleColorChange(e.target.value)}
                        >
                            <option value="all">All Colors</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="gray">Gray</option>
                            <option value="blue">Blue</option>
                            {/* Thêm các màu khác */}
                        </select>
                        <select
                            onChange={(e) => handleSizeChange(e.target.value)}
                        >
                            <option value="all">All Sizes</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            {/* Thêm các kích thước khác */}
                        </select>
                    </div>
                    {/* category */}
                    <div className="category">
                        <button
                            style={{
                                backgroundColor: isButton1Active ? "green" : "",
                            }}
                            onClick={() => {
                                handleButtonColor(1);
                                setSelectedCategory("all");
                            }}
                        >
                            All Product
                        </button>
                        <button
                            style={{
                                backgroundColor: isButton2Active ? "green" : "",
                            }}
                            onClick={() => {
                                handleButtonColor(2);
                                setSelectedCategory("woman");
                            }}
                        >
                            Women
                        </button>
                        <button
                            style={{
                                backgroundColor: isButton3Active ? "green" : "",
                            }}
                            onClick={() => {
                                handleButtonColor(3);
                                setSelectedCategory("man");
                            }}
                        >
                            Men
                        </button>
                    </div>
                    {/* Sort product */}
                    <div className="filter">
                        <div className="filterText">Sort Products:</div>
                        <select
                            onChange={(e) => handleSortChange(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="asc">Price (asc)</option>
                            <option value="desc">Price (desc)</option>
                        </select>
                    </div>
                </div>
                <ProductShow
                    filterCategory={filterCategory()}
                    // allProduct={allProduct}
                />
            </div>

            <Footer />
        </div>
    );
}
