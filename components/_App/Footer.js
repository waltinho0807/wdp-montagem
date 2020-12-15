import React from 'react';

const Footer = ({user}) => {
    return (
        <footer className="main_footer">
        <div className="container">
            <article className="main_footer_optin">
                <header className="main_footer_optin_header">
                    <h3>Quer 20% de desconto?</h3>
                    <p>Informe seu melhor e-mail logo abaixo e recebe um cupom com 20% de desconto para sua primeira
                        compra!</p>
                </header>
                <form className="main_footer_optin_form">
                    <input className="radius" type="email" name="email" placeholder="Informe seu e-mail:" />
                    <button className="btn radius transition icon-mail">Quero meu desconto!</button>
                </form>
            </article>

            <div className="main_footer_nav flex">
                <nav className="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>
                <nav className="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>
                <nav className="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>

                <nav className="flex-4">
                    <h4>Pagamento seguro:</h4>
                    <ul className="main_footer_nav_pays flex">
                        <li className="flex-4"><img alt="" title="" src="/img/cards/mastercard.png" /></li>
                        <li className="flex-4"><img alt="" title="" src="/img/cards/visa.png" /></li>
                        <li className="flex-4"><img alt="" title="" src="/img/cards/amex.png" /></li>
                        <li className="flex-4"><img alt="" title="" src="/img/cards/aura.png" /></li>
                        <li className="flex-4"><img alt="" title="" src="/img/cards/dinners.png" /></li>
                        <li className="flex-4"><img alt="" title="" src="/img/cards/discover.png" /></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="main_footer_bottom">
            <div className="container flex">
                <div className="main_footer_bottom_copy">
                    <img alt="WdpShoes" title="WdpShoes" src="/css/themes/logo/wdpshoes_logo_black.png" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <nav className="main_footer_bottom_social">
                    <a title="" href="#" className="icon-facebook icon-notext transition"></a>
                    <a title="" href="#" className="icon-instagram icon-notext transition"></a>
                    <a title="" href="#" className="icon-youtube icon-notext transition"></a>
                </nav>
            </div>
        </div>

    </footer>
    );
}

export default Footer;