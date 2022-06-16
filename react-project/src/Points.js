import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import grade_data from "./data/mygrade.csv";
 


  
  function BarLinear(props) {
    // let info=0;
    // let done=0;
    const svgRef = useRef();

    const width = 1200;
    const height = 600;
    const margin = { top: 20, left: 20, bottom: 20, right: 20 };

    let info=props.info
    let done=2*parseInt(info.grade)+parseInt(info.semester)-4

    function colorPicker(v) {
      if (v <= done) {
        return "#1E90FF";
      } else if (v > done) {
        return "#ADD8E6";
      }
    }

    function barIndex(i){
      let bariD=i
      return bariD
    }

    const [graInfo, setgraInfo] = useState([[],[]]);    
    
    // const [data, setData] = useState([]);
    const MyGrade = async () => {
      let file= await d3.csv(grade_data);

      

      let credData=[];
      let graData=[];
      let res=[]

      for(let i=0;i<file.length;i++){
        credData.push(file[i].credit)
        graData.push(file[i].GPA)
      }
      res.push(credData)
      res.push(graData)
      // console.log(res)

      setgraInfo(res)
      
  }
  
    useEffect(() => {
      MyGrade();

      const svg = d3.select(svgRef.current);
  
      const xScale1 = d3
        .scaleBand()
        .domain(graInfo[0].map((v, i) => i))
        .range([20, 1180])
        .padding(0.4);
      const yScale1 = d3.scaleLinear().domain([0, 25]).range([450, 30]);
  
      const xAxis1 = d3.axisBottom(xScale1).ticks(graInfo[0].length);
      svg.select(".x-axis1").style("transform", "translateY(450px)").call(xAxis1);
      const yAxis1 = d3.axisRight(yScale1);
      svg.select(".y-axis1").style("transform", "translateX(1170px)").call(yAxis1);
  
      svg
        .selectAll(".bar")
        .data(graInfo[0])
        .join("rect")
        .attr("id",(v,i)=>barIndex(i))
        .attr("class", "bar")
        .attr("fill", function (d, i) {
          return colorPicker(i);
        })
        .attr("x", (v, i) => xScale1(i) + 13)
        .attr("y", yScale1)
        .attr("width", "60px")
        .attr("height", (v, i) => 450 - yScale1(v))

      const getGrade=(e)=>{
        let myData=e.target.id;
        props.needGrade(myData)
      }

      svg.selectAll(".bar").on("click",getGrade)

      svg
        .selectAll("text")
        .attr("font-size", "20px");
  
      const xScale2 = d3
        .scaleLinear()
        .domain([0, graInfo[1].length - 1])
        .range([70, 1100]);
      const yScale2 = d3.scaleLinear().domain([0, 4.5]).range([450, 30]);
  
      const yAxis2 = d3.axisLeft(yScale2);
      svg.select(".y-axis2").style("transform", "translateX(40px)").call(yAxis2);
  
      const myLine = d3
        .line()
        .x((v, i) => xScale2(i) + 20)
        .y((v) => yScale2(v) + 15);
      
      

      svg
        .selectAll(".path")
        .data([graInfo[1]])
        .join((enter) => enter.append("path"))
        .attr("d", (v) => myLine(v))
        .attr("fill", "none")
        .attr("stroke", "red");

      svg
        .append("text")
        .attr("class", "y_label3")
        .attr("text-anchor", "end")
        .attr("y",height+550)
        .attr("dy", ".100em")
        .attr("font-size","20px")
        .attr("transform", "rotate(-90)")
        .text("이수 학점");

      svg
        .append("text")
        .attr("font-size","20px")
        .attr("class", "y_label4")
        .attr("text-anchor", "end")
        .attr("y",height-540)
        .attr("dy", ".100em")
        .attr("transform", "rotate(-90)")
        .text("평점");
      
      
    }, [graInfo]);
  
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