import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";

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

  export default BarLinear;