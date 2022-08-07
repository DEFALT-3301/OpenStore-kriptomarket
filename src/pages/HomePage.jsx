import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../pages/store/slices/userSlice';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Karusel from '../components/Karusel';
import CardCollection from '../components/CardCollection';
import Trands from '../components/Trands';
import KaruselTwo from '../components/KaruselTwo';
import NftInfo from '../components/NftInfo';
import CardTwo from '../components/CardTwo';
import CardToCategory from '../components/CardToCategory';
import s from './style.module.css';
import logo from './components/img/1.jpg'


const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: 'white', marginTop: 85 }}>
        <div className={s.oneBac}>
          <div className='container overflow-hidden'>
            <>
              <div className='row'>
                <div className='col-7'>
                  <h1>Создавайте, находите и продавайте<br />крипто-одежду.</h1>
                  <p style={{ fontSize: 20 }}>OpenStore kriptomarket - первая платформа по продажам<br />крипто-одежды в России.</p>
                  <button className='btn btn-outline-success'>Исследуйте крипто-одежду</button>
                  <button className='btn btn-outline-primary' style={{ marginLeft: 10 }}>Создавайте</button>
                </div>
                <div className='col-5'>
                    <img src={logo} className="card-img-top" />
                </div>
              </div>
            </>
            <div className='row'>
              <div className='col-12'>
                <div className="card shadow" style={{ marginTop: 200, borderRadius: 20, height: 100 }}>
                  <div className="card-body d-flex">
                    <h4 className="card-title" style={{ marginTop: 20, borderRadius: 3 }}>Изучите нововедения на OpenStore kriptomarket.</h4>
                    <button className='btn btn-primary' style={{ marginLeft: 600, height: 50, marginTop: 8 }}>Примеры</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <h2 style={{ textAlign: 'center', marginTop: 140 }}>Лучшие коллекции крипто-одежды</h2>
                <Karusel />
              </div>
            </div>
            <div className='row gy-2'>
            <div className='col-12' >
              <h2 style={{ textAlign: 'center', marginTop: 140 }}>Топ лучших покупателей <br />за последнией месяц.</h2>
            </div>
            </div>
            <div className='row'>
              <CardCollection />
            </div>
            <div className='row d-flex'>
              <Trands />
              <div className='col-12'>
                <KaruselTwo />
              </div>
            </div>
            <div className='row'>
              <NftInfo />
            </div>
            <div className='row'>
              <h1 style={{ textAlign: 'center', marginTop: 200 }}>Что вам поможет в начале</h1>
              <CardTwo />
            </div>
            <div className='row'>
              <h1 style={{ textAlign: 'center', marginTop: 200 }}>Поиск по категориям</h1>
              <CardToCategory />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default HomePage
