import styled from "@emotion/styled";

export const page6Style = styled.div`

width:80vw;
padding-bottom: 10vh;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
.container{
    align-items: center;
    display: flex;
    flex-direction: column;
}
.title,.caption{
    font-size: 24px;
    font-weight: 500;
    
}
.year{
    font-size: 64px;
    color:#3A548A;


}
.wiki{
    font-size: 22px;
    font-weight: 500;

}
.image{
    display:flex;
}
.yearResponsive{
    display:none;
}
.wikiResponsive{
    display:none;
}

//tablet version
@media (min-width:769px ) and (max-width:1024px){
    width:100%;
}
.wikiResponsive{
    display:none;
}

//mobile version
@media (min-width:320px ) and (max-width:768px){
    width:100%;
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-inline: 2vw ;
    }
    .yearResponsive{
    display:flex;
    font-size: 36px;
    color:#3A548A;
}
.year{
    display: none;
}.caption {
    font-size: 14px;
}
.title{
    display: none;
}
.wiki{
    display:none;
}
.wikiResponsive{
    display: flex;
}
padding-bottom: 0;

}

`;
export default page6Style;

