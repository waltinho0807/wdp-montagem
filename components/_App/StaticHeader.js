import React from 'react';

const StaticHeader = ({user}) => {
    return (
        <header class="main_header">
        <div class="container">
            <div class="main_header_nav">
                <div class="main_header_nav_logo">
                    <a href="" title="WdpShoes | Home">
                        <img alt="logo" title="logo menu" src="./public/css/themes/logo/wdpshoes_logo_white.png" />
                    </a>
                </div>
                <div class="main_header_nav_search">
                    <form action="" method="post" class="radius">
                        <input type="text" name="s" placeholder="Pesquisar na loja:" />
                        <button class="icon-search icon-notext transition"></button>
                    </form>
                </div>
                <div class="main_header_nav_menu">
                    <a class="icon-cart icon-notext transition main_header_nav_menu_cart"><span>3</span></a>
                    <div class="main_header_nav_menu_user">
                        <a href="#" title="#" class="icon-user main_header_nav_menu_user_a radius transition jtheme_login">Login</a>
                        <nav class="radius">
                            <a href="#">Meus Pedidos</a>
                            <a href="#">Meus Pedeidos</a>
                            <a href="#">Meus endereços</a>
                            <a href="#">Sair</a>
                        </nav>
                    </div>
                </div>
            </div>

            <ul class="main_header_departments">
                <li class="main_header_departments_li">
                    Departamento
                    <ul class="main_header_departments_li_ul">
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li class="main_header_departments_li">
                    Departamento
                    <ul class="main_header_departments_li_ul">
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li class="main_header_departments_li">
                    Departamento
                    <ul class="main_header_departments_li_ul">
                        <li class="main_header_deprtaments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li class="main_header_departments_li">
                    Departamento
                    <ul class="main_header_departments_li_ul">
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li class="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </header>
    );
}

export default StaticHeader;