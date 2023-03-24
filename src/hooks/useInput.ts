import { useState, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RESULT_URL } from "../constants/urlConstants";
import { setKeyword } from "../redux/keywordSlice";
import useGlobalModal from "./useGlobalModal";

const useInput = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const { openGlobalModal } = useGlobalModal();

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onChange = (value: string) => {
    setValue(value);
  };

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value === "") {
      openGlobalModal({ isOpen: true, text: "검색어를 입력해주세요" });
      return;
    }

    dispatch(setKeyword(event.currentTarget.value));
    if (location.pathname !== RESULT_URL) navigate(RESULT_URL);
  };

  return { value, focus, onFocus, onBlur, onChange, onEnter };
};

export default useInput;
