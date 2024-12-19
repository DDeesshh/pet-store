// подключение библиотек React и react-router-dom

import React from 'react'; // для создания пользовательских интерфейсов
import { Link } from 'react-router-dom'; // для создания ссылок

// компонент для описания структуры нашего footer
const Footer = () => {
    return ( // return для возвращения визуального результата
        <footer className="mt-5">
            <hr />
            <div className="container pt-5 text-black">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 footer-left pb-3">
                        <Link className="navbar-brand" to="/">
                            <img src="/img/logo.svg" alt="Логотип" />
                        </Link>
                        <p>petippional.com©2024</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-middle pb-3">
                        <h2>Страницы</h2>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Товары</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/payment">Оплата</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-right">
                        <h2>Контакты</h2>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="https://maps.app.goo.gl/bdFfmePM3C7SRuc37" className="nav-link">Адрес</a>
                            </li>
                            <li className="nav-item">
                                <a href="mailto:pet@ippional.ru" className="nav-link">Почта</a>
                            </li>
                            <li className="nav-item">
                                <a href="tel:+7 (923) 544 85-90" className="nav-link">Телефон</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// возможность импортации и использования файла
export default Footer;
