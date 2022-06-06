import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

function Bar() {
  const cred_name = ["전체", "전공", "교양"];

  const width = 400;
  const height = 400;
  const margin = { top: 40, left: 40, bottom: 40, right: 40 };

  const [mydata, setMydata] = useState([82, 48, 28]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scaleBand()
      .domain(mydata.map((v, i) => i))
      .range([0, 300])
      .padding(0.4);
    const yScale = d3.scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(mydata.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
    const yAxis = d3.axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(270px)").call(yAxis);

    const colorScale = d3.scaleLinear().domain([10, 80]).range(["blue", "red"]);

    svg
      .selectAll(".bar")
      .data(mydata)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (v, i) => xScale(i))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .style("transform", "scale(1,-1)")
      .transition()
      .duration(2000)
      .attr("fill", colorScale)
      .attr("height", (v, i) => 150 - yScale(v));
  }, [mydata]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </>
  );
}

export default Bar;
