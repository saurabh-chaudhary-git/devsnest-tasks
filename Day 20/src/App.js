import "./styles/App.css";
import Calorie from "./components/Calorie";
function App(props) {
  return (
    <div className="App">
      <header className="head">Calorie Reader</header>
      <div className="container">
        <Calorie />
      </div>
    </div>
  );
}

export default App;
