import { useState } from "react";

function InputEx() {
    const [Inputs, setInputs] = useState({
      name: "",
      major: "",
      stuNum: "",
      grade: "",
      goal: "",
    });
  
    const { name, major, stuNum, grade, goal } = Inputs;
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...Inputs,
        [name]: value,
      });
    };
  
    const onReset = () => {
      setInputs({
        name: "",
        major: "",
        stuNum: "",
        grade: "",
        goal: "",
      });
    };
  
    const onInsert = () => {
      document.getElementById("leftCenter").removeAttribute("visibility");
      document.getElementById("leftBelow").removeAttribute("visibility");
      document.getElementById("leftCenter").removeAttribute("display");
      document.getElementById("leftBelow").removeAttribute("display");
      console.log("onInsert!");
    };
  
    return (
      <form id="input">
        <input
          id="stuNum"
          name="stuNum"
          placeholder="학번"
          onChange={onChange}
          value={stuNum}
        />
        <input
          id="grade"
          name="grade"
          placeholder="학년"
          onChange={onChange}
          value={grade}
        />
        <input
          id="goal"
          name="goal"
          placeholder="목표 평점"
          onChange={onChange}
          value={goal}
        />
        <br />
        <input
          id="name"
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          id="major"
          name="major"
          placeholder="전공"
          onChange={onChange}
          value={major}
        />
        <button onClick={onReset}>초기화</button>
        <button id="showButton" onClick={onInsert}>
          입력
        </button>
      </form>
    );
  }

  export default InputEx;