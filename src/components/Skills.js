import Style from './Skills.module.css';

function Skills(){
    return (
        <div className={Style.skills}>
            <h2>Skills</h2>
            <div className={Style.container}>
                <div className={`${Style.card} ${Style.mobile}`}>
                    <h3>MOBILE</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Native" width="50px"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt="Swift" width="50px"/>
                </div>

                <div className={`${Style.card} ${Style.web}`}>
                    <h3>WEB</h3>
                    <div className={Style.gridweb}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" width="50px"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width="50px"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" width="50px"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="50px"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width="50px"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="50px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
