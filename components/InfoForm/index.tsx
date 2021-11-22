import {FC} from "react";
import * as S from './styled';
import Image from 'next/image';

type Props ={
    title: string;
    description: string;
    image_url:string;
    year1:string;
    year2:string;
    caption:string;
};

export const InfoForm:FC<Props> = ({title,description,image_url,caption, year1,year2}) =>{
    return( 
        <S.formBody>
        <div className="imageContainer">
        <Image 
        src={"/images/" +image_url.toString()}
        width={522}
        height={347}
        layout="responsive"
        alt="main image">
        </Image>
        <div className="caption">{caption}</div>
        </div>
         <div className="titleContainer">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="yearsContainer">

        <div className="year1">{year1}</div>
        <div className="year2">{year2}</div>
        </div>
        </div>
        <div className="imageContainerResponsive">
        <Image 
        src={"/images/" +image_url.toString()}
        width={522}
        height={347}
        layout="responsive"
        alt="main image">
        </Image>
        <div className="captionResponsive">{caption}</div>
        </div>
        </S.formBody>
        );
        
};
