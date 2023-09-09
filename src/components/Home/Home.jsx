import "./Home.scss";

import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Product from "../Products/Products"

const Home = () => {
    return <div>
        <Banner/>
        <main className="main-content">
            <div className="layout">
                <Category/>
                <Product headingText="Produtos Populares"/>
            </div>
        </main>
        
    </div>;
};

export default Home;
