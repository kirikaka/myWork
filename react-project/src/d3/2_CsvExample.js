import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import input_data from "../data/cities.csv";

function CsvExample() {
  const readCsv = async () => {
    let file = await d3.csv(input_data);

    d3.select(svgRef.current)
      .selectAll("div.cities")
      .data(file)
      .enter()
      .append("div")
      .attr("class", "cities")
      .html((d, i) => d.population);
  };

  let temp = [1, 3, 54, 2, 3, 2, 1, 3, 2, 5, 76];
  console.log(d3.mean(temp, (d) => d));

  useEffect(() => {
    readCsv();
  }, []);

  const svgRef = useRef();
  return (
    <>
      <div ref={svgRef}></div>
    </>
  );
}

export default CsvExample;
