import React from 'react';
import { Input } from "semantic-ui-react";
import { useRouter } from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';

const AddProductToCart = ({ user, productId }) => {
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState('m')
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        let timeout;
        if (success) {
            timeout = setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [success])
    let add = 1;
    const addCart = () => {
        add = quantity + 1;
        setQuantity(add) 
    }

    let sub = 1;
    const subCart = () => {
        sub = quantity - 1;
        setQuantity(sub)  
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    }
     

    const handleAddProductToCart = async () => {
        try {
            setLoading(true);
            const url = `${baseUrl}/api/cart`;
            const payload = { quantity, productId };
            const token = cookie.get('token');
            const headers = { headers: { Authorization: token } };
            await axios.put(url, payload, headers);
            setSuccess(true);
        } catch (error) {
            catchErrors(error, window.alert);
        } finally {
            setLoading(false);
        }
    }

    return (
        <React.Fragment>
            <form className="main_product_checkout_cart" onSubmit={handleAddProductToCart} >
                            <h2>Selecione o <b>tamanho:</b></h2>
                            <span className="radius transition" onClick={e => setSize('p')}>P</span>
                            <span className="radius transition" onClick={e => setSize('m')}>M</span>
                            <span className="radius transition" onClick={e => setSize('g')}>G</span>
                            <span className="radius transition" onClick={e => setSize('gg')}>GG</span>

                            <div className="main_product_checkout_cart_act">
                                <div className="radius">
                                    <span className="icon-plus icon-notext" onClick={addCart}></span>
                                    <input type="text" name="quantity" name="unidade" value={quantity} onChange={handleChange} />
                                    <span className="icon-minus icon-notext" onClick={subCart}></span>
                                </div>
                                <button className="btn icon-cart radius transition" type="submit" >COMPRAR</button>
                            </div>
                        </form>
        </React.Fragment>
    );
}

export default AddProductToCart;
