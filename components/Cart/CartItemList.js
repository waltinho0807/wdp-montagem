import React from 'react';
import { Button } from 'semantic-ui-react'
import { useRouter } from 'next/router';

const CartItemList = ({ products, user, handleRemoveFromCart, handleAddFromCart, success, cartAmout }) => {
    console.log(products)
    const mapCartProductsToItems = (products) => {
        return products.map(p => {
            return (
                <section className="main_checkout_products radius" key={p.product._id}>
                    <Button
                        basic
                        icon="remove"
                        floated="right"
                        onClick={() => handleRemoveFromCart(p.product._id)}
                    />
                    <article className="main_checkout_products_item" >

                        <div className="main_checkout_products_item_thumb">

                            <img className="radius" src={p.product.mediaUrl} alt="" title="" onClick={() => router.push(`/product?_id=${p.product._id}`)} />

                        </div>
                        <div className="main_checkout_products_item_desc">
                            <h1>{p.product.name}</h1>
                            <p className="main_checkout_products_item_desc_price">R$ {p.product.price} <span>R$ 79,00</span></p>
                            <p>Tamanho G | Cor: Preto</p>
                            <p className="main_checkout_products_item_desc_qtd">
                                Quantidade: {p.quantity}
                                <span className="icon-plus icon-notext radius transition" onClick={e => {}}></span>
                                <span className="icon-minus icon-notext radius transition" onClick={e => {}}></span>
                            </p>
                        </div>
                    </article>
                </section>
            )

        })

    }

    console.log(products)

    return (
        <article className="main_content">
            <div className="container main_checkout">
                <header className="main_checkout_header">
                    <div>
                        <h1>WDP Shoes</h1>
                        <p>3 produtos em seu carrinho:</p>
                    </div>
                    <span className="btn transition radius icon-cart">Finalizar compra</span>
                </header>
                {products.length > 0 ? mapCartProductsToItems(products) :
                    <section className="main_checkout_products radius">
                        <h1>Carrinho vazio</h1>
                    </section>
                }


                <footer className="main_checkout_footer">
                    <div className="main_checkout_footer_calc">
                        <input type="text" className="radius" placeholder="Informe seu CEP:" />
                        <button className="transition radius">Calcular Frete</button>
                    </div>
                    <div className="main_checkout_footer_price">
                        <p>Sub total: R$ {cartAmout}</p>
                        <p>Frete: R$ 44,00</p>
                        <p><b>Total: R$ 221,00</b></p>
                        <span onClick={() => console.log('Click')} className="btn transition radius icon-cart">Finalizar compra</span>
                    </div>
                </footer>
            </div>
        </article>
    );
}

export default CartItemList;