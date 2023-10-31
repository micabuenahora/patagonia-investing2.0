import { Link } from "react-router-dom";

export const Footer = () => {

    let stylesFooterContainer={
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '200px',
        bottom: '0',
       backgroundSize: 'cover',
    }

    let stylesIconsContainer={
        display: 'flex',
        justifyContent: 'space-around',
        
        listStyle: 'none',
    }

    let stylesIcons={
        width:'50px',
        height: '50px',
        margin: '50px',
    }
     let stylesCopyright = { 
        color: '#984CAD'
     }
      let stylesLogoFooter={
        width: '50%',
        cursor: 'pointer',
        filter: 'brightness(1.2)',
        mixBlendMode: 'multiply',
      }
return (
    <footer style ={stylesFooterContainer}>
            <div>
               <Link to="/"> <img style ={stylesLogoFooter} src="https://i.postimg.cc/90xTWScw/logomontanapng.png" alt="logo"/></Link>
            </div>
            <p style ={stylesCopyright}> ©copyright 2023 patagonia investing </p>
            <ul style ={stylesIconsContainer}> {/* menu */}
                        <li> <Link  to="https://www.instagram.com/patagoniainvesting_/"><img style ={stylesIcons}src="https://i.postimg.cc/fRJ83GqK/8726142-instagram-icon.png" alt="instagram"/></Link> </li>      {/*  links en menu */}
                        <li> <Link  to="https://twitter.com/patagoniai81133"><img style ={stylesIcons} src="https://i.postimg.cc/wBX3FPR8/8980088-close-essential-ui-web-x-icon.png" alt="twitter"/></Link></li>
                        <li ><Link to="https://discord.com"><img style ={stylesIcons} src="https://i.postimg.cc/JnK0CkQp/8546766-discord-icon.png" alt="discord"/></Link></li>
                </ul> 

    </footer>
)
}