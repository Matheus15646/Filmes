import React, { useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [novoFilme, setNovoFilme] = useState('');
  const [editando, setEditando] = useState(null);
  const [filmeEditado, setFilmeEditado] = useState('');

  // Função para adicionar um novo filme
  const adicionarFilme = () => {
    if (novoFilme.trim()) {
      setFilmes([...filmes, novoFilme]);
      setNovoFilme('');
    }
  };

  // Função para remover um filme
  const removerFilme = (index) => {
    const novosFilmes = filmes.filter((_, i) => i !== index);
    setFilmes(novosFilmes);
  };

  // Função para iniciar a edição de um filme
  const iniciarEdicao = (index) => {
    setEditando(index);
    setFilmeEditado(filmes[index]);
  };

  // Função para salvar o filme editado
  const salvarFilmeEditado = () => {
    const novosFilmes = [...filmes];
    novosFilmes[editando] = filmeEditado;
    setFilmes(novosFilmes);
    setEditando(null);
    setFilmeEditado('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Minha Lista de Filmes</h1>
      <input
        type="text"
        value={novoFilme}
        onChange={(e) => setNovoFilme(e.target.value)}
        placeholder="Digite o nome de um filme"
      />
      <button onClick={adicionarFilme}>Adicionar</button>
      
      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>
            {editando === index ? (
              <>
                <input
                  type="text"
                  value={filmeEditado}
                  onChange={(e) => setFilmeEditado(e.target.value)}
                />
                <button onClick={salvarFilmeEditado}>Salvar</button>
              </>
            ) : (
              <>
                {filme}
                <button onClick={() => iniciarEdicao(index)}>Editar</button>
                <button onClick={() => removerFilme(index)}>Remover</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
