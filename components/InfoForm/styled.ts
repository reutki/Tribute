import styled from "@emotion/styled";

export const formBody = styled.div`


//desktop version;

    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-inline:8vw;
    border-color: white;
    background-color: white;

    .year1, .year2{
        font-size: 54px;
        color:#3A548A;
    }

    .title{
        font-size:43px;
        font-weight: 700;
        width:25vw;
        
    }
    .description{
        font-size: 36px;
        font-weight: 400;
        width:20vw;
    }
    .caption{
        font-size: 19px;
        font-weight: 500;
        
        
    }
    .imageContainerResponsive{
        display: none;
    }
    .yearsContainer{
        display:flex;
        width: 25vw;
        flex-direction: row;
        
    }
    .titleContainer{
        padding-left:10vw;
    }
    
    .titleContainer div{
        padding-bottom: 3vh;
    }
    .year2{
        margin-left:1vw;
    }
//tablet version
@media (min-width:769px ) and (max-width:1024px)
{
    .year1, .year2{
        font-size: 27px;
        color:#3A548A;
    }
    .title{
        font-size:27px;
        width: 40vw;
        
        
    }
    
    .description{
        font-size: 24px;
        font-weight: 400;
        width:40vw;
    }
    .titleContainer{
        padding-left:10vw;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .caption{
        font-size: 19px;
    }
    .imageContainerResponsive{
       display:none;
       
   }
}
//mobile version


@media (min-width:769px ) and (max-width:1024px)
{
    
    .year1, .year2{
        font-size: 18px;
        color:#3A548A;
    }
    .title{
        font-size:24px;
        width: 40vw;
        
        
    }
    
    .description{
        font-size: 18px;
        font-weight: 400;
        width:40vw;
    }
    .titleContainer{
        padding-left:10vw;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .caption{
        font-size: 19px;
    }
    .imageContainerResponsive{
       display:none;
       
   }
}
@media (min-width:320px ) and (max-width:768px){
    display:flex;
    flex-direction: column;
    .titleContainer{
        padding-left:0vw;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
   .title{
       font-size: 24px;
       width:100%;
   }
   .description{
       width:100%;
       font-size:18px ;
   }
   .year1,.year2{
    font-size: 18px;
    color:black;
   }
   .yearsContainer{
       width: 100%;
   }
   .imageContainerResponsive{
       display:grid;

   }
   .imageContainer{
       display:none;

   }
   .caption{
       display: none;
   }
.captionResponsive{
    font-size:16px;
}
}
`;





export const formImage = styled.div`

`;