import React from 'react';

const Orders = () => {
    return (
        <main className="main_content">
        <div className="container main_account">
            <nav className="main_account_sidebar">
                <a className="radius transition active" href="#">Meus pedidos</a>
                <a className="radius transition" href="#">Meus dados</a>
                <a className="radius transition" href="#">Meus endereços</a>
                <a className="radius transition" href="#">Sair</a>
            </nav>
            <div className="main_account_content">
                
                    <article className="main_account_content_item">
                        <header className="main_account_content_item_header">
                            <p>22/12/2020</p>
                            <h1>Pedido #778764M</h1>
                        </header>
                        <ul className="main_account_content_item_pdts radius">
                           
                                <li><img src="/img/uploads/products/01.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/02.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/03.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/04.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/05.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/06.jpg" alt="" title=""/></li>
                        </ul>
                        <div className="main_account_content_item_desc">
                            <p>Aprovado</p>
                            <p>R$ 227,00 em 10x no cartão</p>
                            <a href="#" title="">ver detalhes</a>
                            <a href="#" title="">rastrear envio</a>
                        </div>
                    </article>
                    <article className="main_account_content_item">
                        <header className="main_account_content_item_header">
                            <p>18/03/2020</p>
                            <h1>Pedido #778764M</h1>
                        </header>
                        <ul className="main_account_content_item_pdts radius">
                           
                                <li><img src="/img/uploads/products/01.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/02.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/03.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/04.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/05.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/06.jpg" alt="" title=""/></li>
                        </ul>
                        <div className="main_account_content_item_desc">
                            <p>Aprovado</p>
                            <p>R$ 227,00 em 10x no cartão</p>
                            <a href="#" title="">ver detalhes</a>
                            <a href="#" title="">rastrear envio</a>
                        </div>
                    </article>
                    <article className="main_account_content_item">
                        <header className="main_account_content_item_header">
                            <p>data 05/05/20</p>
                            <h1>Pedido #778764M order 4</h1>
                        </header>
                        <ul className="main_account_content_item_pdts radius">
                           
                                <li><img src="/img/uploads/products/01.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/02.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/03.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/04.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/05.jpg" alt="" title=""/></li>
                                <li><img src="/img/uploads/products/06.jpg" alt="" title=""/></li>
                        </ul>
                        <div className="main_account_content_item_desc">
                            <p>Aprovado</p>
                            <p>R$ 227,00 em 10x no cartão</p>
                            <a href="#" title="">ver detalhes</a>
                            <a href="#" title="">rastrear envio</a>
                        </div>
                    </article>
                  
            </div>
        </div>
    </main>
    )
}

export default Orders;