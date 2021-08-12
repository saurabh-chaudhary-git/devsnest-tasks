import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./components/Form";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Hello Redux</h2>
        <Form />
      </div>
    </Provider>
  );
}
