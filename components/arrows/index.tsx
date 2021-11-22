import {FC} from "react";
import * as S from './styled';
import Image from 'next/image';

type Props ={
    image_src1:string;
    image_src2:string;
};
export const Arrows:FC <Props> = ({image_src1,image_src2}) => {

    return(
    <S.arrowStyle>
        <div className="arrowsContainer">
            <div className="image1">
        <Image 
        src={"/images/" +image_src1.toString()}
        width={80}
        height={100}
        layout="responsive"
        alt="">
        </Image>
        </div>
        
            <div className="image2">
        <Image 
        src={"/images/" +image_src2.toString()}
        width={80}
        height={100}
        layout="responsive"
        alt="">
        </Image>
        </div>
    </div>
</S.arrowStyle>

    );
  

  

};