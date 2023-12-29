import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
