import "./Calculator.css";
import { Textfit } from "react-textfit";

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};
  
const Screen = ({ value }) => {
    return (
      <Textfit className="screen" mode="single" max={70}>
        {value}
      </Textfit>
    );
};

const ButtonBox = ({ children }) => {
    return <div className="buttonBox">{children}</div>;
};

const Button = ({ className, value, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );
};

const Calculator = () => {
    return (
        <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res}/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                  onClick={
                    btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                  }
                />
              );
            })}
        </ButtonBox>
      </Wrapper>
      );    
}

export default Calculator;