import './App.css';
import Calorie from "./components/Day 17/Calorie";
function App() {
  return (
    <div className="App">
       <header className="head">Calorie Reader</header>
       <div className="container">
       <Calorie name="Pizza" calorie={56}/>
       <Calorie name="Burger" calorie={69}/>
       <Calorie name="Coke" calorie={500}/>
       <Calorie name="Brownie" calorie={180}/>
       <Calorie name="Fried Rice" calorie={90}/>
       <Calorie name="Lasagna" calorie={200}/>
       <Calorie name="Pani Puri" calorie={10}/>
       </div>
      
    </div>
  );
}

export default App;
