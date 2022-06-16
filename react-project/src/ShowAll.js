import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import InputEx from "./Profile.js";
import BarLinear from "./Points.js";
import Barchart from "./Progress.js";
import Recommendation from "./Recommend.js";
import ShowLecture from "./Lecture";
import MakeTable from "./Semester.js";

let information = {};

function ShowAll() {
  const [GiveName,setGiveName]=useState([]);
  const [semGrade,setSemGrade]=useState([]);
  const getInfo = (x) => {

    information["name"] = x["name"];
    information["major"] = x["major"];
    information["stuNum"] = x["stuNum"];
    information["grade"] = x["grade"];
    information["goal"] = x["goal"];
    information["semester"] = x["semester"];
  };

  const getData = (x) => {
    setGiveName([...x]);
  }

  const sem_grade=(x)=>{
    setSemGrade([x])
  }

  return (
    <div className="container">
      <div id="profile">
        <InputEx getProfile={getInfo} />
      </div>
      <div id="points">
        <BarLinear info={information} needGrade={sem_grade}/>
      </div>
      <div id="progress">
        <Barchart />
      </div>
      <div id="recommend">
        <Recommendation info={information} needName={getData}/>
      </div>
      <div id="lecture">
        <ShowLecture name={GiveName}/>
      </div>
      <div id="semester" >
        <MakeTable sem={semGrade}/>
      </div>
    </div>
  );
}

export default ShowAll;
