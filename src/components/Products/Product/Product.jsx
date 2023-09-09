import "./Product.scss";
import prod from "../../../assets/products/acessorios/carregador-hrebos-tipoc.png"

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="Earbuds"/> 
        </div>

        <div className="product-details">
            <span className="name">Product name</span>
            <span className="price">R$ 499,00</span>
        </div>
    </div>;
};

export default Product;
