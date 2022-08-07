import { Login } from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center'}}>Добро пожаловать. Войдите в аккаунт</h2>
      </div>
      <div>
        <Login />
      </div>
      <div>
      <p>
        <a className='btn btn-outline-danger' href='/register' style={{width: 400, marginLeft: 762, marginTop: 17 }}>Нет аккаунта зарегистрируйся
        </a>
      </p>
          <h1></h1>    
      </div>
    </div>
  )
}

export default LoginPage;