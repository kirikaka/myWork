import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";


function InputEx() {
  const [Inputs, setInputs] = useState({
    name: "",
    major: "",
    stuNum: "",
    grade: "",
    goal: ""
  });

  const { name, major, stuNum, grade, goal } = Inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      major: "",
      stuNum: "",
      grade: "",
      goal: ""
    });
  };
  return (
    <div>
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
    CredRes.push(parseInt((credData[0].liberal / credData[1].liberal) * 100));
    CredRes.push(parseInt((credData[0].Other / credData[1].Other) * 100));

    let CreditTable = [];
    let credL = Object.keys(dataSet[0]);
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
      .attr("x", (v,i) => i*90+50)
      .attr("y", (v,i) =>height-margin.top-(v.value)*2.6 )
      .attr("fill-opacity",0.8)
      .attr("width", 30)
      .attr("fill", "blue")
      .attr("height", (v,i)=>(v.value)*2.6);


    // add text
    svg
      .selectAll(".bar.text")
      .data(Mydata)
      .enter()
      .append("text")
      .text((d) => d.value + "%")
      .attr("x", (v,i) => x(v.name) + margin.right + 25)
      .attr("y", (v) => y(v.value) - 10) //
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




function DataTable(){

}

const recommendations = [
  {
  point: 3, 
  rating: 5, 
  title: "강의명0"
},
{
  point: 3, 
  rating: 4, 
  title: "강의명1"
},
{
  point: 3, 
  rating: 4, 
  title: "강의명2"
},
{
  point: 3, 
  rating: 3, 
  title: "강의명3"
}
];

function Recomend({recommendation})
{
    let stars = '';
    let count = recommendation.rating;
    for (let i = 5; i > 0; i--)
    {
        if(count !== 0)
        {
            stars += '★';
            count -= 1;
        }
        else
        {
            stars += '☆';
        }
    };
    
    return (
        <tr>
            <td>{recommendation.point}</td>
            <td>{stars}</td>
            <td>{recommendation.title}</td>
        </tr>
    )
}

function Recommendation({recommendations})
{
    return (
        <div>
            <table class = "recotab">
                <thead>
                    <th class = "point">학점</th>
                    <th class = "star">평점</th>
                    <th class = "title">강의명</th>
                </thead>
                <tbody>
                    {recommendations.map((recommendation) => 
                        (
                            <Recomend recommendation={recommendation}/>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

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
    </>
  );
}


export default ShowAll;
