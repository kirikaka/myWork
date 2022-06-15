import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";

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

  export default Barchart;