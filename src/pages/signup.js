import React, { useState } from 'react';
import '../style/App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  const navigate = useNavigate();

  async function createUser() {
    const user = {
      username: username,
      email: email,
      password : password,
    };
    if (validatePassword(password, confirmPassword)) {
      try {
        const response = await axios.post('http://192.168.0.110:3001/user', user);
        navigate('/login'); 
        
        if (response.status === 201) {
          console.log(response.data);
          alert('Usuário criado com sucesso!');
        } else {
          alert('Erro ao criar.');
        }
      }
      catch (error) {
        console.error('Erro:', error);
        alert('Este usuário já existe.');
      }
    }
    else {
      alert('Erro ao cadastrar usuário.');
    }
  }


  const validatePassword = (password, confirmPassword) => {
    if (password.length < 8) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres.');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError('A senha deve conter pelo menos uma letra maiúscula.');
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('A senha deve conter pelo menos uma letra minúscula.');
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordError('A senha deve conter pelo menos um número.');
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={createUser}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
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
          <button type="submit" className="login-button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
