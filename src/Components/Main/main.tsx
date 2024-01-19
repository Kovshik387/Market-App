import "../../App.css"
import cat from '../../assets/images/cat.jpg'


export default function Main() {
    return (
        <main>
            <div className="spacer"></div>
            <div className="newest-product">
                <div className="carousel slide newest-product-content" id="carouselExampleIndicators">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src= {cat} className="newest-product-image" alt="..."/>
                        </div>
                        <div className="carousel-item newest-images">
                            <img src={cat} className="newest-product-image" alt="..."/>
                        </div>
                        <div className="carousel-item newest-images">
                            <img src={cat} className="newest-product-image" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="banner">
                <div className="btn-outline-info"></div>
            </div>

            <div className="images-products">

                <a className="green" href="test">
                    <figure className="image-figure">
                        <img className="image-product" src="../../assets/images/cat.jpg"/>
                            <figcaption className="image-text">Кроссовки</figcaption>
                    </figure>
                </a>

                <a className="green" href="test">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/>
                            <figcaption className="image-text">Ботинки</figcaption>
                    </figure>
                </a>

                <a className="green" href="test">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/>
                            <figcaption className="image-text">Вверхняя одежда</figcaption>
                    </figure>
                </a>

                <a className="green">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/>
                            <figcaption className="image-text">Аксессуары</figcaption>
                    </figure>
                </a>

                <a className="green">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/>
                            <figcaption className="image-text">Сумки</figcaption>
                    </figure>
                </a>

                <a className="green">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/>
                            <figcaption className="image-text">Часы</figcaption>
                    </figure>
                </a>

                <a className="green">
                    <figure className="image-figure">
                        <img className="image-product" src="common/images/cat.jpg"/ >
                            <figcaption className="image-text">Коллекционные</figcaption>
                    </figure>
                </a>

            </div>

            <hr />

            <h1 className="last-product-head">Популярные товары</h1>
            <div id="popular-product" />

        </main>
    )
}