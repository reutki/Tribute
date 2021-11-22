import {Header} from '../Head'
import { InfoForm } from '../InfoForm'
import { Navbar } from '../Navbar'
import * as S from './style'
import { Arrows } from '../arrows'

export const Page1 = () =>{
    return(
        <S.page1Style>

        <Header/>
         <Navbar />
           <InfoForm title="Dr. Norman Borlaug"
           description="The man who saved a billion lives"
           year1="1914"
           year2="- 2009"
           image_url="Main image.png"
           caption="Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger." />
            <Arrows image_src1="Arrow1.png" image_src2="#"/>
        </S.page1Style>
      
    );
};

