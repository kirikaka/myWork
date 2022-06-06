import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

function Line() {
  const [mydata, setMydata] = useState([24, 70, 35, 65, 80]);
  const svgRef = useRef();

  useEffect(() => {
    const xScale = d3
      .scaleLinear()
      .domain([0, mydata.length - 1])
      .range([0, 300]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([300, 0]);

    const xAxis = d3.axisBottom(xScale).tickValues([0, 1, 2, 3]);
    const svg = d3.select(svgRef.current);
    svg.select(".x-axis").style("transform", "translateY(280px)").call(xAxis);

    const myLine = d3
      .line()
      .x((v, i) => xScale(i))
      .y((v) => yScale(v))
      .curve(d3.curveBasis);
    svg
      .selectAll(".line")
      .data([mydata])
      .enter()
      .append("path")
      .attr("class", "line")
      .attr("d", (v) => myLine(v))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [mydata]);

  return (
    <>
      <svg ref={svgRef} width={300} height={300}>
        <g className="x-axis"></g>
      </svg>
    </>
  );
}

export default Line;
