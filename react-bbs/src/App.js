import BackImg from "./Landscape.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttaChment: "scroll",
    backgroundSize: "100% 100%",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>React BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <BBsMain />
      <footer className="footer">
        <address>CopyRight &copy; maplegjswns@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
