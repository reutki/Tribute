import * as S from './styled';


export const Navbar = () =>{
    return(
        <S.navbarStyle>
            <a className ="title" href="#">Tribute</a>
            <div className="options">
            <a href="#">About</a>
            <a id="info_option" href="#">Info</a>
            </div>
                
        </S.navbarStyle>
        
    );
};


