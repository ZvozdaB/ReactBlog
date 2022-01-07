import { useState } from "react";

export function usePopUp(func) {
  let [popUp, setPopUp] = useState(false);

  let handler = () => {
    setPopUp(!popUp);
    func && func();
  };
  let reset = () => setPopUp(false);
  let on = () => setPopUp(true);
  return {
    value: popUp,
    handler,
    reset,
    on,
  };
}