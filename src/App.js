import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Learningcodes2021/react-dictionary-app"
              target="_blank"
              title="GitHub Repository"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by Jacqueline Berry
            <br />
            <a
              href="https://www.pexels.com"
              target="_blank"
              title="Pexels"
              rel="noreferrer"
            >
              Photos provided by Pexels
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
