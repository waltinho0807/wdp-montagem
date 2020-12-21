import React from 'react';
import Link from 'next/link';

const RelatedProducts = ({related = []}) => {    
    return(
        <section className="main_product_related">
            <div className="container">
                <header className="main_content_header">
                    <h2 className="main_content_header_title">Produtos relacionados:</h2>
                </header>
    
                <div className="pdt_gallery pdt_gallery_normalize flex">
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/05.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/06.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/07.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/08.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/09.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/10.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/11.jpg"/></a>
                        <header className="pdt_gallery_item_desc">
                            <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="produto" title="">Calça Moletom Confort Mama Latina</a></h2>
                            <div className="pdt_gallery_item_desc_price">
                                <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                            </div>
                            <p>2x R$ 29,95</p>
                        </header>
                    </article>
                    <article className="pdt_gallery_item flex-2">
                        <a href="produto" title=""><img alt="" title="" src="/img/uploads/products/12.jpg"/></a>
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
    );
}

export default RelatedProducts;