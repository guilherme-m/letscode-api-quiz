import { PerguntaType } from "../../App"
import { shuffle } from "../../utils/sortArray"

type PerguntaProps = {
  perguntas: PerguntaType[]
  idPergunta: number
  setIdPergunta: React.Dispatch<React.SetStateAction<number>>
  setPontos: React.Dispatch<React.SetStateAction<number>>
}

export const Pergunta = ({ 
  perguntas,
  idPergunta,
  setIdPergunta,
  setPontos
}: PerguntaProps) => {

  const alternativas = shuffle([
    perguntas[idPergunta].correctAnswer,
    ...perguntas[idPergunta].incorrectAnswer
  ])
  
  return (
    <>
    <section>
      <h2>{idPergunta + 1}. {perguntas[idPergunta].question}</h2>
      {alternativas.map( alternativa => {
        return <button>{alternativa}</button>
      }
      )}
    </section>
    </>
  )
  
}