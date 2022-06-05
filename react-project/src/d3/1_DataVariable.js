import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

function DataVariable() {
  const [mydata, setMydata] = useState([24, 12, 50, 80, 33]);
  const svgref = useRef();

  useEffect(() => {
    const svg = d3.select(svgref.current);
    svg
      .selectAll("circle")
      .data(mydata)
      .enter()
      .append("circle")
      .attr("class", "updated")
      .attr("r", (v) => v / 5)
      .attr("cx", (v, i) => i * 30)
      .attr("cy", (v) => v * 2)
      .attr("store", "red");
  }, [mydata]);

  return (
    <>
      <svg ref={svgref} width={300} height={300}></svg>
    </>
  );
}

export default DataVariable;
