import React, { useState } from "react";
import SecondPage from "../SecondPage";

const FirstPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>FirstPage</div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Go to second screen
      </button>
      {show ? <SecondPage /> : ""}
    </>
  );
};

export default FirstPage;
