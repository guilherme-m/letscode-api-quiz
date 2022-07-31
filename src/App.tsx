import './App.css'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import { PaginaInicial } from './components/PaginaInicial'
import { Quiz } from './components/Quiz'
import { useEffect, useRef, useState } from 'react'

export type PerguntaType = {
  question: string
  correctAnswer: string
  incorrectAnswer: string[]
}

function App() {

  const [dificuldade, setDificuldade] = useState('easy')
  const [numQuestoes, setNumQuestoes] = useState('10')
  
  const [pontos, setPontos] = useState(0)
  
  const [perguntas, setPerguntas] = useState<PerguntaType[]>([])
  
  const [loading, setLoading] = useState(false)
  
  const [idPergunta, setIdPergunta] = useState(0)
  

  useEffect(() => {

    async function getPerguntas() {

      setLoading(true)

      try {
        
        const fetchPerguntas = await fetch(`https://the-trivia-api.com/api/questions?limit=${numQuestoes}&difficulty=${dificuldade}`)
        const perguntas = await fetchPerguntas.json()
        
        setPerguntas(perguntas)
        
      } catch (e) {
        
        console.log(e)
        
      } finally {
        
        setLoading(false)
        
      }

    }
    
    if(idPergunta === 0){
      
      getPerguntas()
    }
    

  }, [dificuldade, numQuestoes])

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={
          <PaginaInicial
            idPergunta={idPergunta}
            setDificuldade={setDificuldade}
            setNumQuestoes={setNumQuestoes}
          />
        } />
        <Route path="/quiz" element={
        <Quiz 
        perguntas={perguntas}
        idPergunta={idPergunta}
        setIdPergunta={setIdPergunta}
        setPontos={setPontos}
        />
        } />

      </Routes>

    </BrowserRouter>

  )

}

export default App
