import React from 'react';

const ProductDetail = () => {
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
                            <img className="radius j_gallery_home" src="/img/uploads/products/16-1.jpg" alt="" title="" />
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
                        <h1 className="main_product_checkout_title">Top Gonew c/ Bojo Removível Mármore Tule Média Sustentação - Estampado</h1>
                        <p className="main_product_checkout_headline">Exercite-se com estilo usando o Top Gonew Mármore Detalhe Tule! Trazendo um design moderno e uma estampa exclusiva... <b class="j_anchor" data-anchor=".main_product_description">ver mais</b></p>
                        <p className="main_product_checkout_price">R$ 59,00 <span>R$ 79,00</span></p>
                        <p className="main_product_checkout_economy">Economia de R$ 20,00 (25%)</p>
                        <p className="main_product_checkout_parcels">Em até 4x de 14,75</p>
                        <form className="main_product_checkout_cart">
                            <h2>Selecione o <b>tamanho:</b></h2>
                            <span className="radius transition">P</span>
                            <span className="radius transition">M</span>
                            <span className="radius transition">G</span>
                            <span className="radius transition">GG</span>

                            <div className="main_product_checkout_cart_act">
                                <div className="radius">
                                    <span className="icon-plus icon-notext"></span>
                                    <input type="text" value="1" />
                                    <span className="icon-minus icon-notext"></span>
                                </div>
                                <button className="btn icon-cart radius transition">COMPRAR</button>
                            </div>
                        </form>

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


            <section className="main_product_related">
                <div className="container">
                    <header className="main_content_header">
                        <h2 className="main_content_header_title">Produtos relacionados:</h2>
                    </header>

                    <div className="pdt_gallery pdt_gallery_normalize flex">
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/05.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/06.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/07.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/08.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/09.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/10.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/11.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/12.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                    </div>
                </div>
            </section>


            <article className="main_product_description">
                <div className="container">
                    <header className="main_product_description_header">
                        <span className="main_product_description_header_tag">DESCRIÇÃO:</span>
                        <h4>Top Gonew c/ Bojo Removível Mármore Tule Média Sustentação - Estampado</h4>
                        <p>Exercite-se com estilo usando o Top Gonew Mármore Detalhe Tule! Trazendo um design moderno e uma estampa exclusiva, este Top Esportivo da Gonew entra em cena para oferecer ótima sustentação ao busto durante seus treinos e corridas. Ele é confeccionado em tecido elástico, e conta com detalhe em tule na parte da frente, que deixa o visual da peça sensual e muito mais respirável. Não perca tempo e compre já o seu Top Gonew Mármore Detalhe Tule Média Sustentação!</p>
                        <form className="main_product_checkout_cart">
                            <h2>Selecione o <b>tamanho:</b></h2>
                            <span className="radius transition">P</span>
                            <span className="radius transition">M</span>
                            <span className="radius transition">G</span>
                            <span className="radius transition">GG</span>

                            <div className="main_product_checkout_cart_act">
                                <div className="radius">
                                    <span className="icon-plus icon-notext"></span>
                                    <input type="text" value="1" />
                                    <span className="icon-minus icon-notext"></span>
                                </div>
                                <button className="btn icon-cart radius transition">COMPRAR</button>
                            </div>
                        </form>
                    </header>
                    <div className="main_product_description_thumb">
                        <img className="radius" src="<?= $configBase; ?>/Uploads/products/16-1.jpg" alt="" title="" />
                    </div>
                </div>
            </article>

        </main>
    )
}

export default ProductDetail;