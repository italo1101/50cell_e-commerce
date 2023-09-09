import "./Offer.scss"
import prod from "../../../assets/products/celulares/iphone-14/iphone-14-pro-max/iphone-14-pro-max-preto.png"

const Offer = () => {
    return <section className="offer-banner">
        <div className="content">
            <div className="text-content">
                <h1 id="title">boAt Airpods Black</h1>
                <p id="copy-text">A maneira perfeita de expressar seu estilo único enquanto desfruta da liberdade sem fio incomparável do boAt AirPods Black. Com uma venda limitada, este item exclusivo é projetado para aqueles que procuram uma experiência auditiva única.</p>
               <div className="button">
                <button className="btn">Compre Já</button>
            </div>
            </div>
            <img className="offer-img" src={prod} alt="EarBuds"/>

            
        </div> 

        
        
    </section>
}

export default Offer
