import React from 'react';

const INITIAL_USER = {
    email: '',
    password: ''
};

const StaticHeader = ({user}) => {
    return (
        <header className="main_header">
        <div className="container">
            <div className="main_header_nav">
                <div className="main_header_nav_logo">
                    <a href="" title="WdpShoes | Home">
                        <img alt="logo" title="logo menu" src="/css/themes/logo/wdpshoes_logo_white.png" />
                    </a>
                </div>
                <div className="main_header_nav_search">
                    <form action="" method="post" className="radius">
                        <input type="text" name="s" placeholder="Pesquisar na loja:" />
                        <button className="icon-search icon-notext transition"></button>
                    </form>
                </div>
                <div className="main_header_nav_menu">
                    <a className="icon-cart icon-notext transition main_header_nav_menu_cart" href="/cart"><span>3</span></a>
                    <div className="main_header_nav_menu_user">
                        <a href="#" title="#" className="icon-user main_header_nav_menu_user_a radius transition jtheme_login">Login</a>
                        <nav className="radius">
                            <a href="#">Meus Pedidos</a>
                            <a href="#">Meus Pedeidos</a>
                            <a href="#">Meus endereços</a>
                            <a href="#">Sair</a>
                        </nav>
                    </div>
                </div>
            </div>

            <ul className="main_header_departments">
                <li className="main_header_departments_li">
                    Departamento
                    <ul className="main_header_departments_li_ul">
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li className="main_header_departments_li">
                    Departamento
                    <ul className="main_header_departments_li_ul">
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li className="main_header_departments_li">
                    Departamento
                    <ul className="main_header_departments_li_ul">
                        <li className="main_header_deprtaments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>
                <li className="main_header_departments_li">
                    Departamento
                    <ul className="main_header_departments_li_ul">
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                        <li className="main_header_departments_li_ul_li"><a href="">Categoria</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </header>
    );
}

export default StaticHeader;