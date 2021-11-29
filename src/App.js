import react, { useState, useRef, useEffect } from "react";

function App() {
  const delButton = useRef(null);
  const acButton = useRef(null);
  const previousDiv = useRef(null);
  const currentDiv = useRef(null);

  const [previousOperand, setPreviousOperand] = useState(0);
  const [currentOperand, setCurrentOperand] = useState(null);
  const [mathOperation, setMathOperation] = useState(null);

  window.addEventListener("load", (e) => {
    setCurrentOperand(0);
    setPreviousOperand(0);
  });

  useEffect(() => {}, [currentOperand]);
  useEffect(() => {}, [previousOperand]);
  useEffect(() => {}, [mathOperation]);

  let initialNumberSting;
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (
        parseFloat(e.target.value) ||
        parseFloat(e.target.value) === 0 ||
        e.target.value === "."
      ) {
        initialNumberSting += e.target.value;
        setCurrentOperand(parseFloat(initialNumberSting.split("undefined")[1]));
      } else if (
        e.target.value === "+" ||
        e.target.value === "-" ||
        e.target.value === "x" ||
        e.target.value === "÷"
      ) {
        if (previousDiv.current.innerText === "0") {
          setPreviousOperand(parseFloat(currentDiv.current.innerText));
          setMathOperation(e.target.value);
          initialNumberSting = "undefined";
          setCurrentOperand(0);
        } else {
          if (mathOperation === "+") {
            let score =
              previousOperand + parseFloat(currentDiv.current.innerText);
            console.log(score);
            setPreviousOperand(score);
            setMathOperation(e.target.value);
            initialNumberSting = "undefined";
            setCurrentOperand(0);
          }
        }
      }
    });
  });

  return (
    <div className="calculator-grid">
      <div className="output">
        <div ref={previousDiv} className="previous-operand">
          {previousOperand}
        </div>
        <div ref={currentDiv} id="display" className="current-operand">
          {currentOperand}
        </div>
      </div>
      <button ref={acButton} id="clear" className="span-two">
        AC
      </button>
      <button ref={delButton}>DEL</button>
      <button value="÷" id="divide">
        ÷
      </button>
      <button value="1" id="one">
        1
      </button>
      <button value="2" id="two">
        2
      </button>
      <button value="3" id="three">
        3
      </button>
      <button value="x" id="multiply">
        x
      </button>
      <button value="4" id="four">
        4
      </button>
      <button value="5" id="five">
        5
      </button>
      <button value="6" id="six">
        6
      </button>
      <button value="-" id="subtract">
        -
      </button>
      <button value="7" id="seven">
        7
      </button>
      <button value="8" id="eight">
        8
      </button>
      <button value="9" id="nine">
        9
      </button>
      <button value="+" id="add">
        +
      </button>
      <button value="0" id="zero">
        0
      </button>
      <button value="." id="decimal">
        .
      </button>
      <button value="=" className="span-two" id="equals">
        =
      </button>
    </div>
  );
}

export default App;
