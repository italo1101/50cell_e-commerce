import "./Header.scss"
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"  

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
// import { context } from "../../utils/context"

const Header = () => {

    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 200){
            setScrolled(true)
        } else {
          setScrolled(false)  
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`main-header ${scrolled ? `sticky-header` : ''}`}>
                <div className="header-content">
                    <ul className="topics">
                        <li>Sobre</li>
                        <li>Produtos</li>
                        <li>Contato</li>
                    </ul>
                    <div className="logo">CinquentaCell</div>
                    <div className="icons">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            <span className="add-product">5</span>
                        </span>

                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
       </> 
    ) 
    
};

export default Header
