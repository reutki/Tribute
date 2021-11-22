import { InfoForm1 } from '../InfoForm1'
import * as S from './style'
import { Arrows } from '../arrows'

 export const Page5 = () =>{
    return(
        <S.page5Style>
           <InfoForm1 title1="Norman Bourlaug visits Delhi"
           title2="Norman Borlaug's 2005 speech"
           description1="1962 Norman Bourlaug Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population"
           description2="In his 2005 speech, Norman Bourlaug stated that we will have to double the world's food supply by 2050.
           He argues that genetically modified crops are the only way we can meet demand because we run out of arable land. He says genetically modified crops are not inherently dangerous because we've been genetically modifying plants and animals for a long time. Long before we called it science, humans chose the best breeds."
           year1="1962"
           year2="2005"
           image1_url="speaks.png"
           image2_url="N.B.with the peoples.png"
           />
            <Arrows image_src1="Arrow1.png" image_src2="Arrow2.png"/>
        </S.page5Style>
      
    );
};


