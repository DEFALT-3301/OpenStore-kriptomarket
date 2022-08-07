import React from 'react';
import u from '../pages/components/img/10.gif';
import s from './style.module.css';
import logo from '../pages/components/img/11.jpg';

const CardTwo = () => {
  return (
    <div className='d-flex' style={{ marginTop: 100 }}>
      <div className='col-4 p-1'>
        <div className={s.faded}>
          <a href="#">
            <div className="card shadow" >
              <div className="card-body" style={{ height: 400 }}>
                <img src={u} style={{ width: 350, marginLeft: 20 }} />
                <h4 className="card-title text-center">Как настроить криптокошелёк?</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='col-4 p-1'>
        <div className={s.faded}>
          <a href="#">
            <div className="card shadow" style={{ height: 400 }}>
              <div className="card-body">
                <img src={logo} style={{ width: 350, marginLeft: 15 }} />
                <h4 className="card-title text-center">Как пополнить кошелёк с помощью matick?</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='col-4 p-1'>
        <div className={s.faded}>
          <a href="#">
            <div className="card shadow" style={{ height: 400 }}>
              <div className="card-body">
                <img src='https://3dnews.ru/assets/external/illustrations/2017/10/12/959883/sm.2_pack_ledger_nano_s_with_screen.750.jpg' style={{ width: 250, marginLeft: 60 }} />
                <h5 className="card-title text-center">Как подобрать крипто-вещи<br /> под свой вкус?</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
