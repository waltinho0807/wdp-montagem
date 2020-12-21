import Link from 'next/link';
import ProductPagination from './ProductPagination';

function ProductList({ products, totalPages }) {
    // console.log(totalPages)

    const mapProductsToItem = (products) => {
        return products.length ? (products.map(product => (

            <article className="pdt_gallery_item flex-2" key={product._id}>
                <Link href="/product/[id]" as={`/product/${product._id}` }>
                    <a href="produto" title=""><img alt="" title="" src={product.mediaUrl} /></a>
                </Link>
                <header className="pdt_gallery_item_desc">
                    <h2 className="pdt_gallery_item_desc_title">
                        <Link href="/product/[id]" as={`/product/${product._id}`} key={product._id}>
                            <a className="transition" href="produto" title="">{product.name}</a>
                        </Link>
                    </h2>
                    <div className="pdt_gallery_item_desc_price">
                        <p><b>R$ {product.price}</b> <span>R$ 99,90</span></p>
                    </div>
                    <p>2x R$ 29,95</p>
                </header>
            </article>

        ))) : (
                <Link href="/products">
                    <a className="ui green fluid card single-products-box">
                        <h1>Not Found!</h1>
                    </a>
                </Link>
            )
    }

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
                        {mapProductsToItem(products)}

                    </div>
                    {totalPages > 1 ? <ProductPagination totalPages={totalPages} /> : null}
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

export default ProductList;
