import { useState } from "react";

export function usePopUp(func) {
  let [popUp, setPopUp] = useState(false);

  let handler = () => {
    setPopUp(!popUp);
    func && func();
  };
  let reset = () => setPopUp(false);
  return {
    value: popUp,
    handler,
    reset,
  };
}
