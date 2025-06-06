import Style from './Start.module.css';

function Start(){

return(

    <div className={Style.principal}>
         <h1>Hello, World!</h1>
        <h2>const dev = "Carlos Eduardo";  // Software Engineering student & <br/>   </h2>

        <div className={Style.tech}>
          <h2> tech enthusiast </h2>
           
            </div>
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


)

}

export default Start;