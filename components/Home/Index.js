import React, { useEffect } from 'react';

const Index = () => {

    return (
        <React.Fragment>
            <main class="main_content">
                <div class="main_content_slide j_slide">
                    <a class="j_slide_item" href="#"><img src="./public/img/uploads/featured-01.jpg" /></a>
                    <a class="j_slide_item" href="#"><img src="./public/img/uploads/featured-02.jpg" /></a>
                    <a class="j_slide_item" href="#"><img src="./public/img/uploads/featured-03.jpg" /></a>
                    <div class="j_slide_nav"><span class="rounded transition"></span><span class="rounded transition"></span>
                    </div>
                </div>

                <section class="pdt_gallery">
                    <div class="container">
                        <header class="main_content_header">
                            <h1 class="main_content_header_title">Ofertas da semana:</h1>
                        </header>

                        <div class="flex">
                            <div class="pdt_gallery_list pdt_gallery_featured ">
                                <article class="pdt_gallery_item flex-2">
                                    <a href="#"><img src="./public/img/uploads/products/06.jpg" alt="" /></a>
                                    <header class="pdt_gallery_item_desc">
                                        <h2 class="pdt_gallery_item_desc_title"></h2>
                                        <div class="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                        </div>
                                        <p>2X R$ 19,95</p>
                                    </header>
                                </article>
                            </div>
                            <div class="pdt_gallery_list flex">

                                <article class="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="./public/img/uploads/products/07.jpg" /></a>
                                    <header class="pdt_gallery_item_desc">
                                        <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div class="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article class="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="./public/img/uploads/products/08.jpg" /></a>
                                    <header class="pdt_gallery_item_desc">
                                        <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div class="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article class="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="./public/img/uploads/products/09.jpg" /></a>
                                    <header class="pdt_gallery_item_desc">
                                        <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div class="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>
                                <article class="pdt_gallery_item flex-2">
                                    <a href="#" title=""><img alt="" title="" src="./public/img/uploads/products/10.jpg" /></a>
                                    <header class="pdt_gallery_item_desc">
                                        <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#" title="">Calça
                                        Moletom Confort Mama Latina</a></h2>
                                        <div class="pdt_gallery_item_desc_price">
                                            <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                        </div>
                                        <p>2x R$ 29,95</p>
                                    </header>
                                </article>

                            </div>
                        </div>


                        <div class="pdt_gallery_normalize">
                            <img class="pdt_gallery_item pdt_gallery_banner" src="./public/img/uploads/featured-02.jpg" />
                        </div>

                        <div class="pdt_gallery_normalize flex flex-2">
                            <article class="pdt_gallery_item flex-2">
                                <a href="#"><img src="./public/img/uploads/products/06.jpg" alt="" /></a>
                                <header class="pdt_gallery_item_desc">
                                    <h2 class="pdt_gallery_item_desc_title"></h2>
                                    <div class="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article class="pdt_gallery_item flex-2">
                                <a href="#"><img src="./public/img/uploads/products/06.jpg" alt="" /></a>
                                <header class="pdt_gallery_item_desc">
                                    <h2 class="pdt_gallery_item_desc_title"></h2>
                                    <div class="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article class="pdt_gallery_item flex-2">
                                <a href="#"><img src="./public/img/uploads/products/06.jpg" alt="" /></a>
                                <header class="pdt_gallery_item_desc">
                                    <h2 class="pdt_gallery_item_desc_title"></h2>
                                    <div class="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                            <article class="pdt_gallery_item flex-2">
                                <a href="#"><img src="./public/img/uploads/products/06.jpg" alt="" /></a>
                                <header class="pdt_gallery_item_desc">
                                    <h2 class="pdt_gallery_item_desc_title"></h2>
                                    <div class="pdt_gallery_item_desc_price">
                                        <p><b>R$ 59,90</b><span>R$ 99,99</span></p>
                                    </div>
                                    <p>2X R$ 19,95</p>
                                </header>
                            </article>
                        </div>
                    </div>
                </section>

                <section class="pdt_gallery pdt_select">
                    <div class="container">
                        <header class="pdt_select_header">
                            <h1><span class="j_tabs_nav transition radius">Eles</span><span
                                class="j_tabs_nav transition radius">Elas</span></h1>
                        </header>
                        <div class="j_tabs">
                            <div class="j_tabs_item">
                                <div class="flex">
                                    <div class="pdt_gallery_list pdt_gallery_featured">
                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/12.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                    <div class="pdt_gallery_list flex">

                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/11.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/11.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/13.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/14.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <div class="j_tabs_item">
                                <div class="flex">
                                    <div class="pdt_gallery_list pdt_gallery_featured">
                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/09.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                    </div>
                                    <div class="pdt_gallery_list flex">

                                        <article class="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/09.jpg" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./" /></a>
                                            <header class="pdt_gallery_item_desc">
                                                <h2 class="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div class="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/07.jpg" /></a>
                                            <header className="pdt_gallery_item_desc">
                                                <h2 className="pdt_gallery_item_desc_title"><a class="transition" href="#"
                                                    title="">Calça Moletom Confort Mama Latina</a></h2>
                                                <div className="pdt_gallery_item_desc_price">
                                                    <p><b>R$ 59,90</b> <span>R$ 99,90</span></p>
                                                </div>
                                                <p>2x R$ 29,95</p>
                                            </header>
                                        </article>
                                        <article className="pdt_gallery_item flex-2">
                                            <a href="#" title=""><img alt="" title=""
                                                src="./public/img/uploads/products/05.jpg" /></a>
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
                                    <img alt="" title="" src="./public/img/uploads/blog/03.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="./public/img/uploads/blog/04.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="./public/img/uploads/blog/05.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="./public/img/uploads/blog/04.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="./public/img/uploads/blog/03.jpg" />
                                </a>
                                <header>
                                    <h2><a className="transition" title="" href="">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</a></h2>
                                </header>
                            </article>
                            <article className="blog_gallery_item transition flex-3">
                                <a href="" title="">
                                    <img alt="" title="" src="./public/img/uploads/blog/02.jpg" />
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
            <script src="/jquery.js"></script>
            <script src="/scripts.js"></script>
            <script src="/css/themes/script.js"></script>
        </React.Fragment>
    );
}

export default Index;