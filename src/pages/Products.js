import React, { useEffect, useState } from 'react';
import supabase from "../supabaseClient";
import { Link } from 'react-router-dom'; // для создания ссылок, которые позволят переходить по ссылкам в веб-приложении

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase // к чему будет подключаться асинхронный метод
                .from('Products') // к какой именно таблице подключаемся
                .select('*'); // какие данные необходимо выводить из таблциы

            if (error) {
                console.error("Ошибка получения данных: ", error);
            } else {
                setProducts(data);
                // console.log(data);
            }
        };

        fetchProducts(); //вызвали
    }, []);

    return (

        <main className="container mt-4">
            <h1 className="text-center">Наши товары</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiselit sed do<br></br>
                tempor incididunt ut labore и dolore magna aliqua ut</p>

            <div className="row d-flex justify-content-evenly">
                {products.map((product) => (
                    <div className="card card-products mt-4" key={product.id}>
                        <Link className="nav-link" to={`/product/${product.id}`}>
                            <a href={product.imageUrlAll} target="_blank" rel="noopener noreferrer">
                                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                            </a>
                        </Link>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-description">{product.description}</p>
                            <div className="card-wrapp d-flex justify-content-between align-items-baseline">
                                <p className="card-price fw-semibold">{product.price}₽</p>
                                <p className="card-reviews">{product.reviews} отзывов</p>
                            </div>
                            <a href="#"><button className="card-btn">Заказать</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
};

export default Products;