import "./Buttons.css";
function Buttons({ upper, lower, clear, remove, copy }) {
  return (
    <div className="buttons">
      <button type="button" className="btn btn-primary" onClick={upper}>
        TO UPPERCASE
      </button>
      <button type="button" className="btn btn-primary" onClick={lower}>
        to lowercase
      </button>
      <button type="button" className="btn btn-primary" onClick={copy}>
        Copy Text
      </button>
      <button type="button" className="btn btn-primary" onClick={clear}>
        Clear Text
      </button>
      <button type="button" className="btn btn-primary" onClick={remove}>
        Remove Extra Spaces
      </button>
    </div>
  );
}

export default Buttons;
