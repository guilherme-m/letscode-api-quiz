import { Link } from "react-router-dom"
import { PerguntaType } from "../../App"
import { Pergunta } from "../Pergunta"

type QuizProps = {
  idPergunta: number
  setIdPergunta: React.Dispatch<React.SetStateAction<number>>

  perguntas: PerguntaType[]

  setPontos: React.Dispatch<React.SetStateAction<number>>

}

export const Quiz = ({ idPergunta, setIdPergunta, perguntas, setPontos }: QuizProps) => {

  return (
    <>
      <Pergunta
        perguntas={perguntas}
        idPergunta={idPergunta}
        setIdPergunta={setIdPergunta}
        setPontos={setPontos} />
      <Link to='/'>Voltar para a página inicial</Link>
    </>
  )
}