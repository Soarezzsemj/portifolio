import './App.css';
import Start from './components/Start';
import About from './components/About';

function App() {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="button close"></div>
        <div className="button minimize"></div>
        <div className="button maximize"></div>
      </div>
      <div className="terminal-body">
        <Start/>

      
      </div>
    </div>
  );
}

export default App;
