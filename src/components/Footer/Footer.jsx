import React from "react"
import "./Footer.scss"
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">Sobre</div>
                <div className="text">Se você é fã da Apple e está em Recife, precisa conhecer a loja de iPhones 50Cell! Com uma variedade incrível de produtos e acessórios, a loja é um verdadeiro paraíso para quem ama tecnologia. O interior é super moderno e a equipe é super gente boa, pronta para te ajudar no que precisar. E o melhor de tudo é que os preços são justos e cabem no bolso. Então se joga e vem conhecer a 50Cell, tenho certeza que você vai adorar!</div>
            </div>

            <div className="col">
                <div className="title">Contato</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div><a href="https://goo.gl/maps/8sPjMtrt16hWEL4E7" target="_blank" rel="noreferrer">Av. Beberibe, 1386 - Beberibe, Recife - PE, 52120-000</a></div>
                </div>

                <div className="c-item">
                    <FaMobileAlt />
                    <div><a href="https://api.whatsapp.com/send/?phone=558195058968&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">(081) 9 95058968</a></div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categorias</div>
                <span className="text">HeadPhones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">SoundBars</span>
            </div>

            <div className="col">
                <div className="title">Páginas</div>
                <span className="text">Home</span>
                <span className="text">Sobre</span>
                <span className="text">Politica de privacidade</span>
                <span className="text">Regras de Devolução</span>
                <span className="text">Termos & Condições</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                &#169; 2023 50Cell | Desenvolvido por <a id="dev" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Italo Cruz</a>
                </div>
                <img src={Payment} alt="Bandeiras Bancárias"/>
            </div>
        </div>
    </footer>
};

export default Footer
