import { SignUp } from '../components/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Регистрация</h1>
            <SignUp />
            <a href="/login" class="btn btn-outline-danger" style={{width: 400, marginLeft: 762, marginTop: 17 }} role="button" aria-pressed="true">
                Уже есть аккаунт?
            </a>
        </div>
    )
}

export default RegisterPage