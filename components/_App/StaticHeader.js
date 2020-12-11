import React from 'react';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';
import ModalLogin from './ModalLogin';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const INITIAL_USER = {
    email: '',
    password: ''
};

const StaticHeader = () => {

    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true)
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const url = `${baseUrl}/api/login`;
            const payload = {...user};
            const response = await axios.post(url, payload);
            handleLogin(response.data);
        } catch (error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
        console.log(handleChange)
    }

    const router = useRouter();
    const [menuActive, setMenuActive] = React.useState(false);
    const [search, setSearch] = React.useState({search: ''})
    // console.log(user)
    const isRoot = user && user.role == 'root';
    const isAdmin = user && user.role == 'admin';
    const isRootOrAdmin = isRoot || isAdmin;

    const isActive = (route) => {
        return route == router.pathname;
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSearch(prevState => ({...prevState, [name]: value}) )
    }

    const handleSearch = (e) => {
        Router.push({
            pathname: '/products',
            query: {term: search.search}
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