// подключение библиотек React и react-router-dom
import React from 'react'; // для создания пользовательских интерфейсов
import { Link } from 'react-router-dom'; // для создания ссылок, которые позволят переходить по ссылкам в веб-приложении

const Header = () => {
    return (
        <nav className="container navbar navbar-expand-lg mt-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/img/logo.svg" className="img-fluid" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Товары</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payment">Оплата</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                    <Link to="#">
                        <button className="nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Корзина</button>
                    </Link>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content cart-modal">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Ваша корзина</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                <button className="cart-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Оформить заказ</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

// строка экспортирования, чтобы данный файл можно было импортировать в другие страницы и использовать его функции
export default Header;
