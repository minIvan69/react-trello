import styled from "styled-components";

export const ContainerCollumns = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`

export const CollumnsBlock = styled.div`
height: 50vh;
width: 300px;
background-color: antiquewhite;
border-radius: 5px;
margin: 0 20px;

&:first-child{
    margin-left: 0;
}

&:last-child{
    margin-left: 0;
}
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