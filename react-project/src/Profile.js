import { useState } from "react";

function InputEx({ props }) {
  const [Inputs, setInputs] = useState({
    name: "",
    major: "",
    stuNum: "",
    grade: "",
    semester: "",
    goal: "",
  });

  const { name, major, stuNum, grade, semester, goal } = Inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };

  const InsetInfo = (e) => {
    e.preventDefault();
    getProfile(Inputs);
    props.setData({ Inputs });
  };

  const onReset = () => {
    setInputs({
      name: "",
      major: "",
      stuNum: "",
      grade: "",
      goal: "",
      semester: "",
    });
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
        id="semester"
        name="semester"
        placeholder="학기"
        onChange={onChange}
        value={semester}
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
      <input
        id="goal"
        name="goal"
        placeholder="목표 평점"
        onChange={onChange}
        value={goal}
      />
      <button onClick={onReset}>초기화</button>
      <button id="showButton" onClick={InsetInfo}>
        입력
      </button>
    </form>
  );
}

export default InputEx;
