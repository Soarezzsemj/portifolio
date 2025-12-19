import { useState } from 'react';
import Style from './Projects.module.css';

import cel1 from '../Assets/MinhaCripto/cel1.png';
import cel2 from '../Assets/MinhaCripto/cel2.png';
import cel3 from '../Assets/MinhaCripto/cel3.png';
import cel4 from '../Assets/MinhaCripto/cel4.png';

const projectsData = [
  {
    id: 'cripto',
    title: 'MINHA',
    highlight: 'CRIPTO',
    description:
      'Aplicativo mobile desenvolvido com SwiftUI para facilitar o uso de criptomoedas.',
    fullDescription: `
Aplicativo mobile desenvolvido com SwiftUI para facilitar o uso de criptomoedas,
com foco em simplicidade, usabilidade e segurança.

A proposta é permitir que qualquer pessoa possa armazenar e transferir USDT
na rede TRON (TRC20) de forma prática e intuitiva.
    `,
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'https://nodered.org/about/resources/media/node-red-icon-2.png',
      'https://img.favpng.com/22/16/9/logo-cloudant-brand-vector-graphics-ibm-png-favpng-tJmFEAMXSKe9AcQejB86SBNMr.jpg'
    ],
    repo: 'https://github.com/Soarezzsemj/Minha-Cripto',
    final: '',
    screenshots: [cel1, cel2, cel3, cel4]
  },
  {
    id: 'resumeai',
    title: 'RESUME AI',
    highlight: '',
    description:
      'Aplicação full-stack que gera resumos automáticos em português utilizando inteligência artificial.',
    fullDescription: `
O ResumeAI é uma aplicação full-stack desenvolvida para gerar resumos automáticos
em português utilizando o modelo de linguagem Google Gemini 2.5-Flash.
O projeto foi pensado para oferecer uma experiência simples e eficiente,
permitindo a geração rápida de resumos claros e objetivos.
    `,
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    ],
    repo: 'https://github.com/Soarezzsemj/Resumo-IA',
    final: 'https://resumo-ia.vercel.app/',
    screenshots: []
  }
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className={Style.projects}>
      <h2>Projetos</h2>

      {/* CARDS */}
      <div className={Style.container}>
        {projectsData.map(project => (
          <div key={project.id} className={Style.card}>
            <h3>
              {project.title}
              <span>{project.highlight}</span>
            </h3>

            <p>{project.description}</p>

            <button onClick={() => setActiveProject(project)}>
              Mais informações
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className={Style.modalOverlay}>
          <div className={Style.modal}>
            <button
              className={Style.closeBtn}
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <h3>
              {activeProject.title}
              <span>{activeProject.highlight}</span>
            </h3>

            <p style={{ whiteSpace: 'pre-line' }}>
              {activeProject.fullDescription}
            </p>

            <h4>Tecnologias Utilizadas</h4>
            <div className={Style.techs}>
              {activeProject.techs.map((tech, index) => (
                <img key={index} src={tech} alt="" width="40" />
              ))}
            </div>

            <p>
              <strong>Repositório:</strong><br />
              <a
                href={activeProject.repo}
                target="_blank"
                rel="noreferrer"
              >
                {activeProject.repo}
              </a>
            </p>

            {activeProject.final && (
              <p>
                <strong>Projeto online:</strong><br />
                <a
                  href={activeProject.final}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeProject.final}
                </a>
              </p>
            )}

            {activeProject.screenshots.length > 0 && (
              <div className={Style.screenshots}>
                {activeProject.screenshots.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
