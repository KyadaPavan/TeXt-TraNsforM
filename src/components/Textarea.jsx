import "./Textarea.css";
function Textarea({ textcahnge, text }) {
  return (
    <div className="form-floating ">
      <textarea
        id="mytext"
        className="textareai"
        placeholder="Enter Your Text here"
        value={text}
        onChange={textcahnge}
      ></textarea>
    </div>
  );
}

export default Textarea;
