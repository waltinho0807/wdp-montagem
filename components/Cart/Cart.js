import React from 'react';

const Cart = () => {
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

                <section className="main_checkout_products radius">

                    <article className="main_checkout_products_item">
                        <div className="main_checkout_products_item_thumb">
                            <img className="radius" src="/img/uploads/products/02.jpg" alt="" title="" />
                        </div>
                        <div className="main_checkout_products_item_desc">
                            <h1>Calça Moletom Confort Mama Latina</h1>
                            <p className="main_checkout_products_item_desc_price">R$ 59,00 <span>R$ 79,00</span></p>
                            <p>Tamanho G | Cor: Preto</p>
                            <p className="main_checkout_products_item_desc_qtd">
                                Quantidade: 1
                                <span className="icon-plus icon-notext radius transition"></span>
                                <span className="icon-minus icon-notext radius transition"></span>
                            </p>
                        </div>
                    </article>
                    <article className="main_checkout_products_item">
                        <div className="main_checkout_products_item_thumb">
                            <img className="radius" src="/img/uploads/products/02.jpg" alt="" title="" />
                        </div>
                        <div className="main_checkout_products_item_desc">
                            <h1>Calça Moletom Confort Mama Latina</h1>
                            <p className="main_checkout_products_item_desc_price">R$ 59,00 <span>R$ 79,00</span></p>
                            <p>Tamanho G | Cor: Preto</p>
                            <p className="main_checkout_products_item_desc_qtd">
                                Quantidade: 1
                                <span className="icon-plus icon-notext radius transition"></span>
                                <span className="icon-minus icon-notext radius transition"></span>
                            </p>
                        </div>
                    </article>
                    <article className="main_checkout_products_item">
                        <div className="main_checkout_products_item_thumb">
                            <img className="radius" src="/img/uploads/products/02.jpg" alt="" title="" />
                        </div>
                        <div className="main_checkout_products_item_desc">
                            <h1>Calça Moletom Confort Mama Latina</h1>
                            <p className="main_checkout_products_item_desc_price">R$ 59,00 <span>R$ 79,00</span></p>
                            <p>Tamanho G | Cor: Preto</p>
                            <p className="main_checkout_products_item_desc_qtd">
                                Quantidade: 1
                                <span className="icon-plus icon-notext radius transition"></span>
                                <span className="icon-minus icon-notext radius transition"></span>
                            </p>
                        </div>
                    </article>

                </section>

                <footer className="main_checkout_footer">
                    <div className="main_checkout_footer_calc">
                        <input type="text" className="radius" placeholder="Informe seu CEP:" />
                        <button className="transition radius">Calcular Frete</button>
                    </div>
                    <div className="main_checkout_footer_price">
                        <p>Sub total: R$ 177,00</p>
                        <p>Frete: R$ 44,00</p>
                        <p><b>Total: R$ 221,00</b></p>
                        <span onClick={() => console.log('Click')} className="btn transition radius icon-cart">Finalizar compra</span>
                    </div>
                </footer>
            </div>
        </article>
    );
}

export default Cart;