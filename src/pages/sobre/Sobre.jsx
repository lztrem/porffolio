import Header from '../../components/Header/Header'
import * as S from "./styled"
import html from "../../assets/imagemhtml.png"
import css3 from "../../assets/imagemcss3.png"
import javascript from "../../assets/imagemjavascript.png"
import react from "../../assets/imagemreact.png"
import qualquer from "../../assets/imagemqualquer.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header/>
      <S.Conteiner>
        <S.Caixa1>
        <S.Tituloprincipal>Sobre mim</S.Tituloprincipal>
        <S.Paragrafo>Sou o Luiz Fernando mais conhecido como Lz
          tenho 25 anos gosto muito de jogar futebol
          tudo o que envolve tecnologia gosto de jogar video game
          gosto muito de comer e resenhar com os amigos
          ainda não sou casado mas pretendo casar e ter filhos
          </S.Paragrafo>
        <S.Tituloprincipal>Habilidades</S.Tituloprincipal>
        </S.Caixa1>
      <S.Box2>
        <S.Imagem src={html} alt="" /> 
        <S.Imagem src={css3} alt="" />
        <S.Imagem src={javascript} alt="" />
        <S.Imagem src={react} alt="" />
        <S.Imagem src={qualquer} alt="" />
      </S.Box2>
      </S.Conteiner>
      
    </S.Main>
  )
}
