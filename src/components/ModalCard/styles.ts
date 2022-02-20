import styled from "styled-components";

export const StyledModal = styled.div`
position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
    background: rgba(0,0,0, 0.7);
    -webkit-overflow-scrolling: touch;
    z-index: 1000;

`
export const Container = styled.div`
margin-top: 100px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 800px;
  max-width: 100%;
background: black;
height: 1700px;
max-height: 100%;
border-radius: 7px;
overflow: auto;

`

export const Content = styled.div`
display:flex;
flex-direction: column;
flex-wrap: nowrap;
background-color: #f4f5f7;
padding: 40px

`

export const ContainerPanel = styled.div`
display:flex;

`

export const PanelText = styled.div`
min-height: 100vh;
width: 100%;
background: beige;
`

export const Actions = styled.div`
min-height: 100vh;
width: 200px;
background: yellow;
`

export const Header = styled.div`
height: 100px;
background: beige;
`
export const Title = styled.div`

`

export const CardAuthor = styled.div`

`
export const Description = styled.div`

`

export const Input = styled.div`
height: 100px;
background: #fff;
border-radius: 15px;
`


