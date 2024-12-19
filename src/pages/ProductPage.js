import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Импорт useParams для получения параметров URL
import supabase from "../supabaseClient";

const Product = () => {
    const { id } = useParams(); // Получение ID продукта из параметров URL
    const [product, setProduct] = useState(null); // Хранение одного продукта

    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from('Products')
                .select('*')
                .eq('id', id) // Фильтрация по ID
                .single(); // Получение одного продукта

            if (error) {
                console.error("Ошибка получения данных: ", error);
            } else {
                setProduct(data); // Установка полученного продукта
                console.log(data); // Вывод данных
            }
        };

        fetchProduct(); // Вызов функции
    }, [id]); // Выполнение при изменении ID

    if (!product) {
        return <div className='container mt-4 '>
            <div class="d-flex justify-content-center">
                <div class="spinner-grow text-light" role="status">
                    <span class="visually-hidden">Загрузка...</span>
                </div>
            </div>
        </div>
        // Сообщение о загрузке, пока данные не получены
    }

    return (

        <main className="container mt-4">
            <div className='row product-components align-items-center justify-content-evenly mb-5'>
                <div className="card card-product col col-lg-6 col-sm-12">
                    <Link className="nav-link" to="/products">
                        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    </Link>
                </div>

                <div className='card-text col col-lg-6 col-sm-12 mt-sm-5 mt-lg-0'>
                    <h1 className="card-title mb-3">{product.name}</h1>
                    <p className="card-description">{product.description}. {product.descriptionAll}</p>
                    <h2 className="card-price fw-semibold">{product.price}₽</h2>

                    <div className='row card-buttons flex-nowrap align-items-center'>
                        <input type="number" className="form-control" id="exampleInputQuantity1" aria-describedby="Quantity"
                            placeholder="1" min="1" max="20" style={{ width: '20%', height: '40px' }} />
                        <a href="#"><button className="nav-btn" style={{ width: '78%' }}>Положить в корзину</button></a>
                    </div>
                </div>

                <div className='card-description row mt-5 col-xl-6'>
                    <h2 className='pb-2 fw-semibold'>Характеристики</h2>
                    <p className=''>Viverra neque enim quam pellentesque nibh aliquet bibendum sed irnpium
                        potentinium fermentum quisque viverra senectus blade ur malesuada neque habitant elementums auctor duis aliquet quis id.</p>
                    <ul className='ps-4 pt-2'>
                        <li className='mb-2'>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                        <li className='mb-2'>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                        <li className='mb-2'>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                        <li>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                    </ul>
                </div>
            </div>

        </main>
    );
};

export default Product;

