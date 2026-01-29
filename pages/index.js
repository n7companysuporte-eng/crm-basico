import { useState, useEffect } from 'react'

export default function Home() {
  const [clientes, setClientes] = useState([])
  const [nome, setNome] = useState('')

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('clientes') || '[]')
    setClientes(dados)
  }, [])

  function salvar() {
    const novo = [...clientes, { id: Date.now(), nome }]
    setClientes(novo)
    localStorage.setItem('clientes', JSON.stringify(novo))
    setNome('')
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Controle Interno da Agência</h1>

      <input
        placeholder="Nome do cliente"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />

      <button onClick={salvar} style={{ marginLeft: 10 }}>
        Salvar
      </button>

      <ul>
        {clientes.map(c => (
          <li key={c.id}>{c.nome}</li>
        ))}
      </ul>
    </div>
  )
}
