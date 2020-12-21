import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';
import { handleLogin } from '../../utils/auth';
import {Router} from 'next/router';

const INITIAL_USER = {
    email: '',
    password: ''
}

const ModalLogin = ({isOpen, closeModal }) => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    
    ReactModal.setAppElement('.main_header_nav_menu_user_a');
    React.useEffect((modal) => {
        const isUser = Object.values(user).every(el => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true)
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
        console.log(name + value)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const url = `${baseUrl}/api/login`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data);
            closeModal();
        } catch (error) {
            catchErrors(error, setError);
            console.log(user)
            
        } finally {
            setLoading(false);
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
 
 console.log(baseUrl)
    return (
        <ReactModal
            isOpen={isOpen}
            style={customStyles}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
        >

            <div className="">
                <div className="theme_login_box radius">
                    <header>
                        <h1>Fazer Login:</h1>
                        <p>Informe seu nome e e-mail para fazer login e acessar seus pedidos.</p>
                    </header>
                    <form method="POST" onSubmit={handleSubmit} >
                        <input className="radius" type="email" name="email" value={user.email} onChange={handleChange} placeholder="E-mail:" />
                        <input className="radius" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Senha:" />
                        <button className="btn transition radius icon-success" type="submit"  title="Minha conta" >Fazer Login</button>
                    </form>
                    <a href="#" title="Recuperar senha" className="theme_login_box_recover transition icon-alert" onClick={closeModal} >Esqueci minha senha</a>
                </div>
            </div>
        </ReactModal>
    )
};

export default ModalLogin;