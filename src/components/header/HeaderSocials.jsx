import React from "react";
import {BsLinkedin,BsGithub} from 'react-icons/bs';


function HeaderSocials(){
    return (
        <div className="header__socials">
            <a href="https://github.com/nidal23" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/nidal-mohammed-959829193/" target="_blank"><BsLinkedin /></a>
            {/* <a href="" target="_blank"></a> */}
        </div>
    );
}

export default HeaderSocials;