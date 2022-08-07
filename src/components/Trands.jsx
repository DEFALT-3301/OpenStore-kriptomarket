import React from 'react';

const Trands = () => {
  return (
    <div className='d-flex'>
      <div style={{marginTop: 100, marginLeft: 500, fontSize: 30, fontWeight: 'bold'}}>
        В тренде
      </div>

      <ul className="navbar-nav" style={{marginLeft: 7}}>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 30, fontWeight: 'bold', marginTop: 93}}>
            Все категории
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Все</a></li>
            <li><a className="dropdown-item" href="#">Абстракционизм</a></li>
            <li><a className="dropdown-item" href="#">Коллекционные принты</a></li>
            <li><a className="dropdown-item" href="#">Персональные имена</a></li>
            <li><a className="dropdown-item" href="#">Спорт</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Trands;
