import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {

      navigate('/');
    }
  }, [navigate]);

  const handleCadastro = () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
    } else {
      localStorage.setItem('user', username); 
      alert('Cadastro realizado com sucesso!');
      navigate('/login'); 
    }
  };

  return (
    <div className="cadastro">
      <h3>Criar Conta</h3>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleCadastro}>Criar Conta</button>
    </div>
  );
}
