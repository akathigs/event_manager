import React, { useState } from 'react';
import '../style/App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    try{
      const response = await axios.post('http://192.168.0.110:3001/user/login', data)
      const token = response.data.data.token;
      console.log(token);
      try{
        axios.post('http://192.168.0.110:3001/user/private', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        navigate('/event');
        alert('Login efetuado com sucesso!');
      }
      catch(error){
        console.error('Erro:', error);
        alert('Erro ao logar.');
      }
    }
    catch(error){
      console.error('Erro:', error);
      alert('Erro ao logar.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show Password
            </label>
          </div>
          <button type="submit" className="login-button">SIGN IN</button>
          <div className="login-links">
            <Link to='/signup'>
              <a href='_'>Cadastre-se aqui!</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;