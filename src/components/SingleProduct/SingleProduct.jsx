import "./SingleProduct.scss";
import prod from "../../../src/assets/products/acessorios/cabo-v8.png"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import{
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaPinterest,
    FaWhatsappSquare,
    FaCartPlus,
} from "react-icons/fa"

const SingleProduct = () => {
    return <div className="single-product-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="image-content">
                    <img src={prod} alt="" />
                </div>
                <div className="text-content">
                    <h1 className="name">product name</h1>
                    <span className="price">R$ 499,00</span>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam modi obcaecati voluptatum, in odio eum laudantium, eaque voluptatibus ratione possimus voluptate magni ex nobis veniam maxime aut nisi dicta impedit!</p>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                        </button>
                    </div>

                    <span className="divider"/>

                    <div className="info-item">
                        <span className="text-bold">
                            Categoria:
                            <span>Headphones</span>
                        </span>

                        <span className="text-bold">
                            Compartilhe:
                            <span className="social-icons">
                                <FaFacebook size={16}/>
                                <FaWhatsappSquare size={16}/>
                                <FaTwitter size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
};

export default SingleProduct;
