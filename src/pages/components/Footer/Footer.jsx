import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../style.module.css';

const Footer = () => {
  return (
    <div>
       <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
            <div className="container py-4 py-md-5 px-4 px-md-3">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none footer-brand" href="/" aria-label="Bootstrap">
                    <span className="fs-5">OpenStore kriptomarket</span>
                  </a>
                  <ul className="list-unstyled small text-muted">
                    <li className="mb-2">Разработано и создано с любовью для всех любителей криптовалюты <a href="/docs/5.1/about/team/">командой OpenStore</a> с помощью <a href="https://github.com/twbs/bootstrap/graphs/contributors" rel="nofollow noopener" target="_blank">наших дизайнеров и программистов</a>.</li>
                    <li className="mb-2">Платформа запатентована в соответствии со <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">всеми законами РФ </a></li>
                    <li className="mb-2">Актуальная версия v1.1.1.</li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                  <h5>Ссылки</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/">Главная</a></li>
                    <li className="mb-2"><a href="/docs/5.1/">Помощь</a></li>
                    <li className="mb-2"><a href="/docs/5.1/examples/">Nike</a></li>
                    <li className="mb-2"><a href="https://opencollective.com/bootstrap" rel="nofollow noopener" target="_blank">Темы</a></li>
                    <li className="mb-2"><a href="https://blog.getbootstrap.com/" rel="nofollow noopener" target="_blank">Блог</a></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 mb-3">
                  <h5>Руководство</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/docs/5.1/getting-started/">Начало работы</a></li>
                    <li className="mb-2"><a href="/docs/5.1/examples/starter-template/">Стартовый шаблон</a></li>
                    <li className="mb-2"><a href="/docs/5.1/getting-started/webpack/">Webpack</a></li>
                    <li className="mb-2"><a href="/docs/5.1/getting-started/parcel/">Parcel</a></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 mb-3">
                  <h5>Сообщество</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" rel="nofollow noopener" target="_blank">Binance</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" rel="nofollow noopener" target="_blank">Discussions</a></li>
                    <li className="mb-2"><a href="https://github.com/sponsors/twbs" rel="nofollow noopener" target="_blank">Corporate sponsors</a></li>
                    <li className="mb-2"><a href="https://opencollective.com/bootstrap" rel="nofollow noopener" target="_blank">Open Collective</a></li>
                    <li className="mb-2"><a href="https://bootstrap-slack.herokuapp.com/" rel="nofollow noopener" target="_blank">Slack</a></li>
                    <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" rel="nofollow noopener" target="_blank">Stack Overflow</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
    </div>
  )
}

export default Footer;