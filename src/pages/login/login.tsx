import React, { useState } from 'react';
import './login.css';  

interface UserCredentials {
  username: string;
  password: string;
  confirmPassword?: string;
}

export default function Login(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleLogin = (): void => {
    if (userCredentials.username === 'usuario' && userCredentials.password === 'senha') {
      alert('Login bem-sucedido!');
    } else {
      setError('Usuário ou senha incorretos!');
    }
  };

  const handleSignup = (): void => {
    if (userCredentials.password !== userCredentials.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    alert('Cadastro bem-sucedido!');
  };

  return (
    <div className="login-cadastro">
      <div className="login-container">
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>

        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            value={userCredentials.username}
            placeholder="Usuário"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            value={userCredentials.password}
            placeholder="Senha"
            onChange={handleInputChange}
          />
        </div>

        {!isLogin && (
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="confirmPassword"
              value={userCredentials.confirmPassword || ''}
              placeholder="Confirmar Senha"
              onChange={handleInputChange}
            />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <button onClick={isLogin ? handleLogin : handleSignup}>
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </button>

        <p>
          {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-form">
            {isLogin ? 'Criar conta' : 'Ir para login'}
          </span>
        </p>
      </div>
    </div>
  );
}
