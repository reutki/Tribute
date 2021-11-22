import {Header} from '../Head'
import { InfoForm1 } from '../InfoForm1'
import { Navbar } from '../Navbar'
import * as S from './style'
import { Arrows } from '../arrows'

export const Page2 = () =>{
    return(
        <S.page2Style>
           <InfoForm1 title1=" March 25, 1914 Born in Cresco, Iowa"
           title2=" 1933 - Norman Bourlaug Admission to the Minnesota University"
           description1="Norman Borlaug was born to Henry Oliver (1889–1971) and Clara (Vaala) Borlaug (1888–1972) on his grandparents' farm in Saude in 1914, the first of four children. His three sisters were Palma Lillian (Behrens; 1916–2004), Charlotte (Culbert; b. 1919) and Helen (b. 1921)."
           description2="1933 - Norman Bourlaug leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the National Youth Administration"
           year1="1914"
           year2="1933"
           image1_url="FOTO UNIVERSITY.png"
           image2_url="FOTO WITH THE FAMILY.png"
           />
            <Arrows image_src1="Arrow1.png" image_src2="Arrow2.png"/>
        </S.page2Style>
      
    );
};

