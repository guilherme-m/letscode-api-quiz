import { Link } from "react-router-dom"

type PaginaInicialProps = {
  idPergunta: number
  setDificuldade: React.Dispatch<React.SetStateAction<string>>
  setNumQuestoes: React.Dispatch<React.SetStateAction<string>>
}

export const PaginaInicial = ({ idPergunta, setDificuldade, setNumQuestoes }: PaginaInicialProps) => {

  function handleNumQuestoes(e: React.ChangeEvent<HTMLSelectElement>) {

    setNumQuestoes(e.target.value)
    console.log(e.target.value)

  }

  function handleDificuldade(e: React.ChangeEvent<HTMLSelectElement>) {

    setDificuldade(e.target.value)
    console.log(e.target.value)

  }


  return (
    <>
      <h1>Super Quiz V2</h1>
      <div>
        <span>Quantidade de perguntas: </span>
        <select
          disabled={idPergunta !== 0}
          name="quantidade"
          onChange={e => handleNumQuestoes(e)}
          defaultValue="10">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div>
        <span>Dificuldade: </span>
        <select 
        disabled={idPergunta !== 0}
        name="dificuldade" 
        onChange={e => handleDificuldade(e)}
        defaultValue="easy">
          <option value="easy">Fácil</option>
          <option value="medium">Médio</option>
          <option value="hard">Dífícil</option>
        </select>
      </div>
      <Link to='/quiz'>Quiz</Link>
    </>
  )
}