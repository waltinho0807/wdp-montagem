import React from 'react';
import RelatedProducts from './RelatedProducts';
import AddProductToCart from './AddProductToCart';

const ProductSummary = ({ name, mediaUrl, _id, price, sku, productType, user }) => {
    return (
        <main className="main_content">
            <div className="container">
                <article className="main_product">
                    <div className="main_product_gallery">
                        <ul className="main_product_gallery_list">

                            <li className="radius transition  j_gallery_item"><img src="/img/uploads/products/16-1.jpg" alt="" title="" /></li>
                            <li className="radius transition  j_gallery_item"><img src="/img/uploads/products/16-2.jpg" alt="" title="" /></li>
                            <li className="radius transition  j_gallery_item"><img src="/img/uploads/products/16-3.jpg" alt="" title="" /></li>
                            <li className="radius transition  j_gallery_item"><img src="/img/uploads/products/16-4.jpg" alt="" title="" /></li>
                        </ul>
                        <div className="main_product_gallery_cover">
                            <img className="radius j_gallery_home" src={mediaUrl} alt="" title="" />
                        </div>
                    </div>
                    <div className="main_product_checkout">
                        <p className="main_product_checkout_stars">
                            <span className='icon-star-e icon-notext'></span>
                            <span className='icon-star-e icon-notext'></span>
                            <span className='icon-star-e icon-notext'></span>
                            <span className='icon-star-e icon-notext'></span>
                            <span className='icon-star-e icon-notext'></span>
                        </p>
                        <h1 className="main_product_checkout_title">{name}</h1>
                        <p className="main_product_checkout_headline">Exercite-se com estilo usando o Top Gonew Mármore Detalhe Tule! Trazendo um design moderno e uma estampa exclusiva... <b className="j_anchor" data-anchor=".main_product_description">ver mais</b></p>
                        <p className="main_product_checkout_price">R$ {price} <span>R$ 79,00</span></p>
                        <p className="main_product_checkout_economy">Economia de R$ 20,00 (25%)</p>
                        <p className="main_product_checkout_parcels">Em até 4x de 14,75</p>
                        <AddProductToCart user={user} productId={_id}/>

                        <aside className="main_product_checkout_related">
                            <h2>Outras <b>cores:</b></h2>
                            <div>
                                <a className="radius transition active"><img src="/img/uploads/products/16-1.jpg" alt="" title="" /></a>
                                <a className="radius transition"><img src="/img/uploads/products/17-1.jpg" alt="" title="" /></a>
                            </div>
                        </aside>
                    </div>
                </article>
            </div>
            <RelatedProducts/>
            <article className="main_product_description">
                <div className="container">
                    <header className="main_product_description_header">
                        <span className="main_product_description_header_tag">DESCRIÇÃO:</span>
                        <h4>Top Gonew c/ Bojo Removível Mármore Tule Média Sustentação - Estampado</h4>
                        <p>Exercite-se com estilo usando o Top Gonew Mármore Detalhe Tule! Trazendo um design moderno e uma estampa exclusiva, este Top Esportivo da Gonew entra em cena para oferecer ótima sustentação ao busto durante seus treinos e corridas. Ele é confeccionado em tecido elástico, e conta com detalhe em tule na parte da frente, que deixa o visual da peça sensual e muito mais respirável. Não perca tempo e compre já o seu Top Gonew Mármore Detalhe Tule Média Sustentação!</p>
                        <AddProductToCart user={user} productId={_id}/>
                    </header>
                    <div className="main_product_description_thumb">
                        <img className="radius" src={mediaUrl} alt="" title="" />
                    </div>
                </div>
            </article>

        </main>
    )
}

export default ProductSummary;