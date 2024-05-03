import styled from "styled-components";


export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
background-color: #839697;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Vaga = styled.div `
   background-color: #4A5051;
   width: 10vw;
   height: 30vh;
   /* border: solid 2px green; */
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`
export const Principal = styled.section `
width: 100%;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-evenly;
flex-direction: column;
/* border: solid 2px orange; */
`
export const Caixas = styled.div`
width: 50%;
/* border: solid 2px yellow; */
display: flex;
justify-content: space-around;
`
export const Titulo = styled.h2`
color: white;
`

export const Paragrafo = styled.p `
color: white;
width: 9vw;
`

export const Imagem = styled.img `
width: 9vw;
height: 14vh;
`