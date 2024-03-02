import ReactDOM from "react-dom/client";
import { store } from "./utils/store/store.ts"; // store.tsからエクスポートしたstoreをインポート
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Providerでstoreを渡します。
  <Provider store={store}>
    <App />
  </Provider>
);
