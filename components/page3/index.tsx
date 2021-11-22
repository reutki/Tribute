import { InfoForm1 } from '../InfoForm1'
import * as S from './style'
import { Arrows } from '../arrows'

 export const Page3 = () =>{
    return(
        <S.page3Style>
           <InfoForm1 title1=" 1935 Civilian Conservation Corps"
           title2=" 1937 US Forestry Service"
           description1="Stop school Norman Bourlaug has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. I saw how food changed them, he said. All of this left scars on me."
           description2="Norman Bourlaug finishes university and takes a job in the US Forestry Service"
           year1="1935"
           year2="1937"
           image1_url="foto natonal forest.png"
           image2_url="FOTO WORK IN THE FOREST.png"
           />
            <Arrows image_src1="Arrow1.png" image_src2="Arrow2.png"/>
        </S.page3Style>
      
    );
};


