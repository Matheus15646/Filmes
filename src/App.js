import React, { useState } from 'react';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [novoFilme, setNovoFilme] = useState('');
  const [editando, setEditando] = useState(null);
  const [filmeEditado, setFilmeEditado] = useState('');
  const [mensagem, setMensagem] = useState(''); // Estado para a mensagem

  const removerFilme = (index) => {
    const novosFilmes = filmes.filter((_, i) => i !== index);
    setFilmes(novosFilmes);
  };

  const iniciarEdicao = (index) => {
    setEditando(index);
    setFilmeEditado(filmes[index]);
  };

  const salvarFilmeEditado = () => {
    const novosFilmes = [...filmes];
    novosFilmes[editando] = filmeEditado;
    setFilmes(novosFilmes);
    setEditando(null);
    setFilmeEditado('');
    setMensagem('Filme alterado com sucesso!'); // Define a mensagem de sucesso
    console.log(`Filme alterado: ${filmeEditado}`);
    
    // Limpa a mensagem após 3 segundos
    setTimeout(() => {
      setMensagem('');
    }, 3000);
  };

  const enviarFilme = () => {
    if (novoFilme.trim()) {
      setFilmes([...filmes, novoFilme]);
      setNovoFilme('');
      setMensagem('Filme enviado com sucesso!'); // Define a mensagem
      console.log(`Filme enviado: ${novoFilme}`);
      
      // Limpa a mensagem após 3 segundos
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Lista Filmes</div>
        <ul>
          <li>Matheus Pereira de Araújo</li>
          <li>Matrícula: 23214290074</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Minha Lista de Filmes</h1>
      </header>

      <div className="formulario">
        <input
          type="text"
          value={novoFilme}
          onChange={(e) => setNovoFilme(e.target.value)}
          placeholder="Digite o nome de um filme"
        />
        <button onClick={enviarFilme}>Enviar</button> {/* Botão de Enviar */}
      </div>

      {mensagem && <div className="mensagem">{mensagem}</div>} {/* Mensagem de sucesso */}

      <div className="filmes-lista">
        {filmes.map((filme, index) => (
          <div className="filme-card" key={index}>
            {editando === index ? (
              <>
                <input
                  type="text"
                  value={filmeEditado}
                  onChange={(e) => setFilmeEditado(e.target.value)}
                  placeholder="Editar filme"
                />
                <button onClick={salvarFilmeEditado}>Salvar</button>
              </>
            ) : (
              <>
                <span className="filme-titulo">{filme}</span>
                <div className="acoes">
                  <button onClick={() => iniciarEdicao(index)}>Editar</button>
                  <button onClick={() => removerFilme(index)}>Remover</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
