import "./styles.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  // const [place, setPlace] = useState("");
  // const [placeData, setPlaceData] = useState({});
  // const updatePlaceData = () => {
  //
  // };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Form />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
