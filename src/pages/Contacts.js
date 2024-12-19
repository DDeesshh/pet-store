import React from "react";

const Contacts = () => {
    return (

        <main className="container mt-4">

        <h1 className="text-center">Свяжитесь с нами!</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiselit sed do<br></br> tempor incididunt ut
            labore et dolore magna aliqua ut</p>

        <div className="d-flex justify-content-center mt-4">
            <form className="w-50 row form-background p-5">
                <div className="mb-3 col-lg-6 col-md-12">
                    <label htmlFor="exampleInputName1" className="form-label">
                        <h4 className="fw-semibold">Имя</h4>
                    </label>
                    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="Name"
                        placeholder="Инна"></input>
                </div>
                <div className="mb-3 col-lg-6 col-md-12">
                    <label htmlFor="exampleInputSurname1" className="form-label">
                        <h4 className="fw-semibold">Фамилия</h4>
                    </label>
                    <input type="text" className="form-control" id="exampleInputSurname1" aria-describedby="Surname"
                        placeholder="Иванова"></input>
                </div>
                <div className="mb-3 col-lg-6 col-md-12 pt-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        <h4 className="fw-semibold">Email</h4>
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="E-mail"
                        placeholder="123@mail.com"></input>
                </div>
                <div className="mb-3 col-lg-6 col-md-12 pt-3">
                    <label htmlFor="exampleInputTel1" className="form-label">
                        <h4 className="fw-semibold">Номер телефона</h4>
                    </label>
                    <input type="tel" className="form-control" id="exampleInputTel1" aria-describedby="Tel"
                        placeholder="+123 (456)-78-90"></input>
                </div>
                <div className="mb-3 col-lg-12 col-md-12 pt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h4 className="fw-semibold">Оставьте сообщение</h4>
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <a href="#" className="nav-link"><button className="card-btn mt-3">Отправить</button></a>
            </form>
        </div>
    </main>

    );
};

export default Contacts;