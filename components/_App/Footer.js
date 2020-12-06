import React from 'react';

const Footer = ({user}) => {
    return (
        <footer class="main_footer">
        <div class="container">
            <article class="main_footer_optin">
                <header class="main_footer_optin_header">
                    <h3>Quer 20% de desconto?</h3>
                    <p>Informe seu melhor e-mail logo abaixo e recebe um cupom com 20% de desconto para sua primeira
                        compra!</p>
                </header>
                <form class="main_footer_optin_form">
                    <input class="radius" type="email" name="email" placeholder="Informe seu e-mail:" />
                    <button class="btn radius transition icon-mail">Quero meu desconto!</button>
                </form>
            </article>

            <div class="main_footer_nav flex">
                <nav class="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>
                <nav class="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>
                <nav class="flex-4">
                    <h4>Nome menu:</h4>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                    <a href="#" title="">Link de rodapé</a>
                </nav>

                <nav class="flex-4">
                    <h4>Pagamento seguro:</h4>
                    <ul class="main_footer_nav_pays flex">
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/mastercard.png" /></li>
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/visa.png" /></li>
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/amex.png" /></li>
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/aura.png" /></li>
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/dinners.png" /></li>
                        <li class="flex-4"><img alt="" title="" src="./public/img/cards/discover.png" /></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="main_footer_bottom">
            <div class="container flex">
                <div class="main_footer_bottom_copy">
                    <img alt="WdpShoes" title="WdpShoes" src="./public/css/themes/logo/wdpshoes_logo_black.png" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <nav class="main_footer_bottom_social">
                    <a title="" href="#" class="icon-facebook icon-notext transition"></a>
                    <a title="" href="#" class="icon-instagram icon-notext transition"></a>
                    <a title="" href="#" class="icon-youtube icon-notext transition"></a>
                </nav>
            </div>
        </div>

    </footer>
    );
}

export default Footer;