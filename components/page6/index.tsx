import * as S from './style'
import { Arrows } from '../arrows'
import Image from 'next/image';
import sampleimage from '../../public/images/1.png'
export const Page6 = () => {
return(
<S.page6Style>
<div className="yearResponsive">
<p>2009</p>
</div>
<div className="container">

<div className="title">
<p>Norman Borlaug dies</p>
</div>

<div className="caption">
    <p>2009 Norman Bourlaug dies at the age of 95.</p>
</div>
<div className="year">
<p>2009</p>
</div>
<Image
        src="/images/1.png"
        alt="Landscape picture"
        width={500}
        height={500}
      />
        <div className="wiki">
    <p>More info on the wikipedia</p>
</div>
</div>
<div className="wikiResponsive">
    <p>More info on the wikipedia</p>
</div>
<Arrows image_src1="#" image_src2="Arrow2.png"/>
</S.page6Style>


);
}