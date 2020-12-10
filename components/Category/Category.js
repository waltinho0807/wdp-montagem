import React from 'react';

const Category = () => {
    return (
        <main className="main_content">
            <div className="container main_category">
                <section className="main_category_products">
                    <header className="main_category_products_header">
                        <h1>Nome da categoria:</h1>
                        <form>
                            <p>Ordenar por:</p>
                            <select>
                                <option>Mais vendidos</option>
                                <option>Ofertas especiais</option>
                                <option>Lançamentos</option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                            </select>
                        </form>
                    </header>

                    <div className="main_category_products_content">
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/01.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/02.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/03.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
                        <article className="pdt_gallery_item flex-2">
                            <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/04.jpg" /></a>
                            <header className="pdt_gallery_item_desc">
                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                                <div className="pdt_gallery_item_desc_price">
                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                </div>
                                <p>2x R$ 29,95</p>
                            </header>
                        </article>
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
                    </div>

                    <nav className="main_category_products_paginator">
                        <a className="radius transition active" href="#">1</a>
                        <a className="radius transition" href="#">2</a>
                        <a className="radius transition" href="#">3</a>
                        <a className="radius transition" href="#">4</a>
                        <a className="radius transition" href="#">5</a>
                    </nav>
                </section>
                <aside className="main_category_sidebar">
                    <h2 className="main_category_sidebar_title">Filtrar resultados:</h2>

                    <nav className="main_category_sidebar_widget">
                        <h3 className="main_category_sidebar_widget_title">Menu de filtro:</h3>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius active" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                    </nav>
                    <nav className="main_category_sidebar_widget">
                        <h3 className="main_category_sidebar_widget_title">Menu de filtro:</h3>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius active" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                    </nav>
                    <nav className="main_category_sidebar_widget">
                        <h3 className="main_category_sidebar_widget_title">Menu de filtro:</h3>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius active" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                        <a className="transition radius" href="#" title="">Filtro (tamanho/cor/etc)</a>
                    </nav>

                </aside>
            </div>
        </main>
    );
}

export default Category;