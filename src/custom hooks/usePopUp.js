import { useState } from "react";

const usePopUp = (func) => {
  const [popUp, setPopUp] = useState(false);

  const handler = () => {
    setPopUp(!popUp);
    func && func();
  };
  const reset = () => setPopUp(false);
  const on = () => setPopUp(true);
  return {
    value: popUp,
    handler,
    reset,
    on,
  };
};

export { usePopUp };
