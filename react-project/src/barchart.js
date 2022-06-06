import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";

function Barchart() {
  const width = 400;
  const height = 300;
  const margin = { top: 20, left: 20, bottom: 20, right: 20 };
  const moveXaxis = 200;

  const [Mydata, setMydata] = useState([]);
  const svgRef = useRef(null);

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
      .domain(Mydata.map((d, i) => d.name))
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
      .attr("x", (v, i) => x(i))
      .attr("y", -150)
      .style("transform", "scale(1,-1)")
      .transition()
      .duration(2000)
      .attr("width", 30)
      .attr("fill", "blue")
      .attr("height", (v, i) => 300 - y(v));

    // add text
    svg
      .selectAll(".bar.text")
      .data(Mydata)
      .enter()
      .append("text")
      .text((d) => d.value + "%")
      .attr("x", (v) => x(v.name) + margin.right + 25)
      .attr("y", (v) => y(v.value) - 5) //
      .attr("fill", "black")
      .attr("font-family", "Tahoma")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle");
  }, [Mydata]);

  return (
    <p id="Bar">
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </p>
  );
}

export default Barchart;
