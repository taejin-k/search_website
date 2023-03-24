import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import { HOME_URL, RESULT_URL } from "./constants/urlConstants";
import useGlobalModal from "./hooks/useGlobalModal";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";

const App = () => {
  const { modalState } = useGlobalModal();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={RESULT_URL} element={<Result />} />
        <Route path="*" element={<Navigate replace to={HOME_URL} />} />
      </Routes>
      {modalState.isOpen && <Modal />}
    </BrowserRouter>
  );
};

export default App;
