import Style from './About.module.css';
import Carlos from '../Assets/carlos.JPEG';

function About() {
  return (
    <section className={Style.about}>
      <h1>Sobre mim</h1>

      <p className={Style.subtitle}>
        Estudante de Engenharia de Software e desenvolvedor em formação
      </p>

      <div className={Style.content}>
        <div className={Style.text}>
          <p>
            Sou Carlos Eduardo, estudante de Engenharia de Software na Universidade
            Católica de Brasília e apaixonado por tecnologia desde cedo.
          </p>

          <p>
            Tenho focado meus estudos em desenvolvimento de sistemas, lógica de
            programação e práticas modernas, buscando evoluir continuamente como
            desenvolvedor.
          </p>
        </div>

        <img
          src={Carlos}
          alt="Carlos Eduardo"
          className={Style.profileImage}
        />
      </div>
    </section>
  );
}

export default About;
