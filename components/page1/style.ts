import styled from "@emotion/styled";

export const page1Style = styled.div`


//desktop version
padding-left:20%;
padding-top: 10vh;
padding-bottom: 10vh;

//tablet version
@media (min-width:769px ) and (max-width:1024px)
{
    padding-left: 0%;
}
@media (min-width:320px ) and (max-width:768px){
    padding:2vh 2vh 2vh 2vh;
}
`;

