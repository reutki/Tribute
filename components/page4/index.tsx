import { InfoForm2 } from '../infoForm2'
import * as S from './style'
import { Arrows } from '../arrows'

 export const Page4 = () =>{
    return(
        <S.page4Style>
           <InfoForm2 title1="Norman Bourlaug in  Mexico head a new plant pathology program"
           title2="Norman Bourlaug marries"
           description1="1944
 
           Norman Bourlaug rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. 
           Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.
           "
           description2="1938 Norman Bourlaug marries his 24-year-old wife, Margret Gibson. It is made available due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school under Stakman, who teaches him how to grow pest-resistant plants."
           year1="1938"
           year2="1944"
           image1_url="FOTO WITH WIFE.png"
           image2_url="foto more women.png"
           />
            <Arrows image_src1="Arrow1.png" image_src2="Arrow2.png"/>
        </S.page4Style>
      
    );
};


