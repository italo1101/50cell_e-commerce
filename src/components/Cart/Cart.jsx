import "./Cart.scss";
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem"

const Cart = ({ setShowCart }) => {
    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Carrinho de Compras</span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">close</span>
                </span>
            </div>

            {/* <div className="empty-cart">
                <BsCartX/>
                <span>Carrinho vazio</span>
                <button className="return-btn">Ir as Compras!</button>
            </div> */}

            <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">subtotal:</span>
                        <div className="text total">R$499</div>
                        
                    </div>
                    <div className="btn">
                         <button className="checkout-btn">Finalizar</button>   
                    </div>
                    
                </div>
            </>
        </div>
    </div>
};

export default Cart;
