import React, { useEffect } from 'react';

const Index = () => {

    return (
        <React.Fragment>
            <main className="main_content">
                <div className="main_content_slide j_slide">
                    <a className="j_slide_item" href="#"><img src="/img/uploads/featured-01.jpg" /></a>
                    <a className="j_slide_item" href="#"><img src="/img/uploads/featured-02.jpg" /></a>
                    <a className="j_slide_item" href="#"><img src="/img/uploads/featured-03.jpg" /></a>
                    <div className="j_slide_nav"><span class="rounded transition"></span><span className="rounded transition"></span>
                    </div>
                </div>

                <section className="pdt_gallery">
                    <div className="container">
                        <header className="main_content_header">
                            <h1 className="main_content_header_title">Ofertas da semana:</h1>
                        </header>

                        <div className="flex">
                            <div className="pdt_gallery_list pdt_gallery_featured ">
                                <article className="pdt_gallery_item flex-2">
                                    <a href="#"><img src="/img/uploads/products/06.jpg" alt="" /></a>
                                    <header className="pdt_gallery_item_desc">
                                        <h2 className="pdt_gallery_item_desc_title"></h2>
                                        <div className="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                        </div>
                                        <p>2X R$ 19,95</p>
                                    </header>
                                </article>
                            </div>
                            <div className="pdt_gallery_list flex">

                                <article className="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="/img/uploads/products/07.jpg" /></a>
                                    <header className="pdt_gallery_item_desc">
                                        <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div className="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article className="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="/img/uploads/products/08.jpg" /></a>
                                    <header className="pdt_gallery_item_desc">
                                        <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div className="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article className="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="/img/uploads/products/09.jpg" /></a>
                                    <header className="pdt_gallery_item_desc">
                                        <h2 className="pdt_gallery_item_desc_title"><a class="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div className="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article className="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="/img/uploads/products/10.jpg" /></a>
                                    <header className="pdt_gallery_item_desc">
                                        <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div className="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>

                            </div>
                        </div>


                        <div className="pdt_gallery_normalize">
                            <img className="pdt_gallery_item pdt_gallery_banner" src="/img/uploads/featured-02.jpg" />
                        </div>

                        <div className="pdt_gallery_normalize flex flex-2">
                            <article className="pdt_gallery_item flex-2">
                                <a href="#"><img src="/img/uploads/products/06.jpg" alt="" /></a>
                                <header className="pdt_gallery_item_desc">
                                    <h2 className="pdt_gallery_item_desc_title"></h2>
                                    <div className="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article className="pdt_gallery_item flex-2">
                                <a href="#"><img src="/img/uploads/products/06.jpg" alt="" /></a>
                                <header className="pdt_gallery_item_desc">
                                    <h2 className="pdt_gallery_item_desc_title"></h2>
                                    <div className="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article className="pdt_gallery_item flex-2">
                                <a href="#"><img src="/img/uploads/products/06.jpg" alt="" /></a>
                                <header className="pdt_gallery_item_desc">
                                    <h2 className="pdt_gallery_item_desc_title"></h2>
                                    <div className="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article className="pdt_gallery_item flex-2">
                                <a href="#"><img src="/img/uploads/products/06.jpg" alt="" /></a>
                                <header className="pdt_gallery_item_desc">
                                    <h2 className="pdt_gallery_item_desc_title"></h2>
                                    <div className="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="pdt_gallery pdt_select">
                    <div className="container">
                        <header className="pdt_select_header">
                            <h1><span className="j_tabs_nav transition radius">Eles</span><span
                                className="j_tabs_nav transition radius">Elas</span></h1>
                        </header>
                        <div className="j_tabs">
                            <div className="j_tabs_item">
                                <div className="flex">
                                    <div className="pdt_gallery_list pdt_gallery_featured">
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/12.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                    <div className="pdt_gallery_list flex">

                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/11.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/11.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/13.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/14.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <div className="j_tabs_item">
                                <div className="flex">
                                    <div className="pdt_gallery_list pdt_gallery_featured">
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/09.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                    <div className="pdt_gallery_list flex">

                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/09.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/07.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a className="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="/img/uploads/products/05.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="blog_gallery">
                    <div className="container">
                        <header className="main_content_header">
                            <h1 className="main_content_header_title">Blog</h1>
                        </header>

                        <div className="flex">

                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/03.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/04.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/05.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/04.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/03.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="/img/uploads/blog/02.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>


                        </div>
                    </div>
                </section>


            </main>
        </React.Fragment>
    );
}

export default Index;