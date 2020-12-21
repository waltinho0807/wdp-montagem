import React from 'react';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';
import ModalLogin from './ModalLogin';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();



const StaticHeader = ({ user, cart }) => {


    const router = useRouter();
    const [menuActive, setMenuActive] = React.useState(false);
    const [search, setSearch] = React.useState({ search: '' });

    console.log(user)
    console.log(cart)
    const isRoot = user && user.role == 'root';
    const isAdmin = user && user.role == 'admin';
    const isRootOrAdmin = isRoot || isAdmin;
    const [modalIsOpen, setIsOpen] = React.useState(false);





    async function openModal(e) {

        await setIsOpen(true);
    }

    async function closeModal(e) {

        await setIsOpen(false);
    }

    const isActive = (route) => {
        return route == router.pathname;
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSearch(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSearch = (e) => {
        Router.push({
            pathname: '/products',
            query: { term: search.search }
        })
    }

    const menuToggle = () => {
        setMenuActive(!menuActive)
    }
    
    return (
        <header className="main_header">
            <div className="container">
                <div className="main_header_nav">
                    <div className="main_header_nav_logo">
                        <a href="/" title="WdpShoes | Home">
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
                        <a className="icon-cart icon-notext transition main_header_nav_menu_cart" href="/cart"><span>{cart.length}</span></a>
                        <div className="main_header_nav_menu_user">
                            {user ? (
                                <>
                                 <a href="#" title="#" className="icon-user main_header_nav_menu_user_a radius transition" >{user.name}</a>
                                <nav className="radius">
                                    {user.role === 'admin' && <a href="/admin/dashboard">Dasboard</a> }
                                    <a href="/my-orders-history">Meus Pedidos</a>
                                    <a href="#">Meus Pedeidos</a>
                                    <a href="#">Meus endereços</a>
                                    <a href="#" onClick={handleLogout}>Sair</a>
                                </nav>
                                </>) : (<a href="#" title="#" className="icon-user main_header_nav_menu_user_a radius transition" onClick={openModal} >Login</a>)}
                           

                            {modalIsOpen && <ModalLogin isOpen={modalIsOpen} closeModal={closeModal} />}

                        </div>
                    </div>
                </div>

                <ul className="main_header_departments">
                    <li className="main_header_departments_li">
                        Shop
                    <ul className="main_header_departments_li_ul">
                            <li className="main_header_departments_li_ul_li"><a href="/products">Products</a></li>
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