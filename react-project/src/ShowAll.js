import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";
import lecture_detail_low_csv from "./data/lecture_data_low.csv";
import lecture_detail_high_csv from "./data/lecture_data_high.csv";

let start = 0;

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

  const onInsert = (e) => {
    start = 1;
  };

  return (
    <div id="input">
      <input
        name="stuNum"
        placeholder="학번"
        onChange={onChange}
        value={stuNum}
      />
      <input
        name="grade"
        placeholder="학년"
        onChange={onChange}
        value={grade}
      />
      <input
        name="goal"
        placeholder="목표 평점"
        onChange={onChange}
        value={goal}
      />
      <br />
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="major"
        placeholder="전공"
        onChange={onChange}
        value={major}
      />
      <button onClick={onReset}>초기화</button>
      <button onClick={onInsert}>입력</button>
    </div>
  );
}

function Barchart() {
  const width = 400;
  const height = 300;
  const margin = { top: 20, left: 20, bottom: 20, right: 20 };

  const [Mydata, setMydata] = useState([]);
  const svgRef = useRef();

  const CredData = async () => {
    let credData = [];
    let CredRes = [];
    let dataSet = await d3.csv(dataset_csv);
    await d3.csv(dataset_csv).then(function (data) {
      data.forEach(function (d) {
        credData.push(d);
      });
    });

    CredRes.push(parseInt((credData[0].Total / credData[1].Total) * 100));
    CredRes.push(parseInt((credData[0].Major / credData[1].Major) * 100));
    CredRes.push(
      parseInt(
        (credData[0].liberal + credData[0].Other / credData[1].liberal) * 100
      )
    );
    //Other에 해당했던 부분 해당되는것이 없어 삭제했습니다

    for (let i = 0; i < CredRes.length; i++) {
      if (CredRes[i] > 100) {
        CredRes[i] = 100;
      }
    }
    //100%넘으면 초과되던 문제 해결

    let CreditTable = [];
    let credL = Object.keys(dataSet[0]);
    credL.pop();

    for (let i = 0; i < CredRes.length; i++) {
      var newCred = {};
      newCred.name = credL[i];
      newCred.value = CredRes[i];
      CreditTable[i] = newCred;
    }

    setMydata([...CreditTable]);
  };

  useEffect(() => {
    CredData();

    const svg = d3.select(svgRef.current);

    // setting axis
    const x = d3
      .scaleBand()
      .domain(Mydata.map((d) => d.name))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(x).ticks(Mydata.length);
    svg.select(".x-axis").style("transform", "translateY(280px)").call(xAxis);

    const yAxis = d3.axisLeft(y).tickValues([0, 20, 40, 60, 80, 100]);
    svg.select(".y-axis").style("transform", "translateX(25px)").call(yAxis);

    // apply axis to canvas
    // vertical bar chart
    svg
      .selectAll(".bar")
      .data(Mydata)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (v, i) => i * 120 + 65)
      .attr("y", (v, i) => height - margin.top - v.value * 2.6)
      .attr("fill-opacity", 0.8)
      .attr("width", 30)
      .attr("fill", "blue")
      .attr("height", (v, i) => v.value * 2.6);

    // add text
    svg
      .selectAll(".bar.text")
      .data(Mydata)
      .enter()
      .append("text")
      .text((d) => d.value + "%")
      .attr("x", (v, i) => x(v.name) + margin.right + 40)
      .attr("y", (v) => y(v.value) - 8) //
      .attr("fill", "black")
      .attr("font-family", "Tahoma")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle");
  }, [Mydata]);

  return (
    <div id="Bar">
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
  );
}

const recommendations = [
  {
    point: 3,
    rating: 5,
    title: "강의명0",
  },
  {
    point: 3,
    rating: 4,
    title: "강의명1",
  },
  {
    point: 3,
    rating: 4,
    title: "강의명2",
  },
  {
    point: 3,
    rating: 3,
    title: "강의명3",
  },
  {
    point: 3,
    rating: 5,
    title: "강의명4",
  },
  {
    point: 3,
    rating: 4,
    title: "강의명5",
  },
];

function Recomend({ recommendation }) {
  let stars = "";
  let count = recommendation.rating;
  for (let i = 5; i > 0; i--) {
    if (count !== 0) {
      stars += "★";
      count -= 1;
    } else {
      stars += "☆";
    }
  }

  return (
    <tr>
      <td>{recommendation.point}</td>
      <td>{stars}</td>
      <td>{recommendation.title}</td>
    </tr>
  );
}

function Recommendation({ recommendations }) {
  return (
    <div>
      <table className="recotab">
        <thead>
          <th className="point">학점</th>
          <th className="star">평점</th>
          <th className="title">강의명</th>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <Recomend recommendation={recommendation} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShowLecture() {
  const readCsv = async () => {
    let file;
    let gra = 2;
    if (gra <= 2) {
      file = await d3.csv(lecture_detail_low_csv);
    } else {
      file = await d3.csv(lecture_detail_high_csv);
    }
    let need = file[0];
    let val = [];
    val.push(need.name);
    val.push(need.process);
    val.push(need.credit);
    val.push(need.contents);
    val.push(need.review);

    d3.select("#lecDetailtab")
      .selectAll("td")
      .data(val)
      .html((d, i) => d);
  };

  useEffect(() => {
    readCsv();
  }, []);

  return (
    <>
      <div>
        <table className="lecDetailtab">
          <tbody id="lecDetailtab">
            <tr>
              <th colSpan="2" className="name">
                강의명
              </th>
              <td colSpan="3" className="name">
                weNeed
              </td>
            </tr>
            <tr>
              <th colSpan="2" className="process">
                과정
              </th>
              <td colSpan="3" className="process"></td>
            </tr>
            <tr>
              <th colSpan="2" className="credit">
                학점
              </th>
              <td colSpan="3" className="contents"></td>
            </tr>
            <tr>
              <th colSpan="2" className="contents">
                내용
              </th>
              <td colSpan="3" className="credit"></td>
            </tr>
            <tr>
              <th colSpan="2" className="Review">
                Review
              </th>
              <td colSpan="3" className="Review"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function ShowAll() {
  return (
    <>
      <div>
        <InputEx />
      </div>
      <div>
        <Barchart />
      </div>
      <div>
        <Recommendation recommendations={recommendations} />
      </div>
      <div>
        <ShowLecture />
      </div>
    </>
  );
}

export default ShowAll;
