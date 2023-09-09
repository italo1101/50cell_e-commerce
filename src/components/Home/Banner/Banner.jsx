import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1 id="title">50CELL</h1>
                <p id="copy-text">"Descubra a nossa loja de eletrônicos e encontre a tecnologia mais inovadora para estar sempre conectado. Visite-nos agora!"</p>

                <div className="buttons">
                    <button className="btn">Veja Mais</button>
                    <button className="btn-2">Compre Agora</button>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="HeadSet-img"/>
        </div>
    </div>;
};

export default Banner;
