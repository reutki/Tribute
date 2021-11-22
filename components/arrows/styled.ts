import styled from "@emotion/styled"

export const arrowStyle = styled.div`
.arrowsContainer{
display: flex;
 justify-content: center;

 padding-top: 2vh;
width:100%;
background-color: white;

}

.image1 {
width:2vw;
height:4vw;
}
.image2 {
 width:2vw;
height:4vw;
}
//mobile version
@media (min-width:320px ) and (max-width:768px){

    .image1 {
width:4vw;
height:8vw;
}
.image2 {
 width:4vw;
height:8vw;
}


}
`;