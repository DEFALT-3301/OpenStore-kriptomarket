import { useState } from 'react';
import Footer from '../pages/components/Footer/Footer';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='container'>
      <div className="mb-3" style={{ width: 400, marginLeft: 450, marginTop: 200 }}>
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </div>
      <div className="mb-3" style={{ width: 400, marginLeft: 450 }}>
        <label htmlFor="exampleInputEmail1" className="form-label" >Password</label>
        <input
          className="form-control"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </div>

      <button
        onClick={() => handleClick(email, pass)}
        className="btn btn-outline-primary"
        style={{ width: 400, marginLeft: 450 }}
      >
        {title}
      </button>
    </div>
  )
}

export { Form }