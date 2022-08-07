import React from 'react';
import art from '../pages/components/img/12.jpg';
import s from './style.module.css';
import nike from '../pages/components/img/13.jpg';
import hudi from '../pages/components/img/14.jpg';
import name from '../pages/components/img/15.jpg';
import collection from '../pages/components/img/4.jpg';

const CardToCategory = () => {
  return (
    <div style={{ marginTop: 90 }}>
      <div className='row'>
        <div className='col-4'>
          <div className={s.fade}>
            <div class="card mb-3 shadow">
              <img src={art} class="card-img-top" style={{ width: 300, marginLeft: 50 }} />
              <div class="card-body">
                <h5 class="card-title text-center">Исскуство</h5>
              </div>
            </div>
          </div>
          <div className={s.fade}>
            <div class="card mb-3 shadow">
              <img src={name} class="card-img-top" style={{ width: 300, marginLeft: 55 }} />
              <div class="card-body">
                <h5 class="card-title text-center">Персональные имена</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className={s.fade}>
            <div class="card mb-3 shadow">
              <img src={nike} class="card-img-top" alt="..." style={{ width: 300, marginLeft: 55 }} />
              <div class="card-body">
                <h5 class="card-title text-center">Вещи партнёров</h5>
              </div>
            </div>
          </div>
          <div className={s.fade}>
            <div class="card mb-3 shadow">
              <img src={collection} class="card-img-top" alt="..." style={{ width: 225, marginLeft: 85 }} />
              <div class="card-body">
                <h5 class="card-title text-center">Коллекционные вещи</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className={s.fade}>
            <div class="card mb-3 shadow">
              <img src={hudi} class="card-img-top" style={{ width: 300, marginLeft: 55 }} />
              <div class="card-body">
                <h5 class="card-title text-center">Абстракционизм</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default CardToCategory;
