import React from 'react';
import { Link } from 'react-router-dom';
import s from '../../style.module.css';

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">OpenStore kriptomarket</Link>
          <form className="d-flex" style={{ width: 500, marginLeft: 400 }}>
            <div className="input-group">
              <div className="input-group" style={{marginTop: 10}}>
                <span className="input-group-text" id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                  width="300"
                />
              </div>
            </div>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"
            style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 200 }}
          >
            <ul className="navbar-nav" >
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Исследуйте
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Бренды партнёров</a></li>
                  <li><a className="dropdown-item" href="#">Исскуство</a></li>
                  <li><a className="dropdown-item" href="#">Коллекционные вещи</a></li>
                  <li><a className="dropdown-item" href="#">Абстракционизм</a></li>
                  <li><a className="dropdown-item" href="#">Персональные имена</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ marginLeft: 20 }}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ресурсы
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Помощь</a></li>
                  <li><a className="dropdown-item" href="#">Найти покупателей</a></li>
                  <li><a className="dropdown-item" href="#">Как завершить сделку удачно?</a></li>
                  <li><a className="dropdown-item" href="#">Топ полезных советов</a></li>
                  <li><a className="dropdown-item" href="#">Партнёры</a></li>
                </ul>
              </li>
              <li className="nav-item" style={{ marginLeft: 20 }}>
                <a className="nav-link active" aria-current="page" href="sale">Стать продавцом</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;