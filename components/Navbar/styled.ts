import styled from "@emotion/styled";

export const navbarStyle = styled.div`
//desktop version
width:100%;
height:10%;
display:flex;
padding-inline:10vw;
align-items: center;
background-color: white;
a{
    text-decoration: none;
    color:black;
}
.title{
    font-size:64px ;
    font-weight: 700;
    

}
.options{
    font-size: 24px ;
    font-weight: 500;
    margin-left:34vw;
}
#info_option{
    padding-left: 8vw;
}
@media (min-width:320px ) and (max-width:768px)
{
padding-inline: 7vw;
    .title{
    font-size:36px ;
    

}
.options{
    font-size: 10px ;
    font-weight: 500;
    margin-left:23vw;
}
}

`;
