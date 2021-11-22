import  styled  from "@emotion/styled";

export const FooterStyled = styled.div`

color:white;
font-size: 20px;
width:100%;
text-align:center;

//mobile version
@media (min-width:320px ) and (max-width:768px){
    font-size: 10px;
    height:5vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

`;

