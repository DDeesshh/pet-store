import React from "react";

const Home = () => {
    return (

        <main className="container mt-4">

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/carusel_1.svg" className="d-block w-100" alt="background"></img>

                        <div className="carousel-caption text-start text-white">
                            <div className="carousel-background p-5">
                                <h1>Lorem ipsum dolor sit amet consectetur. It Aliquet nunc nulla.</h1>
                                <h3 className="pt-3">Scelerisque massa quam scelerisque aliquet varius enim porttitor quis
                                    sapien.</h3>
                                <a href="#" className="nav-link"><button className="carusel-btn mt-3">Заказать звонок</button></a>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src="/img/carusel_2.svg" className="d-block w-100" alt="background"></img>

                        <div className="carousel-caption text-start text-white">
                            <div className="carousel-background p-5">
                                <h1>Lorem ipsum dolor sit amet consectetur. It Aliquet nunc nulla.</h1>
                                <h3 className="pt-3">Scelerisque massa quam scelerisque aliquet varius enim porttitor quis
                                    sapien.</h3>
                                <a href="#" className="nav-link"><button className="carusel-btn mt-3">Заказать звонок</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/carusel_3.svg" className="d-block w-100" alt="background"></img>

                        <div className="carousel-caption text-start text-white">
                            <div className="carousel-background p-5">
                                <h1>Lorem ipsum dolor sit amet consectetur. It Aliquet nunc nulla.</h1>
                                <h3 className="pt-3">Scelerisque massa quam scelerisque aliquet varius enim porttitor quis
                                    sapien.</h3>
                                <a href="#" className="nav-link"><button className="carusel-btn mt-3">Заказать звонок</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>

        </main>

    );
};

export default Home;