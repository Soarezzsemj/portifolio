import { useState } from 'react';
import Style from './Projects.module.css';
import cel1 from '../Assets/MinhaCripto/cel1.png';
import cel2 from '../Assets/MinhaCripto/cel2.png';
import cel3 from '../Assets/MinhaCripto/cel3.png';
import cel4 from '../Assets/MinhaCripto/cel4.png';

function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={Style.projects}>
      <h2>Projetos</h2>

      <div className={Style.container}>
        <div className={Style.card}>
          <h3>MINHA<span>CRIPTO</span></h3>
          <p>Aplicativo mobile desenvolvido com SwiftUI para facilitar o uso de criptomoedas.</p>
          <button onClick={() => setShowModal(true)}>Mais informações</button>
        </div>
      </div>

      {showModal && (
        <div className={Style.modalOverlay}>
          <div className={Style.modal}>
            <button className={Style.closeBtn} onClick={() => setShowModal(false)}>×</button>

            <h3>MINHA<span>CRIPTO</span></h3>
            <p>
              Aplicativo mobile desenvolvido com SwiftUI para facilitar o uso de criptomoedas, com foco em simplicidade, usabilidade e segurança.
              A proposta é permitir que qualquer pessoa possa armazenar e transferir USDT na rede TRON (TRC20) de forma prática e intuitiva.
            </p>

            <h4>Tecnologias Utilizadas</h4>
            <div className={Style.techs}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt="" width="40px" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="" width="40px" />
              <img src="https://nodered.org/about/resources/media/node-red-icon-2.png" alt="" width="40px" />
              <img src="https://img.favpng.com/22/16/9/logo-cloudant-brand-vector-graphics-ibm-png-favpng-tJmFEAMXSKe9AcQejB86SBNMr.jpg" alt="" width="100px" />
            </div>

            <p><strong>Link do repositório:</strong><br />
              <a href="https://github.com/Soarezzsemj/Minha-Cripto" target="_blank" rel="noreferrer">
                github.com/Soarezzsemj/Minha-Cripto
              </a>
            </p>

            <div className={Style.screenshots}>
              <img src={cel1} alt="Cel1" />
              <img src={cel2} alt="Cel2" />
              <img src={cel3} alt="Cel3" />
              <img src={cel4} alt="Cel4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
