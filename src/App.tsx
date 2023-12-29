import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchPage } from "./pages/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/search",
    Component: HomePage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
