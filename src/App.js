import react, { useState, useRef } from "react";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div id="display" className="current-operand"></div>
      </div>
      <button id="clear" className="span-two">
        AC
      </button>
      <button>DEL</button>
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
