import './App.css';
import Start from './components/Start';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="principal">
    <div className="terminal">
      <div className="terminal-header">
        <div className="button close"></div>
        <div className="button minimize"></div>
        <div className="button maximize"></div>
      </div>
      <div className="terminal-body">
      <div className="container"> 
      <section>

        <section className="bloco">
        <Start/>
        </section>
        <section className="sobre">
          <About/>
        </section>

        <section className="skills">
          <Skills/>  
        </section>

        <section className="projects">
          <Projects/>
        </section>
      </section>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
