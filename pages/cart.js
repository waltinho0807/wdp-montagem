import React from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import cookie from 'js-cookie';
import { Segment, Divider, Form, Button, Input, Checkbox } from 'semantic-ui-react';
import CartItemList from "../components/Cart/CartItemList"
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';
import calculateCartTotal from '../utils/calculateCartTotal';

const Cart = ({ products, user }) => {
    const [cartProducts, setCartProducts] = React.useState(products);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
   
    const [cartAmout, setCartAmaount] = React.useState(0);
    const [isCartEmpty, setCartEmpty] = React.useState(false);

    React.useEffect(() => {
        const { cartTotal } = calculateCartTotal(products);
        setCartAmaount(cartTotal);
        setCartEmpty(products.length === 0)
        
    }, [products]);

    
    
    
    const handleRemoveFromCart = async (productId) => {
        const url = `${baseUrl}/api/cart`;
        const token = cookie.get("token");
        const payload = {
            params: { productId },
            headers: { Authorization: token }
        };
        const response = await axios.delete(url, payload);
        setCartProducts(response.data);
    }

    const [quantity, setQuantity] = React.useState(1);
    
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
        <>
            <CartItemList
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddFromCart={handleAddProductToCart}
                cartAmout={cartAmout}
                user={user}
                products={cartProducts}
                success={success}
            />
        </>
    )
}

Cart.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx);
    if (!token) {
        return { products: [] };
    }
    const url = `${baseUrl}/api/cart`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    return { products: response.data };
}

export default Cart;