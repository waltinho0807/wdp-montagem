import React from 'react';
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import { handleLogin } from '../../utils/auth';
import ModalLogin from '../../components/_App/ModalLogin';

const INITIAL_USER = {
    email: '',
    password: ''
};

const Login = () => {
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

    return (
        <div class="">
                <div class="theme_login_box radius">
                    <header>
                        <h1>Fazer Login:</h1>
                        <p>Informe seu nome e e-mail para fazer login e acessar seus pedidos.</p>
                    </header>
                    <form method="POST" onSubmit={handleSubmit}>
                        <input class="radius" type="email" name="email" value={user.email} onChange={handleChange} placeholder="E-mail:" />
                        <input class="radius" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Senha:" />
                        <a class="btn transition radius icon-success" type="submit" href="/" title="Minha conta">Fazer Login</a>
                    </form>
                    <a href="#" title="Recuperar senha" class="theme_login_box_recover transition icon-alert">Esqueci minha senha</a>
                </div>
            </div>
    );
}

export default Login;