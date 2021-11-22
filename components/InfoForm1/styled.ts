import styled from "@emotion/styled";

export const formBody = styled.div`





//desktop version;

    width:100%;
    display:flex;
    flex-direction: column;
    padding-inline:10vw;
    justify-content: center;
   
   background-color: white;
.topInfo {
    padding-top: 3vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.infoBottom{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
    .years{
        font-size: 64px;
        color:#3A548A;
        display: flex;
        justify-content: center;
        padding: 2vh 0 2vh 0;
        
    }
    .year2{
        padding-left: 35vw;
    }

    .imageContainer{
        width: 35vw;
    }
    
  .date1,.date2{
      font-size:18px;
      font-weight: 500;
      color:black;
      background-color:#536A99 ;
      padding:1vh;
      text-align: center;
      width:30vw;
      
  }
  .columns{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:30vw;
  }
  .columns div{
      margin-bottom: 2vh;
  }
  .dateCaption1,.dateCaption2{
      font-size: 18px;
      font-weight: 500;
  }
  .yearsResponsive{
      display: none;
  }
//tablet version
@media (min-width:769px ) and (max-width:1024px){
    .year1_1 , .year2_1{
        font-size: 36px;
        color:#3A548A;
       
        
    }
    .yearsResponsive{
      display: flex;
      width:100%;
display:flex;
justify-content:center; }
.years{
    display: none;
}}
//mobile version
@media (min-width:320px ) and (max-width:768px)
{
    padding-inline: 2vw;
    .dateCaption1 , .dateCaption2{
    font-size:12px ;
    width:30vw;
    text-align: left;
   

    }
    .year1_1 , .year2_1{
        font-size: 36px;
        color:#3A548A;
       
            }
        .yearsResponsive{
        display: flex;
        width:100%;
        display:flex;
        justify-content:center; }
        
        .date1, .date2{
            display: none;
        }
        .years{
            display: none;
        }
        .imageContainer{
            width:50vw;
        }
        
}


`;

