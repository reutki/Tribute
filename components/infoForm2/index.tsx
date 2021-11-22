import {FC} from "react";
import * as S from './styled';
import Image from 'next/image';

type Props ={
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    image1_url:string;
    image2_url:string;
    year1:string;
    year2:string;
    
};

export const InfoForm2:FC<Props> = ({title1,title2,description1,description2,image1_url,image2_url, year1,year2}) =>{
    return( 
        <S.formBody>
            <div className="yearsResponsive">
            <div className="year1_1">
            {year1}
            </div>
            </div>
            <div className="topInfo">          
        <div className="imageContainer">
        <Image 
        src={"/images/" +image1_url}
        width={522}
        height={347}
        layout="responsive"
        alt="">
        </Image>
        </div>
        <div className="columns">
        <div className="date1">
                {title1}
            </div>
            <div className="dateCaption1">
                {description1}
            </div>
            </div>


        </div>
        <div className="years">
            <div className="year1">
            {year1}
            </div>
            <div className="year2">
            {year2}
            </div>
        </div>
        <div className="yearsResponsive">
            <div className="year2_1">
            {year2}
            </div>
            </div>
        <div className="infoBottom">
        <div className="columns">
            <div className="date2">
                {title2}
            </div>
            <div className="dateCaption2">
        {description1}
            </div>
            </div>
        <div className="imageContainer">
                    <Image 
        src={"/images/" +image2_url}
        width={522}
        height={347}
        layout="responsive"
        alt="">
        </Image>
        </div>
        </div>
          
        </S.formBody>
        );
        
};