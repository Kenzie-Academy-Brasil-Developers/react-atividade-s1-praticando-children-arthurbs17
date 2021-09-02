import myimg from "./assets/arthur.jpeg";
import "./App.css";
import CenteredCard from "./components/CenteredCard";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <figure>
            <img src={myimg} alt="minha figura"></img>
          </figure>
          <div>Arthur Barreto Sarmento</div>
          <div>28 anos</div>
          <div>Recife - PE</div>
          <div>Dev em formação</div>
          <div className="Links">
            <a href="https://github.com/arthurbs17">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/arthur-sarmento/">
              <FaLinkedin />
            </a>
          </div>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
