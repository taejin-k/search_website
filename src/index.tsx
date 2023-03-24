import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyle } from "./global-style";
import QueryProvider from "./quries/QueryProvider";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <QueryProvider>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </QueryProvider>
  </Provider>
);
