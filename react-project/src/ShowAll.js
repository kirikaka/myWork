import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";
import lecture_detail_low_csv from "./data/lecture_data_low.csv";
import lecture_detail_high_csv from "./data/lecture_data_high.csv";
import d3_freshman from "./data/d3_freshman.csv";
import grade_low_csv from "./data/low.csv";
import grade_high_csv from "./data/high.csv";

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
function colorPicker(v) {
  if (v <= 4) {
    return "#1E90FF";
  } else if (v > 4) {
    return "#ADD8E6";
  }
}

function BarLinear() {
  const width = 1100;
  const height = 600;
  const margin = { top: 20, left: 20, bottom: 20, right: 20 };
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   let grade_data = await d3.csv(d3_freshman);
  //   let did = [];
  //   did.push(grade_data.credit);
  //   did.push(grade_data.GPA);
  //   console.log(did);
  //   setData([...did]);
  // };

  const [data, setData] = useState([
    [15, 18, 15, 18, 18, 21, 12, 12],
    [2.7, 3.3, 3.8, 3.8, 4, 4.3, 4, 4.5],
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale1 = d3
      .scaleBand()
      .domain(data[0].map((v, i) => i))
      .range([20, 1100])
      .padding(0.4);
    const yScale1 = d3.scaleLinear().domain([0, 25]).range([450, 30]);

    const xAxis1 = d3.axisBottom(xScale1).ticks(data[0].length);
    svg.select(".x-axis1").style("transform", "translateY(450px)").call(xAxis1);
    const yAxis1 = d3.axisRight(yScale1);
    var color = d3.scaleOrdinal().range(["#0000FF", "#4169"]);

    svg
      .select(".y-axis1")
      .style("transform", "translateX(1070px)")
      .call(yAxis1);

    svg
      .selectAll(".bar")
      .data(data[0])
      .join("rect")
      .attr("class", "bar")
      .attr("fill", function (d, i) {
        return colorPicker(i);
      })
      .attr("x", (v, i) => xScale1(i) + 13)
      .attr("y", yScale1)
      .attr("width", "60px")
      .attr("height", (v, i) => 450 - yScale1(v));

    const xScale2 = d3
      .scaleLinear()
      .domain([0, data[1].length - 1])
      .range([30, 1030]);
    const yScale2 = d3.scaleLinear().domain([0, 4.5]).range([450, 30]);

    const yAxis2 = d3.axisLeft(yScale2);
    svg.select(".y-axis2").style("transform", "translateX(44px)").call(yAxis2);

    const myLine = d3
      .line()
      .x((v, i) => xScale2(i) + 20)
      .y((v) => yScale2(v) + 15);

    svg
      .selectAll(".path")
      .data([data[1]])
      .join((enter) => enter.append("path"))
      .attr("d", (v) => myLine(v))
      .attr("fill", "none")
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis1"></g>
        <g className="y-axis1"></g>
        <g className="x-axis2"></g>
        <g className="y-axis2"></g>
      </svg>
    </>
  );
}

function Barchart() {
  const width = 600;
  const height = 400;
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
        ((parseInt(credData[0].liberal) + parseInt(credData[0].Other)) /
          credData[1].liberal) *
          100
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
    svg.select(".x-axis").style("transform", "translateY(380px)").call(xAxis);

    const yAxis = d3.axisLeft(y).tickValues([0, 20, 40, 60, 80, 100]);
    svg.select(".y-axis").style("transform", "translateX(25px)").call(yAxis);

    var color = d3.scaleOrdinal().range(["#6667ab", "#ad7558", "#6bab55"]);
    // apply axis to canvas
    // vertical bar chart
    svg
      .selectAll(".bar")
      .data(Mydata)
      .join("rect")
      .attr("className", "bar")
      .attr("x", (v, i) => i * 185 + 90)
      .attr("y", (v, i) => height - margin.top - v.value * 3.6)
      .attr("fill-opacity", 0.8)
      .attr("width", 50)
      .attr("fill", color)
      .attr("height", (v, i) => v.value * 3.6);

    // add text
    svg
      .selectAll(".bar.text")
      .data(Mydata)
      .enter()
      .append("text")
      .text((d) => d.value + "%")
      .attr("x", (v, i) => x(v.name) + margin.right + 75)
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

function showDetail() {
  document.getElementById("centerBelow").style.visibility = "visible";
}

function Recommend({ recommendation }) {
  let stars = "";
  let count = parseInt(recommendation.rating);
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
      <td onClick={showDetail}>{recommendation.title}</td>
    </tr>
  );
}

let recommendations = Array(6);

const NeedCsv = async () => {
  let file;
  let gra = 2;
  if (gra <= 2) {
    file = await d3.csv(lecture_detail_low_csv);
  } else {
    file = await d3.csv(lecture_detail_high_csv);
  }
  let a = file;
  for (let i = 0; i < a.length; i++) {
    let tmp = {};
    tmp.point = a[i].credit;
    tmp.rating = a[i].rating;
    tmp.title = a[i].name;
    recommendations[i] = tmp;
  }
};

NeedCsv();

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
            <Recommend recommendation={recommendation} />
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
    val.push(need.professor);
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
        <table id="lecDetailtab">
          <tbody>
            <tr>
              <th className="name">강의명</th>
              <td className="name"></td>
            </tr>
            <tr>
              <th className="professor">
                <a href="https://sites.google.com/view/hcclab" target="_blank">
                  교수
                </a>
              </th>
              <td className="professor"></td>
            </tr>
            <tr>
              <th className="process">과정</th>
              <td className="process"></td>
            </tr>
            <tr>
              <th className="credit">학점</th>
              <td className="contents"></td>
            </tr>
            <tr>
              <th className="contents">내용</th>
              <td className="credit"></td>
            </tr>
            <tr>
              <th className="Review">Review</th>
              <td className="Review"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function MakeTable() {
  const needCa = async () => {
    let file;
    let gra = 3;
    if (gra <= 2) {
      file = await d3.csv(grade_low_csv);
    } else {
      file = await d3.csv(grade_high_csv);
    }
    var tr = d3
      .select("#makeTab tbody")
      .selectAll("tr")
      .data(file)
      .enter()
      .append("tr");
    var td = tr
      .selectAll("td")
      .data(function (d, i) {
        return Object.values(d);
      })
      .enter()
      .append("td")
      .text(function (d) {
        return d;
      });
  };

  useEffect(() => {
    needCa();
  }, []);

  return (
    <>
      <table id="makeTab">
        <thead>
          <tr>
            <th>과목명</th>
            <th className="credit_right_below">학점</th>
            <th className="process_right_below">이수구분</th>
            <th className="grade_right_below">성적</th>
            <th className="again_right_below">재수강여부</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

function ShowAll() {
  return (
    <div className="container">
      <div id="profile">
        <InputEx />
      </div>
      <div id="rigpointshtTop">
        <BarLinear />
      </div>
      <div id="progress">
        <Barchart />
      </div>
      <div id="recommend">
        <Recommendation recommendations={recommendations} />
      </div>
      <div id="lecture">
        <ShowLecture />
      </div>
      <div id="semester">
        <MakeTable />
      </div>
    </div>
  );
}

export default ShowAll;
