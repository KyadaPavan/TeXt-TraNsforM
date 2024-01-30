import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [text, settext] = useState();

  let onchangetext = (event) => {
    let textchange = event.target.value;
    settext(textchange);
  };

  let onclickupper = () => {
    let uppercasetext = text.toUpperCase();
    console.log(uppercasetext);
    settext(uppercasetext);
  };

  let onclicklower = () => {
    let lowercasetext = text.toLowerCase();
    console.log(lowercasetext);
    settext(lowercasetext);
  };

  let onclickcopy = () => {
    window.navigator.clipboard.writeText(text);
  };

  let oncilckclear = () => {
    settext("");
  };

  let onclickremove = () => {
    let removespace = text.replace(/\s+/g, " ").trim();
    settext(removespace);
  };

  return (
    <>
      <Navbar />
      <Textarea textcahnge={onchangetext} text={text} />
      <Buttons
        upper={onclickupper}
        lower={onclicklower}
        clear={oncilckclear}
        remove={onclickremove}
        copy={onclickcopy}
      />
    </>
  );
}

export default App;
