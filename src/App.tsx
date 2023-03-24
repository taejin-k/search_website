import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HOME_URL, RESULT_URL } from "./constants/urlConstants";
import { GlobalStyle } from "./global-style";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_URL} element={<Home />} />
          <Route path={RESULT_URL} element={<Result />} />
          <Route path="*" element={<Navigate replace to={HOME_URL} />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
