import styled from "styled-components";

export const ContainerCollumns = styled.div`
max-width: 300px;
    width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin-left: 20px;

&:first-child {
    margin:0;
}
`

export const CollumnsBlock = styled.div`
height: 50vh;
width: 100%;
background-color: antiquewhite;
border-radius: 5px;
`

export const HeaderBlock = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px;
justify-content: space-between;
`
export const Option = styled.div`

`

export const Title = styled.div`

`

export const Content = styled.div`
padding: 0 5px;
`
export const ContentCard = styled.div`
height: 30px;
background: #ffff;
border-radius: 10px;
padding: 10px;
`