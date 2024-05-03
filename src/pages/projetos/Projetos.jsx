import * as S from "./styled"
import Header from '../../components/Header/Header'
import disney from "../../assets/Disney.png"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      
      <S.Principal>
      <S.Titulo>Projetos</S.Titulo>
      <S.Caixas>
        <S.Vaga>
          <S.Imagem src={disney} alt="" />
          <S.Paragrafo>Site da disney feito com 
            html e usando bastante o css
            e bem organizado pro cliente
            poder navegar
          </S.Paragrafo>
        </S.Vaga>
        <S.Vaga>
        <S.Imagem src={disney} alt="" />
          <S.Paragrafo>Site da disney feito com 
            html e usando bastante o css
            e bem organizado pro cliente
            poder navegar
          </S.Paragrafo>
        </S.Vaga>
        <S.Vaga>
        <S.Imagem src={disney} alt="" />
        <S.Paragrafo>Site da disney feito com 
            html e usando bastante o css
            e bem organizado pro cliente
            poder navegar
        </S.Paragrafo>
        </S.Vaga>
      </S.Caixas>
      </S.Principal>
    </S.Main>
  )
}
