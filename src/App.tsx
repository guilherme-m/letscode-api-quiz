import './App.css'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import { PaginaInicial } from './components/PaginaInicial'
import { Quiz } from './components/Quiz'
import { useState } from 'react'

function App() {

  const [dificuludade, setDificuldade] = useState()
  const [numeroDeQuestoes, setNumeroDeQuestoes] = useState()


  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={
          <PaginaInicial
            setDificuldade={setDificuldade}
            setNumeroDeQuestoes={setNumeroDeQuestoes}
          />
        } />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App
