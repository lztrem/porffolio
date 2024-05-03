import styled from "styled-components";


export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
background: #839697;
`

 export const Conteiner = styled.section`
 /* border: solid 2px blue; */
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 width: 100%;
 
 `

 export const Caixa1 = styled.div`
 /* border: solid 2px yellow; */
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 height: 40vh;
 width: 50vw;
 `

 export const Box2 = styled.div `
 /* border: solid 2px green; */
 display: flex;
 justify-content: space-between;
 width: 30vw;

 `

export const Imagem = styled.img `
width: 4vw;
height: 8vh;
`

export const Paragrafo = styled.p `
font-size: 20px;
/* border: solid 2px purple; */
width: 20vw;
color: white;

`
export const Tituloprincipal = styled.h2`
color: white;
`