import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyle } from "./global-style";
import QueryProvider from "./quries/QueryProvider";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <QueryProvider>
      <GlobalStyle />
      <App />
    </QueryProvider>
  </Provider>
);
