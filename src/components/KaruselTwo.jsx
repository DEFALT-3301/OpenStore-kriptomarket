import React from 'react';
import kepka from '../pages/components/img/7.jpg';
import d from './style.module.css';
import hudi from '../pages/components/img/8.jpg';
import iii from '../pages/components/img/9.jpg';


const KaruselTwo = () => {
  return (
    <>
      <div className='d-flex' style={{ marginTop: 30 }}>
        <div className='col-4 p-2'>
          <button className={d.btnCard}>
            <div className={d.fades}>
              <div class="card shadow" style={{ height: 500, marginLeft: 5 }}>
                <img src={iii} class="card-img-top" />
                <div class="card-body">
                  <h3 class="card-title text-center">Исскуство</h3>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className='col-4 p-2'>
          <button className={d.btnCard}>
            <div className={d.fades}>
              <div class="card shadow text-bg-dark" style={{ height: 500,  width: 406  }}>
                <img src={kepka} class="card-img-top" style={{ marginTop: 50, marginLeft: 17, width: 370 }} />
                <div class="card-body">
                  <h3 class="card-title text-center" style={{ marginTop: 100 }}>Абстракционизм</h3>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className='col-4 p-2'>
          <button className={d.btnCard}>
            <div className={d.fades}>
              <div class="card shadow" style={{ height: 500,}}>
                <img src={hudi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title text-center">Персональные имена</h3>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default KaruselTwo;
