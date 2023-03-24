import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import QueryProvider from "./quries/QueryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <QueryProvider>
      <App />
    </QueryProvider>
  </RecoilRoot>
);
