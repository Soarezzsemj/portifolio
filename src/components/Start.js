import Style from './Start.module.css';
import DecryptedText from '../reactbits/TextAnimations/DecryptedText/DecryptedText';

function Start(){

return(
  <div className={Style.start}>

  <div style={{  }}>
    <DecryptedText
    text="Hello, World!"
    animateOn="view"
    revealDirection="center"/>
  </div>
  <div style={{  }}>
    <DecryptedText
    text="const dev = Carlos Eduardo"
    animateOn="view"
    revealDirection="center"/>
  </div>
  <div style={{  }}>
    <DecryptedText
    text="Software Engineering student & tech enthusiast"
    animateOn="view"
    revealDirection="center"/>
  </div>

    <div className={Style.principal}>
        
        <div className={Style.icons}>
            <a href="https://github.com/Soarezzsemj" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" width="50px"/>
          </a>

          <a href="https://www.linkedin.com/in/carlos-eduardo-soares-081419343/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png" alt="" width="50px" />
          </a>

          <a href="https://www.instagram.com/soarezzsemj/" target="_blank" rel="noopener noreferrer"> 
            <img src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png"  alt="" width="50px" />
          </a>
        </div>
</div>
    
    
    </div>


)

}

export default Start;