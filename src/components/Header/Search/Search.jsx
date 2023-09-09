import "./Search.scss";
import { MdClose } from "react-icons/md"
import prod from "../../../assets/products/celulares/iphone-14/iphone-14-pro-max/iphone-14-pro-max-preto.png"

const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder="Pesquisar Produtos"
            />

            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    
                <div className="prod-details">
                    <span className="name">product name</span>
                    <span className="desc">product desc</span>
                </div>

                </div>

               

            </div>
        </div>
    </div>
};

export default Search;
