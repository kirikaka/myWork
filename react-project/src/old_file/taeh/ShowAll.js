import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import InputEx from "./Profile.js";
import BarLinear from "./Points.js";
import Barchart from "./Progress.js";
import Recommendation from "./Recommend.js";
import ShowLecture from "./Lecture";
import MakeTable from "./Semester.js";

function ShowAll() {
  return (
    <div className="container">
      <div id="profile">
        <InputEx />
      </div>
      <div id="points">
        <BarLinear />
      </div>
      <div id="progress">
        <Barchart />
      </div>
      <div id="recommend">
        <Recommendation  recommendations={recommendations} />
      </div>
      <div id="lecture">
        <ShowLecture />
      </div>
      <div id="semester">
        <MakeTable />
      </div>
    </div>
  );
}

export default ShowAll;