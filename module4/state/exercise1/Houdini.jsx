import { useState } from "react";

export default function Houdini() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <>
      <button id="magic-button" onClick={toggle}>
        Magic button
      </button>
      <div id="houdini">{show ? "Now you see me" : "now you don't"}</div>
    </>
  );
}
