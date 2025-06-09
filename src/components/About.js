import Style from './About.module.css';
import Carlos from '../Assets/carlos.JPEG'; // Ensure the path is correct

function About() {
  return (
    <div className={Style.about}>
      <h1>Sobre mim</h1>
      <p>Sou Carlos Eduardo, natural de Parnaíba–PI, e sempre fui apaixonado por tecnologia desde que minha tia me apresentou ao computador na infância. Atualmente, curso Engenharia de Software na Universidade Católica de Brasília, onde venho me aprofundando em desenvolvimento de sistemas, lógica de programação e práticas modernas da área.</p>
      <img src={Carlos} alt="Carlos Eduardo" className={Style.profileImage} />
    
    </div>
  );
}

export default About;
