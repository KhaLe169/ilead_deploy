import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "sdk-chat-widget/dist/main.css";
import "./App.css";
import { store } from "./redux/store";
import { router } from "./routes";
import ThemeConfig from "./theme/index.tsx";

function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <RouterProvider router={router} />
      </ThemeConfig>
    </Provider>
  );
}

export default App;
