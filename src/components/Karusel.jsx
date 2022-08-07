import React from 'react';
import i from '../pages/components/img/2.jpg';
import h from '../pages/components/img/3.jpg';
import hudi from '../pages/components/img/4.jpg';
import eth from '../pages/components/img/5.png';
import s from './style.module.css';

const Karusel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active d-flex">
            <button className={s.btnCard}>
              <div className={s.fade}>
                <div className="card text-bg-dark shadow" style={{ marginTop: 50, borderRadius: 20, height: 620, width: 380, marginLeft: 60, marginBottom: 50 }}>
                  <img src={h} className="card-img-top" alt="..." style={{ width: 320, marginTop: 70, marginLeft: 30 }} />
                  <div className="card-img-overlay">
                    <h1 className="card-title text-center">FireDall</h1>
                  </div>
                  <h4>
                    <img src={eth} style={{ width: 18, marginLeft: 20 }} /> 0.076
                  </h4>
                </div>
              </div>
            </button>
            <button className={s.btnCard}>
              <div className={s.fade}>
                <div className="card text-bg-dark shadow" style={{ marginTop: 50, borderRadius: 20, height: 620, width: 380, marginLeft: 14, marginBottom: 50 }}>
                  <img src={i} className="card-img-top" alt="..." style={{ width: 320, marginTop: 70, marginLeft: 30 }} />
                  <div className="card-img-overlay">
                    <h1 className="card-title text-center">StarScreen</h1>
                  </div>
                  <h4>
                    <img src={eth} style={{ width: 18, marginLeft: 20 }} /> 0.094
                  </h4>
                </div>
              </div>
            </button>
            <button className={s.btnCard}>
              <div className={s.fade}>
                <div className="card text-bg-dark shadow" style={{ marginTop: 50, borderRadius: 20, height: 620, width: 380, marginLeft: 14, marginBottom: 50 }}>
                  <img src={hudi} className="card-img-top" alt="..." style={{ width: 320, marginTop: 90, marginLeft: 30 }} />
                  <div className="card-img-overlay">
                    <h1 className="card-title text-center">HudiFull</h1>
                  </div>
                  <h4 style={{ marginTop: 55 }}>
                    <img src={eth} style={{ width: 18, marginLeft: 20 }} /> 0.78
                  </h4>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Karusel;
